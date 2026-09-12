# DR Server Testing & Readiness Dashboard

## Goal
Build a polished, frontend-only DR operations dashboard using realistic mock data. All testing activity remains simulated in the browser, with no credentials, shell execution, database, or backend.

## Experience
- Enterprise NOC-style shell with collapsible sidebar, top search, alerts, user menu, and dark/light theme.
- Responsive desktop, tablet, and mobile layouts; tables scroll horizontally on smaller screens.
- Distinct operational states using blue, green, red, amber, and cyan semantic tokens.
- Minimal motion, accessible controls, loading/empty/error treatments, modals, and toast feedback.

## Pages and workflows
- **Dashboard:** readiness score and status, KPI cards, health/pass-fail/readiness visualizations, active runs, recent results, and activity.
- **Servers:** 10+ realistic servers, search/filter/sort/pagination, status/resource indicators, row actions, and detailed server view with services and connectivity checks.
- **Tests:** predefined validation catalog with categories, expectations, timeouts, status, server selection, and run actions.
- **Execution:** confirmation modal, execution metadata, elapsed time, progress, current step, cancellable line-by-line terminal output, and final passed/failed/warning/timeout/connection-error result.
- **Test Runs:** simulated active runs with progress, view, and cancel actions.
- **History:** realistic historical results with server/test/result/date filters and result details.
- **Reports:** readiness summary, visual charts, CSV export, and print-friendly report.
- **Audit Logs:** searchable operational events with realistic records.
- **Settings:** theme, refresh interval, timeout, concurrency, log refresh, and notification preferences persisted locally.

## Technical approach
- Use the project’s supported TanStack React frontend while keeping all behavior client-side and browser-only.
- Create a clear mock API/service module so a future Node.js API can replace it without redesigning screens.
- Keep shared mock models and data separate from presentation and interaction state.
- Use semantic design tokens in the global stylesheet and reusable controls for consistent styling.
- Add route-specific metadata for every page.
- Validate the main workflow and responsive layouts in the live preview.
