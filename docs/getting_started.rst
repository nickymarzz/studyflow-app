Getting Started
===============

This guide will help you get the StudyFlow project up and running on your local machine.

Prerequisites
-------------

For the Core Web Application:

* **Node.js** 16 or higher
* **npm** (comes with Node.js)
* A modern web browser (Chrome, Edge, Firefox, Safari)

For the Jekyll Website:

* **Ruby** 2.7 or higher
* **Bundler** (for managing Ruby gems)

For Technical Documentation:

* **Python** 3.10 or higher
* **Sphinx** and dependencies (``pip install -r docs/requirements.txt``)

Installation
------------

**1. Clone the repository**::

    git clone https://github.com/nickymarzz/studyflow-app.git
    cd studyflow-app

Running the Core Application
----------------------------

The core StudyFlow application resides in the ``public/`` directory and runs locally with zero backend configuration:

**1. Start the application**::

    npm run dev:app
    # or
    npm run dev

**2. Access the application**:

Open your browser and navigate to ``http://localhost:3000``. You can immediately create boards, add tasks with due dates, and monitor your study progress.

Running the Jekyll Website
---------------------------

The ``website/`` directory contains the Jekyll-based marketing site.

**1. Using the npm script**::

    npm run dev:website

**2. Or manually from the website directory**::

    cd website
    bundle install
    bundle exec jekyll serve

**3. Access the website**:

Open your browser and navigate to ``http://localhost:4000``.

Building Documentation
----------------------

To build the Sphinx documentation locally:

**1. Using the npm script**::

    npm run dev:docs

**2. Or manually from the docs directory**::

    cd docs
    make html         # macOS / Linux
    .\make.bat html   # Windows

Then open ``docs/_build/html/index.html`` in your browser to view the documentation.

Next Steps
----------

* Read the :doc:`usage` guide to learn how to use StudyFlow
* Check out the :doc:`contributing` guide to start contributing
* Join our community on `Discord <https://discord.gg/v2ctzYdp>`_ or `GitHub Discussions <https://github.com/nickymarzz/studyflow-app/discussions>`_

