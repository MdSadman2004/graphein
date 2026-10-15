## 2023-10-27 - [Add input validation and limits to Contact form]
**Vulnerability:** Missing bounds checking and regex validation for Contact form email and text inputs.
**Learning:** Client-side bounds check was missing on input elements (`maxLength`), creating a trivial DoS risk via oversized payloads (even though form is just a mock now). Adding `maxLength` prevents large input entry, and verifying email format before state changes prevents bogus input processing.
**Prevention:** Always include `maxLength` and standard format validations on user inputs by default.
