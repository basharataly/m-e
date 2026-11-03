# GrantFlow MEAL — GitHub Pages site

A static M&E reporting site. Forms are Google Forms embedded in the page, and responses are collected in Google Sheets.

- `index.html` — home page and form list
- `form.html?f=<id>` — page with one embedded form
- `config.js` — **the only file to edit**: paste each Google Form link into `url`
- `FORMS_SETUP.md` — the questions to put in each Google Form

Adding another form means adding another entry to `config.js`.
