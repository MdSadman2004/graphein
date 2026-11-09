## 2024-05-18 - Missing Input Validation on Contact Form
**Vulnerability:** The contact form currently lacks constraints on text inputs like `name`, `company`, `email`, and `message`. There is no character limit on the input fields and there's no validation that the provided string is an email before "sending" the form (other than a check for it not being falsy).
**Learning:** This exposes the application to resource consumption attacks if an attacker attempts to send massive payloads in these fields. It could also lead to garbage data being processed because email inputs aren't validated.
**Prevention:** Implement `maxLength` on `<input>` and `<textarea>` fields, and add a simple regex or check for proper email format before proceeding to process the submission.
