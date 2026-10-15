## 2024-05-24 - Missing Input Validation and Length Limits
**Vulnerability:** The contact form lacked input length limits and email validation, and failed silently when validation was absent.
**Learning:** Client-side constraints and clear UI error states are crucial for both security (preventing resource exhaustion/DoS) and UX (preventing user confusion when forms appear broken).
**Prevention:** Always implement `maxLength` on form inputs and ensure validation failures provide explicit UI feedback rather than early returns.
