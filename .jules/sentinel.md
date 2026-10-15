## 2023-10-27 - [Add input validation and length limits to contact form]
**Vulnerability:** The contact form lacked input validation and payload length limits, exposing the application to potential application-layer DoS risks and allowing malformed data to be processed.
**Learning:** Even mock forms or forms without direct backend connections should implement client-side validation and length limits as a defense-in-depth measure. This prevents oversized payloads from causing performance issues or unexpected behavior.
**Prevention:** Always enforce strict input validation, including type checking, regex matching for specific formats (like email), and length constraints (`maxLength`) on all user-facing inputs, regardless of the backend architecture.
