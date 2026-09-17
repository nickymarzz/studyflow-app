Release Notes
=============

This page documents all notable changes to the StudyFlow project.

Version 0.1.0 (Current Release)
-------------------------------

**Release Date**: September 2026

**Status**: MVP Release

This release delivers the functional Core Application MVP for StudyFlow alongside monorepo automation and CI/CD enhancements.

Added
~~~~~

* **Core Kanban Web Application**

  * Interactive Kanban board with HTML5 drag-and-drop task movement
  * Full task management (Create, Read, Update, Delete) with priority badges (High, Medium, Low)
  * Due date tracking with automatic dynamic badges (Overdue, Due today, Due soon)
  * Multi-board management allowing users to create separate boards for different courses or projects
  * Desktop notifications for scheduled task reminders via browser Notification API
  * Visual Progress Analytics modal with dynamic completion rates and interactive Chart.js doughnut chart
  * Dark and Light theme toggle with LocalStorage persistence
  * Pure client-side architecture using LocalStorage for zero-setup, private, offline-capable usage

* **Monorepo & CI/CD Infrastructure**

  * Unified npm scripts in ``package.json`` (``dev:app``, ``dev:website``, ``dev:docs``)
  * Automated GitHub Actions workflow deploying the Jekyll website to GitHub Pages
  * GitHub issue templates (Bug report, Feature request) and Pull Request template
  * Security policy (``SECURITY.md``)

Version 0.0.1 (Skeleton Release)
---------------------------------

**Release Date**: December 2025

**Status**: Initial skeleton structure

This is the foundational release of StudyFlow, establishing the project structure and documentation.

Added
~~~~~

* **Jekyll Website**
  
  * Marketing website with home, features, community, and contact pages
  * Responsive design with dark mode support
  * Custom CSS styling with gradients and modern UI
  * Navigation menu with links to documentation and GitHub

* **Sphinx Documentation**
  
  * Comprehensive documentation structure
  * ReadTheDocs integration
  * Documentation pages: About, Getting Started, Usage, Technical Overview, API Reference, Configuration, Maintenance, Contributing, FAQ, Release Notes
  * Auto-build on commits to main branch

* **Project Infrastructure**
  
  * GitHub repository setup
  * Apache 2.0 License
  * Code of Conduct
  * Contributing guidelines

* **Community Channels**
  
  * Discord server for real-time chat
  * GitHub Discussions for Q&A
  * Google Group for announcements

* **Development Tools**
  
  * Git version control
  * GitHub Actions CI/CD (planned)
  * Bundler for Ruby dependencies
  * npm for future JavaScript development

Future Roadmap
--------------

Version 0.2.0 (Planned)
~~~~~~~~~~~~~~~~~~~~~~~

* Data backup & restore (JSON import and export)
* Integrated Pomodoro study timer
* Course color coding and custom tag filters
* Enhanced keyboard navigation shortcuts

Version 0.3.0 (Planned)
~~~~~~~~~~~~~~~~~~~~~~~

* Progressive Web App (PWA) offline support and service worker
* Academic calendar timeline view
* Customizable column workflows for Kanban boards

Version 1.0.0 (Planned)
~~~~~~~~~~~~~~~~~~~~~~~

* Mobile touch gesture optimization
* Internationalization (i18n) support
* Full accessibility (WCAG 2.1 AA) compliance


Changelog Format
----------------

We follow the `Keep a Changelog <https://keepachangelog.com/>`_ format:

* **Added** - New features
* **Changed** - Changes to existing functionality
* **Deprecated** - Soon-to-be removed features
* **Removed** - Removed features
* **Fixed** - Bug fixes
* **Security** - Security improvements

Versioning
----------

StudyFlow follows `Semantic Versioning <https://semver.org/>`_:

* **MAJOR** version for incompatible API changes
* **MINOR** version for new functionality in a backwards compatible manner
* **PATCH** version for backwards compatible bug fixes

Pre-release versions may use suffixes like ``-alpha``, ``-beta``, or ``-rc``.

Stay Updated
------------

To stay informed about new releases:

* Watch the `GitHub repository <https://github.com/nickymarzz/studyflow-app>`_
* Join our `Discord server <https://discord.gg/v2ctzYdp>`_
* Subscribe to our `Google Group <https://groups.google.com/g/study-flow-app>`_
* Follow development on `GitHub Discussions <https://github.com/nickymarzz/studyflow-app/discussions>`_

Contributing
------------

Want to help shape the future of StudyFlow? See our :doc:`contributing` guide to get started!
