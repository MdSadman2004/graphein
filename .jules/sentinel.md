## 2024-05-18 - Missing Input Limits
**Vulnerability:** Contact form lacks maximum length limitations on text inputs and message body, and had no email validation format.
**Learning:** React state inputs without length boundaries could allow excessively large payloads to be processed in-memory.
**Prevention:** Always implement `maxLength` on standard string inputs and textareas to constrain memory impact early, and validate formats before state updates.
