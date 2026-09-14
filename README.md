# DR Guardian

Build a professional DR Server Testing & Readiness Dashboard as a frontend-only web application.

Technology

Use:

HTML5

CSS3

Vanilla JavaScript

Do NOT build a backend in this phase.
Do NOT use Node.js, Express, SSH, databases, or real shell execution.

Use realistic mock/demo data and simulate server tests in the browser.

Purpose

The dashboard will eventually be used by an IT operations team to test servers at a Disaster Recovery (DR) site by running approved shell scripts through a Node.js backend.

For now, build only the complete frontend UI and simulate all server/test activity.

The design must make it easy to connect a Node.js backend later without redesigning the frontend.

Main Navigation

Create a professional enterprise dashboard with a left sidebar containing:

Dashboard

Servers

Tests

Test Runs

History

Reports

Audit Logs

Settings

Add a top header with:

Page title

Search

Notifications

User profile

Dark/light mode toggle

Dashboard

Create a modern DR operations dashboard showing:

Total Servers

Online Servers

Offline Servers

Tests Passed

Tests Failed

Tests Running

Overall DR Readiness %

Create a prominent DR readiness indicator such as:

DR Readiness: 87%
Status: READY WITH WARNINGS

Also include:

Server health overview

Recent test results

Active test runs

Pass/fail statistics

DR readiness trend

Recent activity

Servers Page

Create a professional server management table.

Columns:

Server Name

Hostname

IP Address

Environment

Operating System

Status

CPU

Memory

Disk

Last Test

Result

Actions

Add at least 10 realistic demo servers such as:

DR-APP-01

DR-APP-02

DR-APP-03

DR-WEB-01

DR-WEB-02

DR-DB-01

DR-DB-02

DR-CACHE-01

DR-BACKUP-01

DR-MONITOR-01

Use different statuses such as:

ONLINE

OFFLINE

WARNING

MAINTENANCE

Add:

Search

Status filter

Environment filter

Server group filter

Sorting

Pagination

Server Details

Clicking a server should open a detailed view containing:

Server information

Hostname

IP address

Environment

OS

Status

CPU usage

Memory usage

Disk usage

Uptime

Also show:

Services

nginx

application

PostgreSQL

Redis

monitoring agent

Show each service as RUNNING, STOPPED, or WARNING.

Also show:

Network connectivity

DNS status

Database connectivity

Application health

Add a prominent Run Test button.

Tests Page

Create a list of predefined DR validation tests:

Server Connectivity

Disk Space Check

Memory Check

CPU Check

Service Check

Port Connectivity

Database Connectivity

DNS Resolution

NTP Synchronization

Application Health Check

Backup Availability

Mount Point Check

For every test show:

Test name

Category

Description

Expected result

Timeout

Status

Run button

Test Execution

When the user clicks Run Test, display a confirmation modal showing:

Server:
DR-APP-01

Test:
Disk Space Check

Expected duration:
~10 seconds

Buttons:

Cancel

Run Test

After clicking Run Test, simulate the execution in the browser.

Show a professional test execution screen with:

Server name

Test name

Execution ID

Start time

Elapsed time

Progress bar

Current step

Status

Create a terminal-style live output window.

Example:

[14:32:01] Starting test...
[14:32:01] Connecting to server...
[14:32:02] Connection successful
[14:32:02] Running disk-check.sh
[14:32:03] Checking /
[14:32:03] Disk usage: 62%
[14:32:03] Checking /data
[14:32:04] Disk usage: 71%
[14:32:05] Checking /backup
[14:32:05] Disk usage: 54%
[14:32:06] All checks passed
[14:32:06] Test completed successfully

Animate the output line-by-line using JavaScript timers.

Do NOT actually execute shell commands.

Test Results

After execution, show a clear result:

✓ PASSED

or

✕ FAILED

or

⚠ WARNING

or

TIMEOUT

or

CONNECTION ERROR

Show:

Duration

Start time

Completion time

Server

Test

Summary

Detailed output

Some mock tests should pass and some should fail so all states can be demonstrated.

Test Runs Page

Show currently running tests.

Example:

DR-APP-01 | Disk Space Check | 72% | RUNNING
DR-DB-01 | Database Check | 41% | RUNNING

Allow the user to:

View

Cancel

Cancellation should work for the simulated frontend test.

History Page

Create a test history table with:

Date/time

Server

Test

Duration

Executed By

Result

Actions

Add filters for:

Server

Test

Result

Date

Include realistic historical data.

Reports Page

Create a professional DR readiness report.

Display:

Total servers

Servers tested

Tests executed

Passed

Failed

Warnings

Overall readiness percentage

Add visual charts for:

Pass/fail results

Server health

Test categories

Historical DR readiness

Add:

Export CSV button

Print Report button

Audit Logs

Create an audit log page showing:

Timestamp

User

Action

Server

Test

Result

Example:

14:32:06 | admin | Test completed | DR-APP-01 | Disk Check | PASSED

Settings

Create settings for:

Theme

Dashboard refresh interval

Default test timeout

Maximum concurrent tests

Auto-refresh logs

Test failure notifications

Server offline notifications

Use localStorage for frontend settings.

UI/UX

Make the application look like a professional enterprise DR Operations / NOC dashboard.

Use:

Modern dark theme by default

Optional light theme

Blue primary color

Green for success

Red for failure

Amber for warning

Cyan for information

Clean cards

Professional tables

Status badges

Progress bars

Charts

Toast notifications

Confirmation modals

Loading states

Empty states

Error states

Smooth but minimal animations

Make it responsive for:

Desktop

Laptop

Tablet

Mobile

On mobile, make the sidebar collapsible and tables horizontally scrollable.

Mock Data

Create realistic mock data for:

Servers

Tests

Test runs

Test history

Audit logs

Reports

Use different server statuses and test results.

Future Backend Compatibility

IMPORTANT:

Structure the frontend so it can later connect to a Node.js backend.

Create a clear frontend API/service layer.

For now:

Frontend UI
→ Mock API/Data

Later:

Frontend UI
→ API service
→ Node.js/Express backend
→ PostgreSQL
→ SSH
→ DR Servers

Do not put SSH credentials, passwords, private keys, or shell execution logic in the frontend.

The browser should never execute shell commands.

For now, Run Test only simulates execution.

Final Result

Deliver a complete, polished, functional frontend prototype.

I should be able to open the application and:

View the DR dashboard.

Browse servers.

Search/filter servers.

Open server details.

Browse predefined tests.

Select a server and test.

Run a simulated test.

Watch live simulated terminal output.

See progress.

See the final test result.

View running tests.

View test history.

View DR readiness reports.

View audit logs.

Change settings.

Switch between dark and light mode.

Focus on making this look like a real enterprise DR server testing product, not a basic demo or simple admin template.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/122d6c25-4400-4388-a71e-397bb3f3fd0c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
