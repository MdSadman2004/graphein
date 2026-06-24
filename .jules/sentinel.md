## 2023-10-27 - [Missing Input Validation Limits on Client-Side Forms]
**Vulnerability:** Client-side form inputs (name, company, email, message) in `src/components/Contact.tsx` lacked `maxLength` constraints and the email input lacked basic format validation.
**Learning:** Even on static client-side sites, unbound inputs can lead to browser resource exhaustion or unexpectedly large payloads being queued for API endpoints. It's a fundamental defense-in-depth practice to restrict input bounds at the entry point.
**Prevention:** Always enforce reasonable `maxLength` attributes on user input fields and add basic logical validation (like regex checks for emails) before triggering submit actions.
