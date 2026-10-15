## 2026-07-22 - Added Netlify Security Headers
**Vulnerability:** Missing important security headers like CSP, HSTS, X-Frame-Options, X-Content-Type-Options.
**Learning:** For static sites deployed to Netlify, adding a `public/_headers` file is the standard way to enforce these security policies at the edge. The CSP needs to allow 'unsafe-inline' and 'unsafe-eval' for React/Vite/Framer Motion to function properly in this specific setup.
**Prevention:** Ensure `public/_headers` is always included in new static site templates or when setting up deployment.
