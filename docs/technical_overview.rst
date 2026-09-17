Technical Overview
==================

This document provides a technical overview of the StudyFlow project architecture, technologies, 
and design decisions.

Project Structure
-----------------

Current Architecture (v0.1.0)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

StudyFlow is structured as an industry-standard lightweight monorepo comprising three specialized components:

**1. Core Application** (``public/`` directory)

* Lightweight Single Page Application (SPA) built with vanilla HTML5, CSS3, and modern JavaScript (ES6+)
* Drag-and-drop Kanban task management across configurable status columns
* Client-side LocalStorage state persistence (zero database or backend setup required)
* Desktop browser notifications via Notification API
* Client-side visual progress analytics powered by Chart.js
* Dark / Light mode theme support

**2. Marketing Website** (``website/`` directory)

* Static landing site built with Jekyll 4.x
* Liquid templating with responsive custom CSS
* Automated CI/CD deployment to GitHub Pages via GitHub Actions

**3. Sphinx Documentation** (``docs/`` directory)

* Comprehensive technical documentation built with Sphinx
* reStructuredText (.rst) format
* Automated builds and hosting via ReadTheDocs

**4. Project Infrastructure**

* Version control: Git + GitHub
* CI/CD: GitHub Actions (Jekyll build & deploy)
* Issue & PR Templates, Security Policy (``SECURITY.md``)
* Unified npm runner scripts (``dev:app``, ``dev:website``, ``dev:docs``)


Technologies
------------

Current Stack
~~~~~~~~~~~~~

**Jekyll Website**

:Language: Ruby
:Framework: Jekyll 4.x
:Templating: Liquid
:Styling: Custom CSS
:Plugins: 
    * jekyll-feed
    * jekyll-seo-tag

**Documentation**

:Tool: Sphinx
:Format: reStructuredText
:Theme: Read the Docs theme
:Hosting: `ReadTheDocs <https://studyflow-test.readthedocs.io/en/latest/>`_

**Development Tools**

:Version Control: Git
:Repository: GitHub
:Package Manager: Bundler (Ruby), npm (future)
:CI/CD: GitHub Actions

Planned Technologies
~~~~~~~~~~~~~~~~~~~~

**Frontend Application**

:Language: JavaScript/TypeScript
:Framework: React 18+ or Vue 3+
:Build Tool: Vite or Next.js
:Package Manager: npm or pnpm
:Testing: Jest + React Testing Library
:Linting: ESLint + Prettier

**Backend Services** (Future)

:Language: JavaScript/TypeScript (Node.js)
:Framework: Express.js or Fastify
:Database: PostgreSQL with Prisma ORM
:Authentication: Passport.js or Auth0
:API Documentation: Swagger/OpenAPI

**Infrastructure**

:Containerization: Docker (planned)
:Orchestration: Docker Compose
:Monitoring: To be determined
:Logging: Winston or Pino

Design Principles
-----------------

Privacy-First
~~~~~~~~~~~~~

* Self-hosting capability is a core requirement
* No third-party analytics or tracking
* User data stays under user control
* Optional cloud hosting for convenience

Student-Centric
~~~~~~~~~~~~~~~

* Designed specifically for academic workflows
* Course and multi-board organization
* Deadline tracking with smart reminder alerts
* Visual completion and study analytics

Open Source
~~~~~~~~~~~

* Apache 2.0 License
* Community-driven development
* Transparent development process
* Welcoming to contributors of all skill levels

Accessibility
~~~~~~~~~~~~~

* WCAG 2.1 AA compliance (goal)
* Keyboard navigation support
* Screen reader friendly
* High contrast mode support

Performance
~~~~~~~~~~~

* Fast page loads (<3s on 3G)
* Optimized bundle sizes
* Lazy loading for better performance
* Progressive Web App (PWA) capabilities

Data Flow
---------

Current (Jekyll Website)
~~~~~~~~~~~~~~~~~~~~~~~~

1. Developer edits Markdown/HTML files
2. Jekyll builds static site
3. GitHub Actions deploys to GitHub Pages
4. Users access static website

Planned (Application)
~~~~~~~~~~~~~~~~~~~~~

1. User interacts with React frontend
2. Frontend makes API calls to backend
3. Backend processes requests and queries database
4. Database returns data
5. Backend sends response to frontend
6. Frontend updates UI

Security Considerations
-----------------------

Current
~~~~~~~

* Static site - minimal security concerns
* HTTPS enforced via GitHub Pages
* No user data collection

Planned
~~~~~~~

* **Authentication**: Secure JWT-based authentication
* **Authorization**: Role-based access control (RBAC)
* **Data Encryption**: Encrypted data at rest and in transit
* **Input Validation**: Server-side validation for all inputs
* **CORS**: Proper CORS configuration
* **Rate Limiting**: API rate limiting to prevent abuse
* **Security Headers**: CSP, HSTS, X-Frame-Options, etc.

Development Workflow
--------------------

Version Control
~~~~~~~~~~~~~~~

* **Main Branch**: Production-ready code
* **Feature Branches**: ``feature/feature-name``
* **Bug Fix Branches**: ``bugfix/bug-name``
* **Pull Requests**: Required for all changes
* **Code Review**: At least one approval required

Testing Strategy (Planned)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

* **Unit Tests**: Jest for component and function testing
* **Integration Tests**: Testing API endpoints
* **E2E Tests**: Playwright or Cypress for user workflows
* **Coverage Goal**: 80%+ code coverage

Continuous Integration
~~~~~~~~~~~~~~~~~~~~~~

GitHub Actions workflows for:

* Linting and code formatting checks
* Running test suites
* Building documentation
* Deploying to staging/production

Future Roadmap
--------------

Phase 1: Foundation (Complete)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* ✅ Monorepo structure
* ✅ Jekyll marketing website
* ✅ Sphinx documentation setup & ReadTheDocs
* ✅ Community channels & templates

Phase 2: Core Application MVP (Complete - v0.1.0)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* ✅ Interactive HTML5 drag-and-drop Kanban board
* ✅ Full Task CRUD operations (title, description, priority, due date)
* ✅ Multi-board creation and switching
* ✅ Browser desktop notifications for deadlines
* ✅ Visual progress analytics modal with Chart.js
* ✅ Light / Dark mode theme switching
* ✅ LocalStorage state persistence

Phase 3: Enhancements (Planned - v0.2.0)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* ⏳ JSON data backup and restore (export / import)
* ⏳ Built-in Pomodoro focus timer
* ⏳ Tag filtering and course categorization
* ⏳ Extended keyboard shortcuts

Phase 4: Polish & Scale (Planned - v1.0.0)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* ⏳ PWA offline caching with service workers
* ⏳ Mobile touch gesture optimization
* ⏳ Internationalization (i18n) support
* ⏳ WCAG 2.1 AA accessibility compliance

Contributing to Development
----------------------------

See our :doc:`contributing` guide for information on how to contribute to the technical 
development of StudyFlow.

For architecture discussions and technical questions, join our:

* `Discord server <https://discord.gg/v2ctzYdp>`_
* `GitHub Discussions <https://github.com/nickymarzz/studyflow-app/discussions>`_
