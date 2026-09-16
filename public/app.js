/**
 * StudyFlow Application
 * Version: 0.1.0
 *
 * Core features:
 * - Kanban board with drag & drop
 * - Task CRUD with localStorage persistence
 * - Multi-board support
 * - Dark / light theme toggle
 * - Due date indicators (overdue / soon)
 * - Browser notification reminders
 */

console.log('%c📚 StudyFlow v0.1.0', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cBuilt by students, for students 🎓', 'color: #764ba2; font-size: 14px;');
console.log('GitHub: https://github.com/nickymarzz/studyflow-app');
console.log('Docs: https://studyflow-app.readthedocs.io/');

const STORAGE_KEYS = {
    TASKS: 'studyflow_tasks',
    BOARDS: 'studyflow_boards',
    CURRENT_BOARD: 'studyflow_current_board',
    THEME: 'studyflow_theme',
    REMINDERS_SENT: 'studyflow_reminders_sent'
};

const StudyFlow = {
    version: '0.1.0',

    state: {
        tasks: [],
        boards: [{ id: 'default', name: '📘 My Tasks' }],
        currentBoard: 'default',
        theme: 'light',
        draggedTaskId: null,
        remindersSent: new Set()
    },

    boards: {
        getAll: () => [...StudyFlow.state.boards],
        create: (name) => {
            const board = {
                id: 'board_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
                name: name.trim()
            };
            StudyFlow.state.boards.push(board);
            StudyFlow.saveBoards();
            StudyFlow.renderBoardSelect();
            StudyFlow.toast(`Board "${board.name}" created`, 'success');
            return board;
        },
        switch: (boardId) => {
            StudyFlow.state.currentBoard = boardId;
            localStorage.setItem(STORAGE_KEYS.CURRENT_BOARD, boardId);
            StudyFlow.renderBoardSelect();
            StudyFlow.renderTasks();
        }
    },

    tasks: {
        getAll: () =>
            StudyFlow.state.tasks.filter(t => t.boardId === StudyFlow.state.currentBoard),

        getById: (id) =>
            StudyFlow.state.tasks.find(t => t.id === id),

        create: (data) => {
            const task = {
                id: 'task_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
                boardId: StudyFlow.state.currentBoard,
                title: data.title.trim(),
                description: (data.description || '').trim(),
                status: data.status || 'todo',
                priority: data.priority || 'medium',
                dueDate: data.dueDate || null,
                reminder: data.reminder || null,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            StudyFlow.state.tasks.push(task);
            StudyFlow.saveTasks();
            StudyFlow.renderTasks();
            StudyFlow.updateCounts();
            StudyFlow.toast(`Task "${task.title}" added`, 'success');
            return task;
        },

        update: (id, data) => {
            const task = StudyFlow.tasks.getById(id);
            if (!task) return null;
            Object.assign(task, data, { updatedAt: new Date().toISOString() });
            if (data.title) task.title = data.title.trim();
            if (data.description !== undefined) task.description = (data.description || '').trim();
            StudyFlow.saveTasks();
            StudyFlow.renderTasks();
            StudyFlow.updateCounts();
            StudyFlow.toast('Task updated', 'success');
            return task;
        },

        delete: (id) => {
            const idx = StudyFlow.state.tasks.findIndex(t => t.id === id);
            if (idx === -1) return false;
            const [removed] = StudyFlow.state.tasks.splice(idx, 1);
            StudyFlow.saveTasks();
            StudyFlow.renderTasks();
            StudyFlow.updateCounts();
            StudyFlow.toast(`Task "${removed.title}" deleted`, 'warning');
            return true;
        },

        move: (id, newStatus) => {
            const task = StudyFlow.tasks.getById(id);
            if (!task || task.status === newStatus) return task;
            task.status = newStatus;
            task.updatedAt = new Date().toISOString();
            StudyFlow.saveTasks();
            StudyFlow.renderTasks();
            StudyFlow.updateCounts();
            return task;
        }
    },

    reminders: {
        check: () => {
            const now = Date.now();
            const tasks = StudyFlow.tasks.getAll();
            tasks.forEach(task => {
                if (!task.reminder) return;
                if (task.status === 'done') return;
                const reminderTime = new Date(task.reminder).getTime();
                const key = task.id + '_' + reminderTime;
                if (now >= reminderTime && !StudyFlow.state.remindersSent.has(key)) {
                    StudyFlow.reminders.trigger(task);
                    StudyFlow.state.remindersSent.add(key);
                    StudyFlow.saveRemindersSent();
                }
            });
        },

        trigger: (task) => {
            if ('Notification' in window && Notification.permission === 'granted') {
                const notif = new Notification('⏰ StudyFlow Reminder', {
                    body: task.title + (task.dueDate ? ` (Due: ${StudyFlow.formatDate(task.dueDate)})` : ''),
                    icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ctext y=".9em" font-size="90"%3E📚%3C/text%3E%3C/svg%3E'
                });
                notif.onclick = () => {
                    window.focus();
                    notif.close();
                };
                setTimeout(() => notif.close(), 8000);
            }
            StudyFlow.toast(`⏰ Reminder: ${task.title}`, 'warning');
        },

        requestPermission: async () => {
            if (!('Notification' in window)) return;
            if (Notification.permission === 'default') {
                try {
                    const perm = await Notification.requestPermission();
                    if (perm === 'granted') {
                        StudyFlow.toast('Notifications enabled', 'success');
                    }
                } catch (e) { /* ignore */ }
            }
        }
    },

    settings: {
        setTheme: (theme) => {
            StudyFlow.state.theme = theme;
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(STORAGE_KEYS.THEME, theme);
            const icon = document.getElementById('themeIcon');
            if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        },
        toggleTheme: () => {
            StudyFlow.settings.setTheme(
                StudyFlow.state.theme === 'dark' ? 'light' : 'dark'
            );
        }
    },

    saveTasks: () =>
        localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(StudyFlow.state.tasks)),

    saveBoards: () =>
        localStorage.setItem(STORAGE_KEYS.BOARDS, JSON.stringify(StudyFlow.state.boards)),

    saveRemindersSent: () =>
        localStorage.setItem(
            STORAGE_KEYS.REMINDERS_SENT,
            JSON.stringify([...StudyFlow.state.remindersSent])
        ),

    loadState: () => {
        try {
            const tasks = JSON.parse(localStorage.getItem(STORAGE_KEYS.TASKS) || '[]');
            StudyFlow.state.tasks = Array.isArray(tasks) ? tasks : [];

            const boards = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOARDS) || 'null');
            if (Array.isArray(boards) && boards.length) {
                StudyFlow.state.boards = boards;
            }

            const currentBoard = localStorage.getItem(STORAGE_KEYS.CURRENT_BOARD);
            if (currentBoard && StudyFlow.state.boards.find(b => b.id === currentBoard)) {
                StudyFlow.state.currentBoard = currentBoard;
            }

            const theme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
            StudyFlow.state.theme = theme === 'dark' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', StudyFlow.state.theme);

            const sent = JSON.parse(localStorage.getItem(STORAGE_KEYS.REMINDERS_SENT) || '[]');
            StudyFlow.state.remindersSent = new Set(Array.isArray(sent) ? sent : []);
        } catch (e) {
            console.error('Failed to load StudyFlow state:', e);
        }
    },

    formatDate: (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return '';
        return d.toLocaleDateString(undefined, {
            month: 'short', day: 'numeric', year: 'numeric'
        });
    },

    getDueDateStatus: (dueDate) => {
        if (!dueDate) return { cls: '', label: '' };
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const due = new Date(dueDate);
        due.setHours(0, 0, 0, 0);
        const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        if (diffDays < 0) return { cls: 'overdue', label: `${StudyFlow.formatDate(dueDate)} (${Math.abs(diffDays)}d overdue)` };
        if (diffDays === 0) return { cls: 'soon', label: 'Due today' };
        if (diffDays <= 2) return { cls: 'soon', label: `${StudyFlow.formatDate(dueDate)} (${diffDays}d)` };
        return { cls: '', label: StudyFlow.formatDate(dueDate) };
    },

    renderTasks: () => {
        const statuses = ['todo', 'inprogress', 'done'];
        const tasksByStatus = {};
        statuses.forEach(s => tasksByStatus[s] = []);

        StudyFlow.tasks.getAll().forEach(task => {
            if (tasksByStatus[task.status]) tasksByStatus[task.status].push(task);
        });

        statuses.forEach(status => {
            const listEl = document.getElementById(status + '-list');
            if (!listEl) return;
            listEl.innerHTML = '';

            const tasks = tasksByStatus[status];
            if (tasks.length === 0) {
                listEl.innerHTML = `
                    <div class="empty-state">
                        <span class="empty-state-icon">📋</span>
                        <span>No tasks yet. Drop tasks here!</span>
                    </div>`;
                return;
            }

            tasks
                .sort((a, b) => {
                    const priOrder = { high: 0, medium: 1, low: 2 };
                    if (priOrder[a.priority] !== priOrder[b.priority]) {
                        return priOrder[a.priority] - priOrder[b.priority];
                    }
                    if (a.dueDate && b.dueDate) return new Date(a.dueDate) - new Date(b.dueDate);
                    if (a.dueDate) return -1;
                    if (b.dueDate) return 1;
                    return new Date(b.createdAt) - new Date(a.createdAt);
                })
                .forEach(task => listEl.appendChild(StudyFlow.createTaskCard(task)));
        });

        StudyFlow.updateCounts();
    },

    createTaskCard: (task) => {
        const card = document.createElement('div');
        card.className = `task-card priority-${task.priority} status-${task.status}`;
        card.draggable = true;
        card.dataset.taskId = task.id;

        const due = StudyFlow.getDueDateStatus(task.dueDate);
        const reminderBadge = task.reminder
            ? `<span class="task-reminder-badge" title="Reminder set">🔔</span>`
            : '';

        card.innerHTML = `
            <div class="task-header">
                <div class="task-title">${StudyFlow.escapeHtml(task.title)}</div>
                <div class="task-actions">
                    <button class="task-action-btn edit" title="Edit" data-action="edit" data-id="${task.id}">✏️</button>
                    <button class="task-action-btn delete" title="Delete" data-action="delete" data-id="${task.id}">🗑️</button>
                </div>
            </div>
            ${task.description
                ? `<div class="task-description">${StudyFlow.escapeHtml(task.description)}</div>`
                : ''}
            <div class="task-meta">
                <span class="task-priority ${task.priority}">${task.priority}</span>
                <div>
                    ${task.dueDate
                        ? `<span class="task-due ${due.cls}">📅 ${due.label}</span>`
                        : ''}
                    ${reminderBadge}
                </div>
            </div>
        `;

        card.addEventListener('dragstart', (e) => {
            StudyFlow.state.draggedTaskId = task.id;
            card.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', task.id);
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            StudyFlow.state.draggedTaskId = null;
            document.querySelectorAll('.kanban-column').forEach(col =>
                col.classList.remove('drag-over')
            );
        });

        card.querySelectorAll('.task-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = btn.dataset.action;
                const id = btn.dataset.id;
                if (action === 'edit') StudyFlow.openTaskModal(id);
                else if (action === 'delete') StudyFlow.deleteTaskConfirm(id);
            });
        });

        card.addEventListener('dblclick', () => StudyFlow.openTaskModal(task.id));

        return card;
    },

    updateCounts: () => {
        ['todo', 'inprogress', 'done'].forEach(status => {
            const count = StudyFlow.tasks.getAll().filter(t => t.status === status).length;
            const el = document.getElementById(status + '-count');
            if (el) el.textContent = count;
        });
    },

    renderBoardSelect: () => {
        const select = document.getElementById('boardSelect');
        if (!select) return;
        select.innerHTML = '';
        StudyFlow.state.boards.forEach(board => {
            const opt = document.createElement('option');
            opt.value = board.id;
            opt.textContent = board.name;
            if (board.id === StudyFlow.state.currentBoard) opt.selected = true;
            select.appendChild(opt);
        });
    },

    escapeHtml: (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    toast: (message, type = 'success') => {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
        toast.innerHTML = `
            <span class="toast-icon">${icons[type] || '📌'}</span>
            <span>${StudyFlow.escapeHtml(message)}</span>
        `;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    },

    openTaskModal: (taskId = null) => {
        const modal = document.getElementById('taskModal');
        const form = document.getElementById('taskForm');
        const title = document.getElementById('modalTitle');
        if (!modal || !form) return;

        form.reset();
        document.getElementById('taskId').value = '';

        if (taskId) {
            const task = StudyFlow.tasks.getById(taskId);
            if (!task) return;
            title.textContent = 'Edit Task';
            document.getElementById('taskId').value = task.id;
            document.getElementById('taskTitle').value = task.title;
            document.getElementById('taskDescription').value = task.description;
            document.getElementById('taskStatus').value = task.status;
            document.getElementById('taskPriority').value = task.priority;
            document.getElementById('taskDueDate').value = task.dueDate || '';
            document.getElementById('taskReminder').value = task.reminder || '';
        } else {
            title.textContent = 'New Task';
        }

        modal.classList.add('open');
        setTimeout(() => document.getElementById('taskTitle').focus(), 100);
    },

    closeTaskModal: () => {
        const modal = document.getElementById('taskModal');
        if (modal) modal.classList.remove('open');
    },

    openBoardModal: () => {
        const modal = document.getElementById('boardModal');
        const form = document.getElementById('boardForm');
        if (!modal || !form) return;
        form.reset();
        modal.classList.add('open');
        setTimeout(() => document.getElementById('boardName').focus(), 100);
    },

    closeBoardModal: () => {
        const modal = document.getElementById('boardModal');
        if (modal) modal.classList.remove('open');
    },

    deleteTaskConfirm: (id) => {
        const task = StudyFlow.tasks.getById(id);
        if (!task) return;
        if (confirm(`Delete task "${task.title}"? This cannot be undone.`)) {
            StudyFlow.tasks.delete(id);
        }
    },

    setupDragDrop: () => {
        document.querySelectorAll('.kanban-column').forEach(col => {
            const list = col.querySelector('.task-list');
            if (!list) return;

            col.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                col.classList.add('drag-over');
            });

            col.addEventListener('dragleave', (e) => {
                if (!col.contains(e.relatedTarget)) {
                    col.classList.remove('drag-over');
                }
            });

            list.addEventListener('dragover', (e) => e.preventDefault());

            col.addEventListener('drop', (e) => {
                e.preventDefault();
                col.classList.remove('drag-over');
                const taskId = StudyFlow.state.draggedTaskId || e.dataTransfer.getData('text/plain');
                const newStatus = col.dataset.status;
                if (taskId && newStatus) {
                    StudyFlow.tasks.move(taskId, newStatus);
                }
            });
        });
    },

    setupEventListeners: () => {
        document.getElementById('addTaskBtn')?.addEventListener('click', () => {
            StudyFlow.reminders.requestPermission();
            StudyFlow.openTaskModal();
        });

        document.getElementById('closeModalBtn')?.addEventListener('click', StudyFlow.closeTaskModal);
        document.getElementById('cancelTaskBtn')?.addEventListener('click', StudyFlow.closeTaskModal);

        document.getElementById('taskModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'taskModal') StudyFlow.closeTaskModal();
        });

        document.getElementById('taskForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const taskId = document.getElementById('taskId').value;
            const data = {
                title: document.getElementById('taskTitle').value,
                description: document.getElementById('taskDescription').value,
                status: document.getElementById('taskStatus').value,
                priority: document.getElementById('taskPriority').value,
                dueDate: document.getElementById('taskDueDate').value || null,
                reminder: document.getElementById('taskReminder').value || null
            };
            if (taskId) StudyFlow.tasks.update(taskId, data);
            else StudyFlow.tasks.create(data);
            StudyFlow.closeTaskModal();
        });

        document.getElementById('addBoardBtn')?.addEventListener('click', StudyFlow.openBoardModal);
        document.getElementById('closeBoardModalBtn')?.addEventListener('click', StudyFlow.closeBoardModal);
        document.getElementById('cancelBoardBtn')?.addEventListener('click', StudyFlow.closeBoardModal);

        document.getElementById('boardModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'boardModal') StudyFlow.closeBoardModal();
        });

        document.getElementById('boardForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('boardName').value.trim();
            if (!name) return;
            const newBoard = StudyFlow.boards.create(name);
            StudyFlow.boards.switch(newBoard.id);
            StudyFlow.closeBoardModal();
        });

        document.getElementById('boardSelect')?.addEventListener('change', (e) => {
            StudyFlow.boards.switch(e.target.value);
        });

        document.getElementById('themeToggle')?.addEventListener('click', StudyFlow.settings.toggleTheme);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                StudyFlow.closeTaskModal();
                StudyFlow.closeBoardModal();
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
                e.preventDefault();
                StudyFlow.openTaskModal();
            }
        });
    },

    init: () => {
        document.addEventListener('DOMContentLoaded', () => {
            StudyFlow.loadState();
            const themeIcon = document.getElementById('themeIcon');
            if (themeIcon) themeIcon.textContent = StudyFlow.state.theme === 'dark' ? '☀️' : '🌙';
            StudyFlow.renderBoardSelect();
            StudyFlow.renderTasks();
            StudyFlow.setupDragDrop();
            StudyFlow.setupEventListeners();
            StudyFlow.reminders.check();
            setInterval(StudyFlow.reminders.check, 30000);
            console.log('✅ StudyFlow initialized successfully');
        });
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = StudyFlow;
}

StudyFlow.init();
