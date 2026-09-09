## 2024-05-24 - [Input Validation Enhancements in Contact Form]
**Vulnerability:** Missing input validation (email format) and unbounded payload size on client-side contact form.
**Learning:** Even mocked or prototype forms without a live backend connection should implement length constraints and validation to establish strong security defaults for when backend integration occurs, defending against potential Application-layer DoS (payload size) or XSS by preventing excessive garbage input early.
**Prevention:** Always include `maxLength` and standard format validation in all form inputs, especially when establishing core component architecture.
