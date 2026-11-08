# GrantFlow MEAL — GitHub Pages site

A static M&E reporting site. Forms are Google Forms embedded in the page, and responses are collected in Google Sheets.

- `index.html` — home page and form list
- `form.html?f=<id>` — page with one embedded form
- `config.js` — **the only file to edit**: paste each Google Form link into `url`
- `FORMS_SETUP.md` — the questions to put in each Google Form

After editing `config.js`, bump the `?v=` number on its `<script>` tag in both HTML files so visitors don't get a cached copy.

Adding another form means adding another entry to `config.js`.

To move collection to the charity account, follow [WORK_ACCOUNT_SETUP.md](WORK_ACCOUNT_SETUP.md). Changing an email address alone does not change Google Drive ownership.
