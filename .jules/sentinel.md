## 2026-08-25 - [Security Headers Constraint]
**Vulnerability:** Missing basic security headers in the Netlify deployment.
**Learning:** The project is configured for Netlify and uses `public/_headers` to enforce security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security). However, Content-Security-Policy (CSP) is intentionally omitted to avoid inadvertently breaking external integrations without a full architectural audit.
**Prevention:** Always maintain the `public/_headers` file for Netlify deployments, and do not add CSP without a comprehensive architectural review.
