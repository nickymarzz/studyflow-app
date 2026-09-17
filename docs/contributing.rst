Contribution Guidelines
=======================

We welcome contributions to StudyFlow! By participating in this project, you agree to 
abide by our `Code of Conduct <https://github.com/nickymarzz/studyflow-app/blob/main/CODE_OF_CONDUCT.md>`_.

How Can I Contribute?
---------------------

Reporting Bugs
~~~~~~~~~~~~~~

If you find a bug, please open an issue on our `GitHub repository 
<https://github.com/nickymarzz/studyflow-app/issues>`_. Before opening a new issue, please check 
if a similar issue already exists.

When reporting a bug, please include:

* A clear and concise description of the bug
* Steps to reproduce the behavior
* Expected behavior
* Screenshots or error messages if applicable
* Your operating system and browser (if applicable)

Suggesting Enhancements
~~~~~~~~~~~~~~~~~~~~~~~

We love new ideas! If you have a suggestion for a new feature or an improvement to an existing 
one, please open an issue on our GitHub repository. Describe your idea clearly and explain why 
you think it would be a valuable addition.

Submitting Pull Requests
~~~~~~~~~~~~~~~~~~~~~~~~~

1. **Fork the repository** and clone it to your local machine
2. **Create a new branch** for your feature or bug fix: ``git checkout -b feature/your-feature-name``
3. **Make your changes** - Ensure your code adheres to the project's coding style
4. **Test your changes** - Verify UI behavior and storage persistence
5. **Commit your changes** with a clear and descriptive commit message
6. **Push your branch** to your forked repository
7. **Open a Pull Request** to the ``main`` branch

Development Setup
-----------------

See our :doc:`getting_started` guide for detailed setup instructions.

**1. Running the Core Application**::

    npm run dev:app
    # Open http://localhost:3000

**2. Running the Jekyll Website**::

    npm run dev:website
    # Open http://localhost:4000

**3. Building Sphinx Documentation**::

    npm run dev:docs
    # Output generated in docs/_build/html

Coding Style Guidelines
-----------------------

* Use clear, descriptive variable and function names
* Keep functions small and focused on a single responsibility
* Follow Vanilla HTML5, CSS3, and ES6 standards without adding heavy unnecessary external dependencies
* Add comments for complex logic
* Follow existing code style in the repository

Commit Message Guidelines
--------------------------

We follow the Conventional Commits specification::

    <type>(<scope>): <description>

**Type examples:** ``feat``, ``fix``, ``docs``, ``style``, ``refactor``, ``test``, ``chore``

**Scope examples:** ``app``, ``website``, ``docs``, ``ui``, ``config``, ``ci``

**Examples:**

* ``feat(app): add task filter by priority``
* ``fix(website): correct responsive navigation on mobile``
* ``docs(usage): update analytics usage instructions``
* ``chore(deps): update jekyll dependencies``

Community
---------

Join our community:

* `Discord Server <https://discord.gg/v2ctzYdp>`_ - Real-time chat and collaboration
* `GitHub Discussions <https://github.com/nickymarzz/studyflow-app/discussions>`_ - Ask questions and share ideas
* `Google Group <https://groups.google.com/g/study-flow-app>`_ - Announcements and updates

For More Details
----------------

Please see the complete `CONTRIBUTING.md 
<https://github.com/nickymarzz/studyflow-app/blob/main/CONTRIBUTING.md>`_ file in our repository 
for comprehensive contribution guidelines.

Thank you for contributing to StudyFlow! 🎓
