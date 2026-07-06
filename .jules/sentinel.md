## 2024-07-06 - [Input Validation]
**Vulnerability:** Contact form allowed arbitrarily long inputs and invalid emails (mocked backend submission).
**Learning:** Found a lack of client-side validation logic allowing excessive payloads or garbage data submission which could translate to abuse if connected to a real API (DoS risk).
**Prevention:** Ensured client-side validation is implemented to reject excessive payloads and invalid emails before attempting any submission.
