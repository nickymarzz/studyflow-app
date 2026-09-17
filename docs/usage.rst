How to Use StudyFlow
====================

This guide will help you understand how to use StudyFlow effectively for managing your academic life.

.. note::
   StudyFlow is currently at version **0.1.0 (MVP)**. The core application is an interactive, lightweight Single Page Application running entirely in the browser with LocalStorage.

Using the Core Application (v0.1.0)
-----------------------------------

Start the application with::

    npm run dev:app

Navigate to ``http://localhost:3000`` in your browser.

Managing Kanban Boards
~~~~~~~~~~~~~~~~~~~~~~~

**Creating & Switching Boards**

1. Click **+ New Board** in the header.
2. Enter a descriptive title (e.g., "CS101 - Data Structures" or "Final Term Project").
3. Use the dropdown board selector in the top bar to switch between your active course boards instantly.

**Adding and Managing Tasks**

1. Click **+ Add Task** in the header or press ``Ctrl+N``.
2. Provide a title, description, course status (To Do, In Progress, Done), priority (Low, Medium, High), and due date.
3. Drag and drop task cards between columns as you work.
4. Click the edit icon (✏️) or double-click any card to update details, or the trash icon (🗑️) to delete a task.

**Smart Reminders**

1. When adding or editing a task, specify a date and time in the **Reminder Date & Time** field.
2. Grant desktop notification permissions when prompted.
3. StudyFlow checks active reminders and triggers native desktop alerts when your deadlines approach.

**Viewing Progress Analytics**

1. Click the **📊 Analytics** button in the header.
2. View key productivity metrics:
   
   * Total task count
   * Overall task completion rate (%)
   * Visual doughnut breakdown of tasks by status (To Do, In Progress, Done)

**Theme Customization**

* Toggle between Dark Mode and Light Mode anytime by clicking the theme toggle icon (☀️ / 🌙) in the header.
* Your theme choice is automatically preserved across browser sessions.

Running the Jekyll Marketing Site
---------------------------------

The ``website/`` directory contains the Jekyll-based marketing site:

1. Run the local Jekyll server::

    npm run dev:website
    # or
    cd website && bundle exec jekyll serve

2. Open ``http://localhost:4000`` to preview the landing pages.


Using the Calendar View
~~~~~~~~~~~~~~~~~~~~~~~~

**Calendar Features**

* View all deadlines in monthly/weekly calendar
* Color-code by course or priority
* Sync with Google Calendar, Outlook, or iCal
* Set recurring events for classes
* Block study time on your calendar

**Managing Deadlines**

* See upcoming deadlines at a glance
* Filter by course or project
* Reschedule tasks by dragging in calendar
* Set buffer time before major deadlines

Customization
-------------

Dark Mode
~~~~~~~~~

Toggle between light and dark themes:

1. Click your profile icon
2. Select "Appearance"
3. Choose Light, Dark, or Auto (based on system settings)

Privacy Settings
~~~~~~~~~~~~~~~~

**Self-Hosting**

For maximum privacy, self-host StudyFlow:

1. Follow the :doc:`getting_started` guide
2. Deploy to your own server
3. Configure database settings
4. Set up backups

**Data Control**

* Export all your data at any time
* Delete your account and all associated data
* Control what data is stored
* No third-party tracking or analytics

Tips for Success
-----------------

Best Practices
~~~~~~~~~~~~~~

* **Review daily** - Check your boards every morning
* **Plan weekly** - Set up tasks for the upcoming week every Sunday
* **Use labels** - Categorize tasks for easy filtering
* **Set realistic deadlines** - Give yourself buffer time
* **Archive regularly** - Keep your boards clean and focused

Keyboard Shortcuts
~~~~~~~~~~~~~~~~~~

Speed up your workflow with keyboard shortcuts (coming soon):

* ``Ctrl+N`` - New task
* ``Ctrl+K`` - Quick search
* ``Ctrl+/`` - Show all shortcuts
* ``Esc`` - Close modal
* Arrow keys - Navigate between tasks

Getting Help
------------

If you need assistance:

* Check the :doc:`faq` for common questions
* Join our `Discord server <https://discord.gg/v2ctzYdp>`_ for real-time help
* Ask on `GitHub Discussions <https://github.com/nickymarzz/studyflow-app/discussions>`_
* Report bugs on `GitHub Issues <https://github.com/nickymarzz/studyflow-app/issues>`_

Next Steps
----------

* Explore the :doc:`technical_overview` to understand how StudyFlow works
* Read the :doc:`configuration` guide to customize your setup
* Check :doc:`contributing` to help build StudyFlow
