# QA Bootcamp Week 2

## Prerequisites
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Setup

1. Clone the repository and install dependencies:
   ```bash
   git clone git@github.com:waltertaya/qa-bootcamp-week2-walter.git
   cd qa-bootcamp-week2-walter
   npm install
   npx playwright install chromium
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

3. Run tests:
   ```bash
   npm test
   ```

## Test Coverage

| Test | Description |
|---|---|
| `title.spec.ts` | Verifies the homepage title. |
| `c1-search-by-name.spec.ts` | Verifies product search results. |
| `search-no-match.spec.ts` | Verifies the no-results message using the HomePage object. |
| `login.spec.ts` | Verifies invalid login credentials. |
| `products.spec.ts` | Tests the GET `/products` API response. |
| `c4-add-to-cart.spec.ts` | Tests cart creation, product addition, and invalid cart IDs. |

`features/cart.feature` contains the cart flow in Gherkin but is not connected to a Cucumber runner.

## Run one test or record a trace

```bash
npx playwright test tests/c4-add-to-cart.spec.ts
npx playwright test tests/c1-search-by-name.spec.ts --trace on
npx playwright show-trace test-results/<run-folder>/trace.zip
```

## Scripts

- `npm test` – Runs all Playwright tests.
- `npm run check` – Checks environment configuration and API connectivity.

Check TypeScript:
```bash
npx tsc --noEmit
```

The optional Cucumber-js runner was not implemented; this feature file is documentation only.