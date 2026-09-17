# StudyFlow

A lightweight, open-source task and project management tool designed specifically for university students and academic teams.

## Overview

University students often have to manage multiple courses, deadlines, and group projects without a tool designed for academic workflows. Existing platforms are either too generic, require paid features for automation, or aren't prepared for student needs.

**StudyFlow** aims to fill that gap by providing an intuitive, customizable, and self-hosted task management solution built for students, by students.

## Features

With StudyFlow, you can:

- **📋 Kanban Boards** — Visualize your workflow with customizable columns for each course
- **🔔 Smart Reminders** — Never miss a deadline with customizable notifications
- **📊 Progress Tracking** — View analytics on your study habits and task completion
- **🌙 Dark Mode** — Easy on the eyes for late-night study sessions
- **🔒 Privacy First** — Self-host and keep your academic data private

## Project Status

StudyFlow is currently at version **v0.1.0 (MVP)**.

Currently, the project includes:
- ✅ **Core Application**: Interactive Kanban board MVP with task CRUD, multi-board management, deadline alerts, browser reminders, progress tracking analytics (Chart.js), and dark mode.
- ✅ **Marketing Website**: Jekyll-based landing site with responsive styling and automatic GitHub Pages deployment.
- ✅ **Sphinx Documentation**: Complete technical guide and architecture documentation configured with ReadTheDocs.
- ✅ **CI/CD Automation**: GitHub Actions deployment workflows, issue templates, PR template, and security policy.

## Architecture (Monorepo)

To maintain a professional, industry-standard structure, StudyFlow is organized as a **Monorepo**. It contains three primary components:

1. **The Core App** (`public/`): The lightweight, client-side task management web application.
2. **The Marketing Website** (`website/`): A Jekyll-based landing page to promote the app.
3. **The Technical Docs** (`docs/`): Sphinx-based documentation for developers and contributors.

## Quick Start

We provide unified npm scripts in `package.json` to make running any part of the project seamless:

```bash
# 1. Start the Core App (StudyFlow)
npm run dev:app

# 2. Start the Jekyll Marketing Website
npm run dev:website

# 3. Build the Sphinx Documentation
npm run dev:docs
```

## Deployments & Releases

This project utilizes modern CI/CD practices for automated deployment and versioning:

- **GitHub Pages Deployment**: The marketing website (`website/`) is automatically deployed to GitHub Pages via GitHub Actions (`.github/workflows/jekyll-gh-pages.yml`) on every push to the `main` branch.
- **Read the Docs Deployment**: The technical documentation (`docs/`) is automatically built and hosted by ReadTheDocs using the `.readthedocs.yaml` configuration.
- **GitHub Releases**: Stable versions are tagged and published via **GitHub Releases**, attaching the source code automatically for users to download.

## Documentation

Full documentation is available at [ReadTheDocs](https://studyflow-test.readthedocs.io/en/latest/).

## Contributing

We welcome contributions! See `CONTRIBUTING.md` for guidelines on how to get involved.

## License

This project is licensed under the Apache 2.0 License – see the `LICENSE` file for details.

---

**Built by students, for students.** 🎓