# Collect submissions in the charity Google Drive

Target account: **basharat.ali@theseafarerscharity.org**.

The website cannot choose a Drive owner from an email address. Google Forms and
its response spreadsheets must be created in that account, and the evidence
web app must execute as that account. The scripts check the effective account
before creating forms or accepting files.

## Set up the work account

1. Sign in to https://script.google.com with the target account. Create a project,
   paste `tools/create-forms.gs`, run `createForms`, and approve Google's access
   request. Run this once: each run creates two new forms and response Sheets.
   Keep the form, edit, and spreadsheet links from the execution log.
2. In each new form, confirm it is published and accepts external respondents.
   Test in a signed-out window. Email collection uses responder input; file
   uploads use the site's separate evidence service.
3. Create a second Apps Script project in the same work account. Paste
   `tools/upload-server.gs`, run `setupUploads`, and approve access. It creates
   a private `GrantFlow uploads` folder and logs its link. Re-running this setup
   reuses the configured folder.
4. Deploy that project as a web app: **Execute as Me**, access **Anyone**. Copy
   its `/exec` URL. If the organisation blocks anonymous web apps, ask its Google
   Workspace administrator to enable an approved collection route.

## Switch the website

1. Replace both `url` values in `config.js` with the new published form links,
   matching the form titles. Replace `GRANTFLOW_UPLOAD_URL` with the new work
   account deployment URL. Leave `GRANTFLOW_SUBMIT_URL` empty to use Google Forms.
2. Bump the `config.js?v=5` version in `index.html`, `form.html`, and `upload.html`.
   Commit these changes together so answers and evidence switch accounts together.
3. Submit a clearly labelled test response through each form and a test evidence
   file through the upload page. Verify both response Sheets and the upload folder
   while signed into the work account, then remove the test data.

Existing responses and uploads stay in their current Drive. This setup does not
copy, delete, or share historical submissions. Do not announce the switch as live
until the new links are configured and these checks pass.
