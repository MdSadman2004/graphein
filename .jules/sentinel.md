## 2023-10-27 - [Add input length limits and validation]
**Vulnerability:** Contact form lacked input length constraints on fields (name, company, email, message) and email format validation.
**Learning:** This exposes the application to potential resource exhaustion (via excessively large inputs) and allows submission of malformed data, leading to backend failures or pollution.
**Prevention:** Always implement `maxLength` limits on user inputs and appropriate format validation (e.g., regex for email) to ensure data integrity and prevent abuse.
