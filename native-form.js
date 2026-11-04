// Renders a form from GRANTFLOW_SPEC with file uploads built in, and posts
// answers and files as one JSON request to GRANTFLOW_SUBMIT_URL (the Microsoft 365 receiver).
(function () {
  const MAX_FILES = 10, MAX_FILE = 20 * 1024 * 1024, MAX_TOTAL = 40 * 1024 * 1024;

  function el(tag, attrs, text) {
    const e = document.createElement(tag);
    for (const k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (text) e.textContent = text;
    return e;
  }

  function field(q, i) {
    const name = "q" + i;
    const wrap = el("div", { class: "q" });
    const label = el("label", { for: name }, q.label + (q.required ? " *" : ""));
    wrap.append(label);
    if (q.help) wrap.append(el("p", { class: "meta" }, q.help));
    let input;
    if (q.type === "paragraph") input = el("textarea", { rows: 4 });
    else if (q.type === "choice" || q.type === "checkbox") {
      input = el("div", { class: "choices", role: q.type === "choice" ? "radiogroup" : "group" });
      q.options.forEach((opt, j) => {
        const id = name + "_" + j;
        const l = el("label", { for: id });
        const box = el("input", { type: q.type === "choice" ? "radio" : "checkbox", id, name, value: opt });
        if (q.required && q.type === "choice" && j === 0) box.required = true;
        l.append(box, document.createTextNode(" " + opt));
        input.append(l);
      });
      wrap.append(input);
      return wrap;
    } else if (q.type === "file") input = el("input", { type: "file", multiple: "" });
    else input = el("input", { type: { number: "number", date: "date", email: "email" }[q.type] || "text" });
    input.id = name; input.name = name;
    if (q.type === "number") input.step = "any";
    if (q.required) input.required = true;
    wrap.append(input);
    return wrap;
  }

  function readFile(file) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve({ name: file.name, type: file.type || "application/octet-stream", size: file.size, data: r.result.split(",")[1] });
      r.onerror = reject;
      r.readAsDataURL(file);
    });
  }

  window.renderNativeForm = function (container, formConfig, spec, submitUrl) {
    const form = el("form", { class: "card native-form", novalidate: "" });
    let section = null;
    spec.forEach((q, i) => {
      if (q.type === "section") {
        section = el("fieldset");
        section.append(el("legend", {}, q.title));
        form.append(section);
      } else (section || form).append(field(q, i));
    });
    const button = el("button", { class: "btn", type: "submit" }, "Submit report");
    const status = el("p", { class: "status", role: "status" });
    form.append(button, status);
    container.append(form);

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const answers = [], fileInputs = [];
      spec.forEach((q, i) => {
        if (q.type === "section") return;
        const name = "q" + i;
        if (q.type === "file") { fileInputs.push(form.elements[name]); return; }
        let value;
        if (q.type === "checkbox") value = [...form.querySelectorAll(`[name="${name}"]:checked`)].map((b) => b.value).join("; ");
        else if (q.type === "choice") value = (form.querySelector(`[name="${name}"]:checked`) || {}).value || "";
        else value = form.elements[name].value.trim();
        answers.push({ question: q.label, answer: value });
      });
      const files = fileInputs.flatMap((f) => [...f.files]);
      const total = files.reduce((s, f) => s + f.size, 0);
      if (files.length > MAX_FILES) return (status.textContent = `Please attach ${MAX_FILES} files or fewer.`);
      const big = files.find((f) => f.size > MAX_FILE);
      if (big) return (status.textContent = `${big.name} is larger than 20 MB.`);
      if (total > MAX_TOTAL) return (status.textContent = "Attachments add up to more than 40 MB. Please remove some.");

      button.disabled = true;
      status.textContent = files.length ? `Uploading ${files.length} file(s) and submitting…` : "Submitting…";
      try {
        const body = {
          form: formConfig.title,
          formId: formConfig.id,
          submittedAt: new Date().toISOString(),
          email: answers[0] ? answers[0].answer : "",
          answers,
          files: await Promise.all(files.map(readFile)),
        };
        const res = await fetch(submitUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
        if (!res.ok) throw new Error("server replied " + res.status);
        form.replaceWith(el("div", { class: "notice" }, "Thank you. Your report and files have been received. You can close this page."));
      } catch (err) {
        status.textContent = "Sorry, that didn't go through (" + err.message + "). Your answers are still here; please try again.";
        button.disabled = false;
      }
    });
  };
})();
