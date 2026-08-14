## 2024-08-14 - Security Headers Addition
**Vulnerability:** Missing basic security HTTP headers.
**Learning:** Netlify deployments require `public/_headers` to enforce things like `X-Frame-Options` and `Strict-Transport-Security`. CSP was omitted intentionally due to integration concerns.
**Prevention:** Always ensure a static build artifact like `public/_headers` is present for Netlify sites to enforce basic web security postures out of the box.
