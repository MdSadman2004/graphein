## 2026-06-01 - Added Client-Side Input Validation to Contact Form
**Vulnerability:** The Contact form in `src/components/Contact.tsx` lacked client-side input validation and size limits. A malicious user could submit extremely long payloads (potentially causing a DoS or excessive memory usage) or incorrectly formatted emails.
**Learning:** Even though full validation must be done on the server-side, it's crucial to implement defense in depth by enforcing basic validation and reasonable size limits on the client-side to prevent easy large-payload abuse before a request is even made.
**Prevention:** Always add `maxLength` attributes to form inputs and validate basic structure (like email format) in the submission handler.
