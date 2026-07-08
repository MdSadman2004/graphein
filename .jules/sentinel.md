## 2025-03-05 - Missing Input Constraints on Contact Form
**Vulnerability:** The contact form lacked length restrictions and format validation on client inputs.
**Learning:** Even mocked or prototype forms without active backends should establish secure input handling patterns to prevent issues later (like large payloads causing DoS).
**Prevention:** Always implement `maxLength` attributes and regex validation for structured inputs like emails at the component level to enforce defense-in-depth early.
