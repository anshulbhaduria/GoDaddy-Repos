# GoDaddy Repositories Viewer

Small React app that lists GoDaddy's public GitHub repositories and lets you search them.

## Quickstart

Prerequisites

- Node.js (LTS recommended)
- npm or yarn

Install and run

1. Open a terminal in the project folder:
   - Windows (PowerShell / cmd): cd project-directory
2. Install dependencies:
   - npm: npm install
   - yarn: yarn
3. Run in development mode:
   - npm: npm start
   - yarn: yarn start
4. Open http://localhost:3000 in your browser.

Other scripts

- Run tests: npm test
- Create production build: npm run build

## Notes on chosen libraries

- React (Create React App) — simple, well-supported scaffold for single-page apps and tests.
- Material UI (@mui/material and @mui/icons-material) — provides accessible, consistent UI components and responsive layout utilities so fewer custom styles are needed.
- HTTP client (fetch or axios) — the GitHub API integration lives in src/api/github.js; a small HTTP client keeps API calls tidy and testable.

## Where to look next

- API calls: src/api/github.js
- Main page: src/pages/Home.jsx
- Repo item: src/components/RepoListItem.jsx
