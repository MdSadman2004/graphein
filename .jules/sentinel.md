## 2024-06-04 - [Missing input length limits on Contact Form]
**Vulnerability:** The Contact form fields (Name, Company, Email, Message) had no maximum length limit.
**Learning:** This is a DoS risk, where users could paste large amounts of data in the fields and crash the client or overwhelm the backend API when sending data.
**Prevention:** Always add sensible `maxLength` limits to `input` and `textarea` components handling user input.
