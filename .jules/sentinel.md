## 2023-10-05 - Added Missing Input Validations and Max Length Constraints

**Vulnerability:** The contact form lacked structural limits, meaning users could submit unlimited length payloads (Name, Company, Email, Message), which presents a DoS risk in downstream components (API/DB limits, even if simulated). Additionally, it failed to perform local regex validation for the email structure.
**Learning:** React/Zustand client-side SPA architectures often overlook basic HTML layer constraints if validation schemas (like Zod) aren't present.
**Prevention:** Always combine client-side JS validation constraints (regex format testing) with defensive HTML markup attribute limits (`maxLength`) for all text input bounds to provide a baseline defense in depth.
