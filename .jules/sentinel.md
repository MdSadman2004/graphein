## 2026-08-20 - [Add Basic Security Headers]
**Vulnerability:** Missing security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security) in a project configured for Netlify deployment.
**Learning:** The project relies on Netlify but lacked a public/_headers file, leaving the application vulnerable to clickjacking, MIME-type sniffing, and potentially insecure transmission. Content-Security-Policy (CSP) is intentionally omitted to avoid breaking inline scripts/styles (like Framer Motion) without a full audit.
**Prevention:** Always ensure a _headers or netlify.toml file is present in Netlify-deployed projects to enforce basic security headers.
