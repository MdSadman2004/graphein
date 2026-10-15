## 2024-05-24 - Input Length Limits and Validation
**Vulnerability:** Missing client-side input length limits and basic format validation on the Contact form, allowing excessively large payloads and malformed emails.
**Learning:** Basic defense-in-depth is essential even for mocked/frontend-only forms to prevent unintended UX regressions and resource consumption.
**Prevention:** Always implement `maxLength` on inputs and validate critical fields like email before submission or state changes.
