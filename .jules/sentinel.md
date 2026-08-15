## 2024-05-24 - [Input Validation Limits]
**Vulnerability:** Missing input validation limits (`maxLength`) on contact form fields in a frontend SPA.
**Learning:** While the form uses a mocked backend response, missing length limits can lead to client-side Denial of Service (DoS). Excessively large inputs could potentially overwhelm the Zustand store, causing performance degradation or browser freezing.
**Prevention:** Implement `maxLength` properties defensively on all user input elements, limiting them to reasonable sizes (e.g., 100 for standard fields, 1000 for textareas) to prevent large payloads and ensure application stability.
