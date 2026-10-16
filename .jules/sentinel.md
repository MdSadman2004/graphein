## 2023-10-16 - Add Input Validation to Contact Form
**Vulnerability:** Missing input validation (email format, max length) on the Contact Form (src/components/Contact.tsx).
**Learning:** Client-side forms must validate payload size and format before submission to prevent UI breakage or excessive payloads. The form handled UI state (sending/sent) but failed to restrict user input.
**Prevention:** Always include `maxLength` constraints and format validation (like Regex) for text inputs during component creation, and wire up visual error states via state management (e.g., Zustand/React state).
