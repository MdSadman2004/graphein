## 2023-10-27 - Added Form Input Validation and Length Limits
**Vulnerability:** The contact form lacked input validation and length limits, which could lead to excessively large payloads or invalid data submissions.
**Learning:** React form inputs without explicit validation or bounds can be abused to send oversized payloads, causing potential application or downstream issues.
**Prevention:** Always implement robust input validation (e.g., regex for emails) and set reasonable `maxLength` bounds on all user-facing inputs to mitigate DoS risks and ensure data integrity.
