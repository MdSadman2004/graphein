## 2024-07-02 - [Input Validation Missing on Frontend Contact Form]
**Vulnerability:** The contact form allowed any string to be submitted as an email address.
**Learning:** Even in frontend-only mockups, client-side input validation is often omitted, which could lead to malformed data being sent downstream if connected to a real API.
**Prevention:** Always implement basic regex validation (e.g. for emails) on client-side forms before dispatching submission events.
