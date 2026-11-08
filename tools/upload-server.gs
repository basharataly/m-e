// Upload endpoint for the GitHub Pages site, so grantees can send evidence
// without a Google account. Deploy as a web app: Execute as "Me",
// Who has access "Anyone". Files land in Drive under "GrantFlow uploads/<grant>".
const UPLOAD_ROOT = "GrantFlow uploads";
const MAX_BYTES = 25 * 1024 * 1024;
// Run once while signed into the work account, before deploying this project.
function setupUploads() {
  assertUploadAccount();
  const properties = PropertiesService.getScriptProperties();
  let id = properties.getProperty("UPLOAD_FOLDER_ID");
  if (!id) {
    id = DriveApp.createFolder(UPLOAD_ROOT).getId();
    properties.setProperty("UPLOAD_FOLDER_ID", id);
  }
  Logger.log(DriveApp.getFolderById(id).getUrl());
}

function assertUploadAccount() {
  const expected = "basharat.ali@theseafarerscharity.org";
  if (Session.getEffectiveUser().getEmail().toLowerCase() !== expected) {
    throw new Error("Deploy this service as " + expected + ".");
  }
}

function doPost(e) {
  try {
    assertUploadAccount();
    const folderId = PropertiesService.getScriptProperties().getProperty("UPLOAD_FOLDER_ID");
    if (!folderId) throw new Error("Run setupUploads before accepting evidence.");
    const d = JSON.parse(e.postData.contents);
    const bytes = Utilities.base64Decode(d.data);
    if (bytes.length > MAX_BYTES) throw new Error("File is larger than 25 MB");
    const grant = String(d.grant || "no-grant").replace(/[^\w .-]/g, "").slice(0, 40) || "no-grant";
    const name = String(d.name || "file").replace(/[\\/:*?"<>|]/g, "_").slice(0, 120);
    const folder = child(DriveApp.getFolderById(folderId), grant);
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
