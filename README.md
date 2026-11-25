# The Elite Stay PG & Hostel Management — Frontend

Frontend-only PWA starter for **The Elite Stay PG & Hostel Management**.

## Technology
- HTML5
- CSS3
- JavaScript (modular files)
- Bootstrap 5 + Bootstrap Icons via CDN
- PWA: `manifest.json` + `service-worker.js`

## Important: where to change things
### 1. Change hostel/student/demo data
Open:
`assets/js/data.js`

All students, payments, visitors, expenses, beds and months are centralized there.

### 2. Change the complete app navigation/header
Open:
`assets/js/app.js`

Sidebar, top navigation and mobile bottom navigation are generated from this file. You do NOT need to edit every page.

### 3. Change colors/design
Open:
`assets/css/style.css`

Main colors are at the top in `:root`.

## Pages
- Dashboard: `index.html`
- Students: `pages/students.html`
- Student Profile: `pages/student-profile.html`
- Fees & Payments: `pages/fees.html`
- Expenses: `pages/expenses.html`
- Visitors: `pages/visitors.html`
- Reports: `pages/reports.html`
- Settings: `pages/settings.html`

## December / January setup
- December 2026 contains demo data.
- January 2027 is intentionally blank.

## Run locally
Because PWA service workers require a secure context, use a local server instead of opening the HTML file directly.

If Python is installed:
`python -m http.server 5500`

Then open:
`http://localhost:5500`

VS Code Live Server also works.

## Vercel
This is a static frontend and can be deployed directly to Vercel. No backend/database is included in this version.

## Future expansion
The structure is intentionally modular so future modules can be added without rewriting the whole app:
- 50+ buttons/actions
- Rooms & allocation
- Staff/team
- Documents
- Detailed expense forms
- Weekly/monthly report exports
- Notifications
- Authentication
- Backend/API/database
- Advanced charts
- More PWA features

## Developer-friendly rule
Do not duplicate the sidebar/navbar on individual pages. They are generated centrally by `assets/js/app.js`.
