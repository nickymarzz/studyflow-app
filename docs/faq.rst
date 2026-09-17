Frequently Asked Questions
==========================

General Questions
-----------------

**What is StudyFlow?**

StudyFlow is an open-source task and project management tool designed specifically for university 
students and academic teams. It helps you organize courses into distinct Kanban boards, track deadlines with smart reminders, and visualize your progress with built-in analytics.

**Is StudyFlow free?**

Yes! StudyFlow is completely free and open-source under the Apache 2.0 License. You can use it, 
modify it, and self-host it with zero cost.

**What makes StudyFlow different from other task managers?**

Unlike generic task managers or heavy enterprise software, StudyFlow is strictly lightweight, privacy-first, and designed for student workflows. It requires no user accounts, no backend databases, and no cloud subscriptions—everything runs instantly in your web browser.

Technical Questions
-------------------

**What technologies does StudyFlow use?**

StudyFlow is built as a clean 3-tier monorepo:

* **Core Application**: Vanilla HTML5, modern CSS3, ES6 JavaScript, Chart.js, and browser ``localStorage``.
* **Marketing Website**: Jekyll 4.x with custom responsive CSS, deployed via GitHub Pages.
* **Technical Documentation**: Sphinx with the Read the Docs theme, deployed on ReadTheDocs.

**Can I self-host StudyFlow?**

Yes! StudyFlow can be served from any static web server, GitHub Pages, or locally via ``npm run dev:app``. Your data remains safely stored in your browser's local storage.

**What are the system requirements?**

* **For the Core Web App**: A modern web browser (Chrome, Edge, Firefox, Safari) and Node.js 16+ for local serving.
* **For the Jekyll Website**: Ruby 2.7+ and Bundler.
* **For Sphinx Documentation**: Python 3.10+ and Sphinx.

**Does StudyFlow work offline?**

Yes! Because all task management and analytics persist client-side in ``localStorage``, you can organize tasks and view analytics without an active internet connection.

Getting Started
---------------

**How do I install and run StudyFlow?**

See our :doc:`getting_started` guide for complete instructions. Quickly start the app with::

    npm run dev:app

**I'm getting errors when running Jekyll. What should I do?**

Make sure you have:

1. Ruby 2.7 or higher installed
2. Run ``bundle install`` in the ``website/`` directory
3. Run ``bundle exec jekyll serve`` (or use ``npm run dev:website``)

Contributing
------------

**How can I contribute to StudyFlow?**

We welcome contributions! Check out our :doc:`contributing` guide and the `CONTRIBUTING.md 
<https://github.com/nickymarzz/studyflow-app/blob/main/CONTRIBUTING.md>`_ file for details.

**I found a bug. Where do I report it?**

Please open an issue on our `GitHub Issues page 
<https://github.com/nickymarzz/studyflow-app/issues>`_.

**Can I suggest new features?**

Absolutely! We welcome feedback and ideas aligned with our lightweight student focus. Open an issue on GitHub or join our `Discord server 
<https://discord.gg/v2ctzYdp>`_ to discuss your ideas.

**Do I need to know how to code to contribute?**

Not at all! You can contribute by:

* Reporting bugs
* Suggesting features
* Improving documentation
* Helping other users in the community
* Sharing StudyFlow with fellow students

Privacy & Data
--------------

**What data does StudyFlow collect?**

Zero. StudyFlow contains no third-party trackers, cookies, or remote analytics. All board and task data remain strictly inside your browser's local storage on your own computer.

**Is my study data secure?**

Yes. Your task information never leaves your device unless you explicitly export it.

Community
---------

**Where can I get help?**

* Join our `Discord server <https://discord.gg/v2ctzYdp>`_
* Ask on `GitHub Discussions <https://github.com/nickymarzz/studyflow-app/discussions>`_
* Check our documentation at `ReadTheDocs <https://studyflow-test.readthedocs.io/en/latest/>`_

**How can I stay updated on StudyFlow development?**

* Star and watch our `GitHub repository <https://github.com/nickymarzz/studyflow-app>`_
* Join our `Google Group <https://groups.google.com/g/study-flow-app>`_
* Follow development updates on GitHub

Still have questions?
---------------------

If your question isn't answered here, feel free to:

* Open a discussion on `GitHub <https://github.com/nickymarzz/studyflow-app/discussions>`_
* Join our `Discord community <https://discord.gg/v2ctzYdp>`_
* Contact us through the channels listed in our :doc:`contributing` guide
