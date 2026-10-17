## 2024-10-17 - Contact Form Input Validation
**Vulnerability:** Missing client-side input validation and payload size limits on the contact form, allowing submission of invalid emails and potentially excessively large payloads (DoS risk).
**Learning:** Even mock or purely client-side forms must validate inputs to prevent unexpected state transitions or UX issues, and length constraints must always be applied to user-controlled data entry fields.
**Prevention:** Always implement explicit input format validation (e.g. regex for emails) and enforce sane `maxLength` attributes on all `<input>` and `<textarea>` elements, while ensuring the UI provides clear feedback on invalid states.
