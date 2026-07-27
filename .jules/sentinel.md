## 2023-10-27 - [Add Security Headers]
**Vulnerability:** Missing HTTP Security Headers (CSP, HSTS, X-Frame-Options, etc.).
**Learning:** For a purely frontend Vite React application deployed to a static host (like Netlify, indicated by dependencies), basic headers like Content-Security-Policy (CSP) must be manually configured in a configuration file like `public/_headers` since there is no backend server to set them dynamically.
**Prevention:** Include a basic `public/_headers` or hosting-provider equivalent file at the start of new frontend-only projects.
