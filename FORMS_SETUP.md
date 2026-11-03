# Google Forms setup

The site embeds two Google Forms. Create each one at https://forms.google.com, then paste its link into `config.js` (`url: "..."`).

For each form:
1. **Settings → Responses**: turn on *Collect email addresses* and *Send responders a copy*. Turn on *Allow response editing* if grantees should be able to fix answers after submitting.
2. **Settings → Responses**: leave *Restrict to users in your organisation* **off**. Otherwise grantees outside your organisation can't open the form.
3. **Responses → Link to Sheets**: send answers to a Google Sheet. This replaces the old admin dashboard and Excel export.
4. **Send → link icon**: copy the link and paste it into `config.js`.
5. File-upload questions require respondents to sign in to Google. If that's a problem, use a "Link to a photo or document drive" text question instead (K5 already works this way).

Use *Sections* for each lettered group, and *Go to section based on answer* for the conditional questions marked "only if".

## Form 1 — Grant report

Section headings: Tell us about the grant award · How was the award used? · How many seafarers did the grant support? · Where was the project implemented? · What did the grant deliver? · What helped, challenged and changed? · Share one real example of change · Upload supporting evidence.

Questions (`*` = required):

- A1 · Grant identifier *
- A2 · Organisation name *
- A3 · Strategic outcome *
- A4 · Grant title *
- A5 · Awarded amount (£) *
- Reporting period *
- Report start date *
- Report end date *
- Completed by *
- Secure account
- B1 · What was your award spent on? *
- B2 · How did you allocate and spend the unrestricted funding? *
- B2a · Without this funding, would your organisation or work have been affected? *
- B2b · If yes, how? *
- B2c · Select up to three most important organisational outcomes *
- Specify other outcome *
- F1 · Did the grant enable other funding support? *
- F1a · Name the funders and amounts awarded *
- F2 · Was the grant fully spent? *
- F2a · Amount not spent (£) *
- F2b · Why was the amount not fully spent? *
- C1 · Who were the direct beneficiaries? *
- RN active
- RN retired
- Merchant Navy active
- Merchant Navy retired
- Fishers active
- Fishers retired
- Trainee seafarers
- C2 · Do direct beneficiaries include dependants of seafarers? *
- C3 · Who are the dependant beneficiaries related to? *
- RN/RM dependants
- Merchant Navy dependants
- Fishers' dependants
- C4 · Does your organisation maintain beneficiary records, including demographics? *
- C4a · How are beneficiary records maintained? *
- D1 · Intended beneficiaries from the application *
- D2 · Did you reach the intended number? *
- D2a · Why were intended beneficiary numbers not reached? *
- G1 · Geographic coverage *
- G2 · UK nations covered *
- G2a · Regions in England *
- G2b · Regions in Scotland *
- G2c · Regions in Wales *
- G2d · Regions in Northern Ireland *
- G3 · Specific UK locations *
- G4 · International countries and locations *
- H4 · Explain any variance from what was expected *
- J1 · How was evaluation data collected, recorded and analysed? (100 words) *
- J2 · Factors that supported success *
- J3 · Factors that created challenges *
- J4 · Lessons learned (250 words) *
- K1 · How did the award improve seafarers' quality of life? *
- K5 · Link to a photo drive (optional)
- Anything else to share?
- H1–H3 · Deliverable description / quantitative evidence / qualitative evidence (repeat for 3 deliverables)
- Supporting evidence (file upload, optional)

## Form 2 — IFFS M&E questionnaire

- Name of officer submitting this report
- Grant number
- Project name
- Organisation
- A.4 Fishing vessel accidents — How many fishing vessel accidents were reported in the most recent year after the project? If exact figures are unavailable, provide your best estimate.
- A.5 Non-fatal fishing injuries — How many non-fatal fishing injuries were recorded in the most recent year after the project? If exact figures are unavailable, provide your best estimate.
- A.6 Fatal fishing accidents — How many fatal fishing accidents were reported in the most recent year after the project? If exact figures are unavailable, provide your best estimate.
- A. Safety statistics reporting barriers — If you were unable to answer A.4, A.5 or A.6, explain the specific barriers preventing accurate national accident and injury reporting and what changes would improve reporting.
- B.1 Has the project contributed to an increase in the use of formal safety management systems?
- B.1 What approximate percentage of vessels use formal safety management systems after the project? — Enter a percentage from 0 to 100.
- B.2 What percentage of vessels conduct regular risk assessments or safety drills after the project? — Enter a percentage from 0 to 100.
- C.1a How many fishers were directly trained through the project?
- C.1b On average, how many additional fishers will each trained fisher train or inform?
- D.2a How many positions were funded through the project?
- D.2b Where were the funded personnel based? — List the locations and, where useful, the role based in each location.
- D.3a What types of safety equipment were distributed? — For example: personal flotation devices, first-aid equipment, radios or other safety equipment.
- D.3b What was the total number of equipment items distributed?
- D.3c What was the estimated total monetary value of the equipment distributed? — Include the amount and currency.
- E.4a Which international fishing safety standards are you familiar with?
- E.4b How effectively are fishers represented in discussions about international fishing safety standards?
- F.5a How many training resources were shared through the project?
- F.5b How many new training sessions or courses were developed?
- F.5c Were meetings, forums or other knowledge-sharing events organised?
- F.5c How many meetings, forums or knowledge-sharing events were organised?
- Case study 1. Describe the geographical and social setting and the organisations involved — Indicative length: 150 words.
- Case study 2. Explain the project purpose, the challenge addressed, and its aims, goals and objectives — Indicative length: 150 words.
- Case study 3. Explain the rationale, supporting evidence and theory of change — Indicative length: 100 words.
- Case study 4. Describe participants, including total numbers, demographics, recruitment and motivation — Indicative length: 150 words.
- Case study 5. Describe how evaluation data were collected, by whom, when and what types of data were used — Indicative length: 100 words.
- Case study 6. Describe measurable changes, including unexpected or unintended positive and negative changes — Indicative length: 300 words.
- Case study 6a. Provide one or more beneficiary case studies — Use beneficiaries' own words where possible. Photos may be included as supporting evidence. Confirm informed consent before anything is published.
- Case study 7. What factors supported success and what challenges were encountered? — Consider funding, staff, partners and scheduling. Indicative length: 300 words.
- Case study 8. What lessons were learned and what advice would you give others? — Indicative length: 100 words.
- Case study 9. How will the work continue or scale up, and what resources or support will be needed? — Indicative length: 100 words.
