## 2024-05-24 - Input Validation Enhancement
**Vulnerability:** Missing input validation and length limits on contact form.
**Learning:** Even mocked/frontend-only forms should have basic length validation to prevent UI lag or memory issues from excessively large payloads (DoS protection).
**Prevention:** Always add `maxLength` to HTML inputs and validate payload lengths in submission handlers.
