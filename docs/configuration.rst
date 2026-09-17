Configuration Guide
===================

This guide covers configuration options for all components of the StudyFlow project: the Core Application, the Jekyll Marketing Website, and the Sphinx Documentation.

Core Web Application Configuration
----------------------------------

The StudyFlow web application is built as a lightweight client-side application. It requires zero server-side database configuration or environment files.

LocalStorage Keys
~~~~~~~~~~~~~~~~~

Application state is automatically maintained in the user's browser. The storage namespace keys can be configured in ``public/app.js``:

.. code-block:: javascript

    const STORAGE_KEYS = {
        TASKS: 'studyflow_tasks',
        BOARDS: 'studyflow_boards',
        CURRENT_BOARD: 'studyflow_current_board',
        THEME: 'studyflow_theme',
        REMINDERS_SENT: 'studyflow_reminders_sent'
    };

Customizing Themes and Styling
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

CSS Custom Properties (variables) in ``public/style.css`` allow customization of the visual theme:

.. code-block:: css

    :root {
        --primary: #6366f1;
        --primary-hover: #4f46e5;
        --bg: #f8fafc;
        --card-bg: #ffffff;
        --text: #0f172a;
        --text-secondary: #64748b;
        --border: #e2e8f0;
    }

    [data-theme="dark"] {
        --bg: #0f172a;
        --card-bg: #1e293b;
        --text: #f8fafc;
        --text-secondary: #94a3b8;
        --border: #334155;
    }

Development Server Port
~~~~~~~~~~~~~~~~~~~~~~~

By default, the core app runs on port 3000. You can change this in ``package.json``:

.. code-block:: json

    "scripts": {
        "dev:app": "npx --yes http-server public -p 3000 -c-1"
    }

Jekyll Website Configuration
-----------------------------

The marketing site is configured in ``website/_config.yml``:

.. code-block:: yaml

    title: StudyFlow
    description: Organize your study workflow efficiently.
    baseurl: "/studyflow-app"
    url: "https://nickymarzz.github.io"
    theme: null

    markdown: kramdown
    plugins:
      - jekyll-feed
      - jekyll-seo-tag

Gemfile Configuration
~~~~~~~~~~~~~~~~~~~~~

Ruby gem dependencies for local development are specified in ``website/Gemfile``:

.. code-block:: ruby

    source "https://rubygems.org"

    gem "jekyll", "~> 4.3"
    gem "jekyll-feed"
    gem "jekyll-seo-tag"
    gem "webrick"

Sphinx Documentation Configuration
-----------------------------------

The technical documentation builder is configured via ``docs/conf.py``:

.. code-block:: python

    project = 'StudyFlow App'
    copyright = '2025, StudyFlow Team'
    author = 'StudyFlow Team'

    version = '0.1.0'
    release = '0.1.0'

    extensions = [
        'sphinx_rtd_theme',
    ]

    html_theme = 'sphinx_rtd_theme'

Deployment & CI/CD Configuration
--------------------------------

GitHub Pages Deployment Workflow
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Jekyll website is built and published automatically to GitHub Pages using the GitHub Actions workflow defined in ``.github/workflows/jekyll-gh-pages.yml``:

* **Trigger**: Push to the ``main`` branch.
* **Runner**: ``ubuntu-latest``.
* **Build Action**: ``actions/jekyll-build-pages@v1`` with destination ``./_site``.
* **Deploy Action**: ``actions/deploy-pages@v4``.

ReadTheDocs Configuration
~~~~~~~~~~~~~~~~~~~~~~~~~

ReadTheDocs builds are configured via ``.readthedocs.yaml`` in the root directory:

.. code-block:: yaml

    version: 2

    build:
      os: ubuntu-24.04
      tools:
        python: "3.12"

    sphinx:
      configuration: docs/conf.py

    python:
      install:
        - requirements: docs/requirements.txt
