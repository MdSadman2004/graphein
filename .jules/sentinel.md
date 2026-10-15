## 2026-06-08 - Contact Form DoS and Validation Missing
**Vulnerability:** Contact form allowed submissions without checking input lengths, risking excessively large payloads to be processed (DoS). It also didn't validate the email address format.
**Learning:** Client-side validation was missing for length bounds and email formats.
**Prevention:** Ensured inputs have `maxLength` properties and `handleSubmit` checks for length limits, required fields, and proper email regex format.
