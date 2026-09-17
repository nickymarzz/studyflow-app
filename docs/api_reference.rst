API Reference
=============

This document provides a technical reference for the StudyFlow JavaScript client API and its data models.

Overview
--------

StudyFlow is designed as a client-side Single Page Application (SPA). The application logic is encapsulated within the globally available ``StudyFlow`` object in ``public/app.js``, which also exports itself for CommonJS/module environments.

All persistence is handled client-side using browser ``localStorage``, ensuring instant responsiveness, full offline capabilities, and zero data leakage.

Storage Schema
--------------

StudyFlow uses the following keys in ``localStorage``:

.. list-table::
   :widths: 30 70
   :header-rows: 1

   * - Storage Key
     - Description
   * - ``studyflow_tasks``
     - JSON array containing all task entities across all boards.
   * - ``studyflow_boards``
     - JSON array of board entities created by the user.
   * - ``studyflow_current_board``
     - String ID of the currently selected active board.
   * - ``studyflow_theme``
     - User theme preference (``"light"`` or ``"dark"``).
   * - ``studyflow_reminders_sent``
     - JSON array of notification keys (``taskId_timestamp``) already triggered.

Data Models
-----------

Task Model
~~~~~~~~~~

.. code-block:: typescript

    interface Task {
      id: string;             // Unique identifier (e.g., 'task_172658..._abc12')
      boardId: string;        // ID of the board the task belongs to
      title: string;          // Task title
      description: string;    // Task description or markdown notes
      status: 'todo' | 'inprogress' | 'done';
      priority: 'low' | 'medium' | 'high';
      dueDate: string | null; // ISO 8601 string or date input format
      reminder: string | null;// ISO 8601 date-time string for browser alert
      createdAt: string;      // ISO 8601 timestamp
      updatedAt: string;      // ISO 8601 timestamp
    }

Board Model
~~~~~~~~~~~

.. code-block:: typescript

    interface Board {
      id: string;             // Unique identifier (e.g., 'default' or 'board_172658...')
      name: string;           // Display name (e.g., '📘 CS101 - Data Structures')
    }

StudyFlow API Methods
---------------------

Task Management (``StudyFlow.tasks``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. js:function:: StudyFlow.tasks.getAll()

   Returns an array of all tasks belonging to the currently active board.

   :returns: Array of ``Task`` objects.

.. js:function:: StudyFlow.tasks.getById(id)

   Finds a task by its unique identifier.

   :param string id: Task identifier.
   :returns: ``Task`` object or ``undefined``.

.. js:function:: StudyFlow.tasks.create(data)

   Creates and persists a new task in the active board.

   :param object data: Task fields (``title``, ``description``, ``status``, ``priority``, ``dueDate``, ``reminder``).
   :returns: Newly created ``Task`` object.

.. js:function:: StudyFlow.tasks.update(id, data)

   Updates an existing task's properties and refreshes the Kanban view.

   :param string id: Task identifier.
   :param object data: Updated fields.
   :returns: Updated ``Task`` object or ``null``.

.. js:function:: StudyFlow.tasks.delete(id)

   Removes a task from state and LocalStorage.

   :param string id: Task identifier.
   :returns: Boolean indicating deletion success.

.. js:function:: StudyFlow.tasks.move(id, newStatus)

   Transitions a task between columns (``'todo'``, ``'inprogress'``, ``'done'``).

   :param string id: Task identifier.
   :param string newStatus: New status column.
   :returns: Updated ``Task`` object.

Board Management (``StudyFlow.boards``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. js:function:: StudyFlow.boards.getAll()

   Returns a list of all existing boards.

   :returns: Array of ``Board`` objects.

.. js:function:: StudyFlow.boards.create(name)

   Creates a new board, persists it to storage, and renders it in the board selector.

   :param string name: Name of the board.
   :returns: Newly created ``Board`` object.

.. js:function:: StudyFlow.boards.switch(boardId)

   Sets the active board, stores the selection in LocalStorage, and renders its tasks.

   :param string boardId: Board identifier to switch to.

Reminders (``StudyFlow.reminders``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. js:function:: StudyFlow.reminders.check()

   Scans tasks for pending reminders where ``reminder <= Date.now()`` and triggers alerts if not yet sent. Runs automatically every 30 seconds.

.. js:function:: StudyFlow.reminders.trigger(task)

   Fires a native desktop Notification (if permission granted) and shows an in-app toast message.

.. js:function:: StudyFlow.reminders.requestPermission()

   Requests desktop notification permission from the user via the browser's Notification API.

Analytics (``StudyFlow.openAnalyticsModal``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. js:function:: StudyFlow.openAnalyticsModal()

   Calculates total task count and completion percentage for the active board, and renders/updates the interactive Chart.js doughnut chart.

Settings & Theme (``StudyFlow.settings``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. js:function:: StudyFlow.settings.setTheme(theme)

   Sets the document theme attribute (``data-theme="dark"`` or ``"light"``) and persists the choice to LocalStorage.

.. js:function:: StudyFlow.settings.toggleTheme()

   Toggles between light and dark themes.
