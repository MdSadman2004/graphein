## 2025-02-23 - [Input Validation Enhancements]
**Vulnerability:** Contact form allowed submissions without proper length limitations (risk of DoS or performance degradation on parsing very long inputs) and lacked email regex validation, allowing invalid emails to successfully pass validation simulation.
**Learning:** Zustand handles state well but failing silently without UI feedback creates a bad UX. Ensuring invalid state resets properly is critical.
**Prevention:** Always implement numeric max limits on text inputs to throttle long payloads. Pair validations with error messages, preventing silent rejection.
