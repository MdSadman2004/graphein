## 2024-03-22 - [Contact Form Validation]
**Vulnerability:** Missing input validation and length constraints on contact form could lead to processing overly large payloads or malformed data.
**Learning:** React SPA lacked basic HTML length limits and standard regex validation on form submissions, relying entirely on backend validation (which is currently mocked). Client-side validation is necessary for defense-in-depth and better UX.
**Prevention:** Always add `maxLength` attributes to form inputs and validate data format (e.g. email regex) before processing submission logic.
