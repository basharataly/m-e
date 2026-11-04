// Upload endpoint for the GitHub Pages site, so grantees can send evidence
// without a Google account. Deploy as a web app: Execute as "Me",
// Who has access "Anyone". Files land in Drive under "GrantFlow uploads/<grant>".
const UPLOAD_ROOT = "GrantFlow uploads";
const MAX_BYTES = 25 * 1024 * 1024;
const FORM_IDS = ["1DxHdcAoxhh_Rw7lPCcXL9y9dg2Lb_7AkMimAHPrZQCM", "1vMm1geQLs51lVb4HsOLw1SuI-L62JkNs_eda7LV44X4"];

// One-off: lets people without a Google account submit both forms.
function openFormsToEveryone() {
  FORM_IDS.forEach(function (id) {
    const form = FormApp.openById(id);
    form.getItems(FormApp.ItemType.FILE_UPLOAD).forEach(function (item) { form.deleteItem(item); });
    form.setEmailCollectionType(FormApp.EmailCollectionType.RESPONDER_INPUT);
    Logger.log(form.getTitle() + ": uploads removed, email typed by respondent");
  });
}

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const bytes = Utilities.base64Decode(d.data);
    if (bytes.length > MAX_BYTES) throw new Error("File is larger than 25 MB");
    const grant = String(d.grant || "no-grant").replace(/[^\w .-]/g, "").slice(0, 40) || "no-grant";
    const name = String(d.name || "file").replace(/[\\/:*?"<>|]/g, "_").slice(0, 120);
    const folder = child(child(DriveApp.getRootFolder(), UPLOAD_ROOT), grant);
    const file = folder.createFile(Utilities.newBlob(bytes, d.type || "application/octet-stream", name));
    file.setDescription("From: " + String(d.email || "").slice(0, 120) + "\nOrganisation: " + String(d.org || "").slice(0, 120) + "\nForm: " + String(d.form || "").slice(0, 60));
    return json({ ok: true, name: file.getName() });
  } catch (err) {
    return json({ ok: false, error: String(err.message || err) });
  }
}

function child(parent, name) {
  const it = parent.getFoldersByName(name);
  return it.hasNext() ? it.next() : parent.createFolder(name);
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
