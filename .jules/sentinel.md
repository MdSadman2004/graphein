## 2024-10-12 - [Contact Form Client-Side Validation Enhancement]
**Vulnerability:** The contact form lacked explicit input validation and size limits on the client side, relying only on default HTML input behavior and a simple empty check.
**Learning:** Even mocked or frontend-only forms should implement basic validation and size limits (`maxLength`) to establish good security habits and prevent potential issues if connected to a backend later.
**Prevention:** Implement `maxLength` attributes on text inputs and regex validation for structured fields (like email) in all forms, regardless of current backend integration status.
