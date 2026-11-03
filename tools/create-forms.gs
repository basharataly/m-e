// Creates the GrantFlow Google Forms and links each to a response Sheet.
// Paste into a new project at script.google.com and run createForms.
const SPEC = [
 {
  "title": "GrantFlow — Grant report",
  "description": "End-of-grant MEAL report. Do not submit personal participant data or details of safeguarding cases.",
  "items": [
   {
    "type": "section",
    "title": "Tell us about the grant award."
   },
   {
    "type": "text",
    "label": "A1 · Grant identifier",
    "required": true
   },
   {
    "type": "text",
    "label": "A2 · Organisation name",
    "required": true
   },
   {
    "type": "paragraph",
    "label": "A3 · Strategic outcome",
    "required": true
   },
   {
    "type": "text",
    "label": "A4 · Grant title",
    "required": true
   },
   {
    "type": "number",
    "label": "A5 · Awarded amount (£)",
    "required": true
   },
   {
    "type": "text",
    "label": "Reporting period",
    "required": true
   },
   {
    "type": "date",
    "label": "Report start date",
    "required": true
   },
   {
    "type": "date",
    "label": "Report end date",
    "required": true
   },
   {
    "type": "text",
    "label": "Completed by",
    "required": true
   },
   {
    "type": "section",
    "title": "How was the award used?"
   },
   {
    "type": "checkbox",
    "label": "B1 · What was your award spent on?",
    "required": true,
    "options": [
     "Unrestricted",
     "Restricted"
    ]
   },
   {
    "type": "paragraph",
    "label": "B2 · How did you allocate and spend the unrestricted funding?",
    "required": true
   },
   {
    "type": "choice",
    "label": "B2a · Without this funding, would your organisation or work have been affected?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "paragraph",
    "label": "B2b · If yes, how?",
    "required": true
   },
   {
    "type": "checkbox",
    "label": "B2c · Select up to three most important organisational outcomes",
    "required": true,
    "options": [
     "Increased scope or scale",
     "More responsive services",
     "Increased capacity for service improvement",
     "More collaboration to meet seafarer needs",
     "Maintained services",
     "Secured match funding",
     "Greater focus on our mission",
     "Improved standards and governance",
     "Worked more strategically",
     "Greater financial stability",
     "Other"
    ]
   },
   {
    "type": "text",
    "label": "Specify other outcome",
    "required": true
   },
   {
    "type": "choice",
    "label": "F1 · Did the grant enable other funding support?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "paragraph",
    "label": "F1a · Name the funders and amounts awarded",
    "required": true
   },
   {
    "type": "choice",
    "label": "F2 · Was the grant fully spent?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "number",
    "label": "F2a · Amount not spent (£)",
    "required": true
   },
   {
    "type": "paragraph",
    "label": "F2b · Why was the amount not fully spent?",
    "required": true
   },
   {
    "type": "section",
    "title": "How many seafarers did the grant support?"
   },
   {
    "type": "checkbox",
    "label": "C1 · Who were the direct beneficiaries?",
    "required": true,
    "options": [
     "Active Royal Navy",
     "Retired Royal Navy",
     "Active Merchant Navy",
     "Retired Merchant Navy",
     "Active Fishers",
     "Retired Fishers",
     "Trainee Seafarers"
    ]
   },
   {
    "type": "number",
    "label": "RN active",
    "required": false
   },
   {
    "type": "number",
    "label": "RN retired",
    "required": false
   },
   {
    "type": "number",
    "label": "Merchant Navy active",
    "required": false
   },
   {
    "type": "number",
    "label": "Merchant Navy retired",
    "required": false
   },
   {
    "type": "number",
    "label": "Fishers active",
    "required": false
   },
   {
    "type": "number",
    "label": "Fishers retired",
    "required": false
   },
   {
    "type": "number",
    "label": "Trainee seafarers",
    "required": false
   },
   {
    "type": "choice",
    "label": "C2 · Do direct beneficiaries include dependants of seafarers?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "checkbox",
    "label": "C3 · Who are the dependant beneficiaries related to?",
    "required": true,
    "options": [
     "Royal Navy / Royal Marines",
     "Merchant Navy",
     "Fishers"
    ]
   },
   {
    "type": "number",
    "label": "RN/RM dependants",
    "required": false
   },
   {
    "type": "number",
    "label": "Merchant Navy dependants",
    "required": false
   },
   {
    "type": "number",
    "label": "Fishers' dependants",
    "required": false
   },
   {
    "type": "choice",
    "label": "C4 · Does your organisation maintain beneficiary records, including demographics?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "paragraph",
    "label": "C4a · How are beneficiary records maintained?",
    "required": true
   },
   {
    "type": "number",
    "label": "D1 · Intended beneficiaries from the application",
    "required": true
   },
   {
    "type": "choice",
    "label": "D2 · Did you reach the intended number?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "paragraph",
    "label": "D2a · Why were intended beneficiary numbers not reached?",
    "required": true
   },
   {
    "type": "section",
    "title": "Where was the project implemented?"
   },
   {
    "type": "choice",
    "label": "G1 · Geographic coverage",
    "required": true,
    "options": [
     "UK only",
     "International excluding UK",
     "International including UK"
    ]
   },
   {
    "type": "checkbox",
    "label": "G2 · UK nations covered",
    "required": true,
    "options": [
     "England",
     "Scotland",
     "Wales",
     "Northern Ireland"
    ]
   },
   {
    "type": "checkbox",
    "label": "G2a · Regions in England",
    "required": true,
    "options": [
     "London",
     "South East",
     "South West",
     "East of England",
     "East Midlands",
     "West Midlands",
     "North West",
     "North East",
     "Yorkshire and the Humber"
    ]
   },
   {
    "type": "checkbox",
    "label": "G2b · Regions in Scotland",
    "required": true,
    "options": [
     "Central Scotland",
     "Glasgow",
     "Highlands and Islands",
     "Lothian",
     "Mid Scotland and Fife",
     "North East Scotland",
     "South Scotland",
     "West Scotland"
    ]
   },
   {
    "type": "checkbox",
    "label": "G2c · Regions in Wales",
    "required": true,
    "options": [
     "Aneurin Bevan",
     "Betsi Cadwaladr",
     "Cardiff and Vale",
     "Cwm Taf Morgannwg",
     "Hywel Dda",
     "Powys",
     "Swansea Bay"
    ]
   },
   {
    "type": "checkbox",
    "label": "G2d · Regions in Northern Ireland",
    "required": true,
    "options": [
     "Belfast",
     "South Eastern",
     "Southern",
     "Northern",
     "Western"
    ]
   },
   {
    "type": "paragraph",
    "label": "G3 · Specific UK locations",
    "required": true
   },
   {
    "type": "paragraph",
    "label": "G4 · International countries and locations",
    "required": true
   },
   {
    "type": "section",
    "title": "What did the grant deliver?"
   },
   {
    "type": "paragraph",
    "label": "H1 · Description",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H2 · Description",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H3 · Description",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H1a · Quantitative evidence",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H2a · Quantitative evidence",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H3a · Quantitative evidence",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H1b · Qualitative evidence",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H2b · Qualitative evidence",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H3b · Qualitative evidence",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "H4 · Explain any variance from what was expected",
    "required": false
   },
   {
    "type": "section",
    "title": "What helped, challenged and changed?"
   },
   {
    "type": "paragraph",
    "label": "J1 · How was evaluation data collected, recorded and analysed? (100 words)",
    "required": true
   },
   {
    "type": "paragraph",
    "label": "J2 · Factors that supported success",
    "required": true
   },
   {
    "type": "paragraph",
    "label": "J3 · Factors that created challenges",
    "required": true
   },
   {
    "type": "paragraph",
    "label": "J4 · Lessons learned (250 words)",
    "required": true
   },
   {
    "type": "section",
    "title": "Share one real example of change."
   },
   {
    "type": "paragraph",
    "label": "K1 · How did the award improve seafarers' quality of life?",
    "required": true
   },
   {
    "type": "text",
    "label": "K5 · Link to a photo drive (optional)",
    "required": false
   },
   {
    "type": "paragraph",
    "label": "Anything else to share?",
    "required": false
   }
  ]
 },
 {
  "title": "GrantFlow — IFFS M&E questionnaire",
  "description": "Fishing safety indicators. If exact figures are unavailable, provide your best estimate. Do not submit personal participant data.",
  "items": [
   {
    "type": "text",
    "label": "Name of officer submitting this report",
    "required": true,
    "options": null
   },
   {
    "type": "text",
    "label": "Grant number",
    "required": true,
    "options": null
   },
   {
    "type": "text",
    "label": "Project name",
    "required": true,
    "options": null
   },
   {
    "type": "text",
    "label": "Organisation",
    "required": true,
    "options": null
   },
   {
    "type": "number",
    "label": "A.4 Fishing vessel accidents",
    "help": "How many fishing vessel accidents were reported in the most recent year after the project? If exact figures are unavailable, provide your best estimate.",
    "required": false,
    "options": null
   },
   {
    "type": "number",
    "label": "A.5 Non-fatal fishing injuries",
    "help": "How many non-fatal fishing injuries were recorded in the most recent year after the project? If exact figures are unavailable, provide your best estimate.",
    "required": false,
    "options": null
   },
   {
    "type": "number",
    "label": "A.6 Fatal fishing accidents",
    "help": "How many fatal fishing accidents were reported in the most recent year after the project? If exact figures are unavailable, provide your best estimate.",
    "required": false,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "A. Safety statistics reporting barriers",
    "help": "If you were unable to answer A.4, A.5 or A.6, explain the specific barriers preventing accurate national accident and injury reporting and what changes would improve reporting.",
    "required": false,
    "options": null
   },
   {
    "type": "choice",
    "label": "B.1 Has the project contributed to an increase in the use of formal safety management systems?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "number",
    "label": "B.1 What approximate percentage of vessels use formal safety management systems after the project?",
    "help": "Enter a percentage from 0 to 100.",
    "required": false,
    "options": null
   },
   {
    "type": "number",
    "label": "B.2 What percentage of vessels conduct regular risk assessments or safety drills after the project?",
    "help": "Enter a percentage from 0 to 100.",
    "required": true,
    "options": null
   },
   {
    "type": "number",
    "label": "C.1a How many fishers were directly trained through the project?",
    "required": true,
    "options": null
   },
   {
    "type": "number",
    "label": "C.1b On average, how many additional fishers will each trained fisher train or inform?",
    "required": true,
    "options": null
   },
   {
    "type": "number",
    "label": "D.2a How many positions were funded through the project?",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "D.2b Where were the funded personnel based?",
    "help": "List the locations and, where useful, the role based in each location.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "D.3a What types of safety equipment were distributed?",
    "help": "For example: personal flotation devices, first-aid equipment, radios or other safety equipment.",
    "required": true,
    "options": null
   },
   {
    "type": "number",
    "label": "D.3b What was the total number of equipment items distributed?",
    "required": true,
    "options": null
   },
   {
    "type": "text",
    "label": "D.3c What was the estimated total monetary value of the equipment distributed?",
    "help": "Include the amount and currency.",
    "required": true,
    "options": null
   },
   {
    "type": "checkbox",
    "label": "E.4a Which international fishing safety standards are you familiar with?",
    "required": true,
    "options": [
     "ILO Work in Fishing Convention, 2007 (No. 188)",
     "STCW-F Convention (IMO)",
     "Cape Town Agreement"
    ]
   },
   {
    "type": "choice",
    "label": "E.4b How effectively are fishers represented in discussions about international fishing safety standards?",
    "required": true,
    "options": [
     "Not at all represented",
     "Somewhat represented",
     "Well represented",
     "Very well represented"
    ]
   },
   {
    "type": "number",
    "label": "F.5a How many training resources were shared through the project?",
    "required": true,
    "options": null
   },
   {
    "type": "number",
    "label": "F.5b How many new training sessions or courses were developed?",
    "required": true,
    "options": null
   },
   {
    "type": "choice",
    "label": "F.5c Were meetings, forums or other knowledge-sharing events organised?",
    "required": true,
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "type": "number",
    "label": "F.5c How many meetings, forums or knowledge-sharing events were organised?",
    "required": false,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 1. Describe the geographical and social setting and the organisations involved",
    "help": "Indicative length: 150 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 2. Explain the project purpose, the challenge addressed, and its aims, goals and objectives",
    "help": "Indicative length: 150 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 3. Explain the rationale, supporting evidence and theory of change",
    "help": "Indicative length: 100 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 4. Describe participants, including total numbers, demographics, recruitment and motivation",
    "help": "Indicative length: 150 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 5. Describe how evaluation data were collected, by whom, when and what types of data were used",
    "help": "Indicative length: 100 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 6. Describe measurable changes, including unexpected or unintended positive and negative changes",
    "help": "Indicative length: 300 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 6a. Provide one or more beneficiary case studies",
    "help": "Use beneficiaries' own words where possible. Photos may be included as supporting evidence. Confirm informed consent before anything is published.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 7. What factors supported success and what challenges were encountered?",
    "help": "Consider funding, staff, partners and scheduling. Indicative length: 300 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 8. What lessons were learned and what advice would you give others?",
    "help": "Indicative length: 100 words.",
    "required": true,
    "options": null
   },
   {
    "type": "paragraph",
    "label": "Case study 9. How will the work continue or scale up, and what resources or support will be needed?",
    "help": "Indicative length: 100 words.",
    "required": true,
    "options": null
   }
  ]
 }
];

function createForms() {
  const out = [];
  SPEC.forEach(function (f) {
    const form = FormApp.create(f.title).setDescription(f.description)
      .setCollectEmail(true).setAllowResponseEdits(true).setProgressBar(true);
    f.items.forEach(function (q) {
      let item;
      if (q.type === "section") { form.addPageBreakItem().setTitle(q.title); return; }
      if (q.type === "paragraph") item = form.addParagraphTextItem();
      else if (q.type === "date") item = form.addDateItem();
      else if (q.type === "choice") item = form.addMultipleChoiceItem().setChoiceValues(q.options);
      else if (q.type === "checkbox") item = form.addCheckboxItem().setChoiceValues(q.options);
      else {
        item = form.addTextItem();
        if (q.type === "number") item.setValidation(FormApp.createTextValidation().requireNumber().build());
      }
      item.setTitle(q.label).setRequired(!!q.required);
      if (q.help) item.setHelpText(q.help);
    });
    const sheet = SpreadsheetApp.create(f.title + " (responses)");
    form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());
    out.push(f.title + "\n  " + form.getPublishedUrl() + "\n  edit: " + form.getEditUrl() + "\n  sheet: " + sheet.getUrl());
  });
  Logger.log(out.join("\n"));
}
