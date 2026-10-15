## 2026-08-08 - Added Input Validation and Length Limits
**Vulnerability:** Contact form lacked input validation and length limits for name, company, and message, and didn't properly validate the email.
**Learning:** React applications using controlled inputs and mock submissions can still be susceptible to client-side abuse or unexpected behavior if inputs are not constrained.
**Prevention:** Always add sensible `maxLength` limits to form fields and standard validation checks before submission.
