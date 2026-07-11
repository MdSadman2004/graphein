## 2024-07-11 - Add Input Validation to Contact Form
**Vulnerability:** Missing input validation and length limits on contact form inputs.
**Learning:** Even static sites or sites with mock backends should employ defense-in-depth on the client side. Without length limits, a user could theoretically paste a massive string into state, potentially causing browser lag or crashing the tab.
**Prevention:** Always add sensible `maxLength` attributes to text inputs and textareas, and employ basic regex validation for fields like email before processing.
