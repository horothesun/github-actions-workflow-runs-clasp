# GitHub Actions workflow runs - Google Apps Script

[![CI](https://github.com/horothesun/github-actions-workflow-runs-clasp/workflows/CI/badge.svg)](https://github.com/horothesun/github-actions-workflow-runs-clasp/actions?query=workflow%3ACI)
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

[![Push to Google Apps Script](https://github.com/horothesun/github-actions-workflow-runs-clasp/workflows/Push%20to%20Google%20Apps%20Script/badge.svg)](https://github.com/horothesun/github-actions-workflow-runs-clasp/actions?query=workflow%3A%22Push+to+Google+Apps+Script%22)
[![Deploy to Google Apps Script](https://github.com/horothesun/github-actions-workflow-runs-clasp/workflows/Deploy%20to%20Google%20Apps%20Script/badge.svg)](https://github.com/horothesun/github-actions-workflow-runs-clasp/actions?query=workflow%3A%22Deploy+to+Google+Apps+Script%22)

## Setup

Run

```bash
nvm use
npm i
```

Update `.clasp.json` with your `scriptId`.

## Testing

For continuos changes-only testing, run

```bash
npm run testWatch
```

otherwise, to run all tests once run

```bash
npm test
```

## Notes

- `module.exports` must be defined in single lines.
