# Contributing to StudyFlow App

We welcome contributions to the StudyFlow App! By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please open an issue on our GitHub repository. Before opening a new issue, please check if a similar issue already exists. When reporting a bug, please include:

*   A clear and concise description of the bug.
*   Steps to reproduce the behavior.
*   Expected behavior.
*   Screenshots or error messages if applicable.
*   Your operating system and browser (if applicable).

### Suggesting Enhancements

We love new ideas! If you have a suggestion for a new feature or an improvement to an existing one, please open an issue on our GitHub repository. Describe your idea clearly and explain why you think it would be a valuable addition.

### Submitting Pull Requests

1.  **Fork the repository** and clone it to your local machine.
2.  **Create a new branch** for your feature or bug fix: `git checkout -b feature/your-feature-name` or `git checkout -b bugfix/your-bug-fix`.
3.  **Make your changes.** Ensure your code adheres to the project's coding style and conventions.
4.  **Write tests** for your changes if applicable.
5.  **Run tests** to ensure everything is working correctly.
6.  **Commit your changes** with a clear and descriptive commit message. (See [Commit Message Guidelines](#commit-message-guidelines)).
7.  **Push your branch** to your forked repository.
8.  **Open a Pull Request** to the `main` branch of the original repository.
    *   Provide a clear title and description for your pull request.
    *   Reference any related issues.

## Development Setup

### Prerequisites

- **Ruby** 2.7+ (for Jekyll website)
- **Bundler** (for managing Ruby gems)
- **Node.js** 16+ and **npm** (for future JavaScript development)
- **Git**
- **Text Editor/IDE** (VS Code, Sublime Text, etc.)

### Setting Up the Jekyll Website

The `website/` directory contains the Jekyll-based marketing site for StudyFlow.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/luisjarquec/studyflow-app.git
   cd studyflow-app
   ```

2. **Navigate to the website directory**:
   ```bash
   cd website
   ```

3. **Install Jekyll and dependencies**:
   ```bash
   gem install jekyll bundler
   bundle install
   ```

4. **Run the Jekyll development server**:
   ```bash
   bundle exec jekyll serve
   ```

5. **Access the website**:
   Open your browser and navigate to `http://localhost:4000`

### Setting Up the Application

For contributing to the main StudyFlow application in the `public/` directory:

1. **Start the application development server**:
   ```bash
   npm run dev:app
   # or
   npm run dev
   ```

2. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`

### Building Documentation

To build the Sphinx documentation locally:

```bash
# Using npm script from repository root
npm run dev:docs

# Or navigating directly to docs/
cd docs
make html         # macOS / Linux
.\make.bat html   # Windows
```

For additional setup details or troubleshooting, refer to the main [README.md](README.md).

## Coding Style Guidelines

We use the following tools to maintain code quality:

- **ESLint**: Linting JavaScript/TypeScript code
  ```bash
  npm run lint
  ```

- **Prettier**: Code formatting
  ```bash
  npm run format
  ```

- **General guidelines**:
  - Use clear, descriptive variable and function names
  - Keep functions small and focused on a single responsibility
  - Add comments for complex logic
  - Follow the existing code style in the repository
  - Ensure your code passes all linting checks before submitting a PR

Before pushing your changes, run: `npm run lint && npm run format`

## Testing Guidelines

All contributions should include tests when applicable. We use Jest for testing:

- **Run all tests**:
  ```bash
  npm test
  ```

- **Run tests in watch mode**:
  ```bash
  npm test -- --watch
  ```

- **Run tests with coverage**:
  ```bash
  npm test -- --coverage
  ```

- **Writing tests**:
  - Place test files in the same directory as the code being tested with a `.test.js` or `.test.ts` suffix
  - Use descriptive test names that explain what is being tested
  - Aim for meaningful test coverage, especially for critical features
  - Test both happy paths and edge cases

Ensure all tests pass before submitting your pull request.

## Commit Message Guidelines

We follow the Conventional Commits specification. Please use the following format for your commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Type examples:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
**Scope examples:** `website`, `docs`, `ui`, `config`, `build`, `deps`.

**Examples:**

*   `feat(website): Add features page with Kanban board showcase`
*   `fix(website): Correct navigation links in mobile view`
*   `docs(readme): Update installation instructions`
*   `style(website): Improve dark mode color contrast`
*   `chore(deps): Update Jekyll to v4.3.0`

---

Thank you for contributing to the StudyFlow App!