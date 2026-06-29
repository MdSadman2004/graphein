## 2026-06-29 - [Contact Form Validation]
**Vulnerability:** Missing input validation (email format, max length) in the contact form, exposing a potential DoS vector.
**Learning:** The form was previously submitting any input to the state store without bounds checking or format validation.
**Prevention:** Always add basic HTML `maxLength` attributes and client-side validation logic for all forms before processing state.
