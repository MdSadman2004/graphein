## 2024-09-14 - Security Enhancement: Input validation to prevent submission of empty or invalid email addresses
**Vulnerability:** Missing input validation on user form.
**Learning:** The frontend form relied on silent failure for empty emails and had no format validation or size limits, potentially allowing excessively large or malformed payloads to be sent to a backend (or state store), increasing the risk of DoS or data corruption.
**Prevention:** Implement strict client-side validation rules (regex for format, `maxLength` for size limits) and ensure UI provides clear, actionable feedback to the user on validation failure.
