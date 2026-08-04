# CLAUDE.md — Faith-N-Hope Neighbors site

Static GitHub Pages site for www.faithnhope.foundation (this repo is **public**; every committed file is web-served).

- **State:** mostly dormant; occasional content updates.
- **Deploys:** pushing `main` publishes the site live — treat every push as a production deploy.
- **Assets/records:** originals, invoices, and logs live in the foundation's Drive vault, not here. Never commit PDFs, scans, donor data, or anything not meant for the public web.
- **When adding a page:** update nav links on the other pages and `sitemap.xml`.

## DNS (Cloudflare, since 2026-08-03)

The canonical host is **www**; the apex only redirects. GitHub would not issue an apex certificate (repeated remove/re-add of the custom domain produced a www-only cert every time), so Cloudflare handles the apex instead:

- Apex `A` records (185.199.x.153) are **proxied** — Cloudflare terminates TLS with its own cert and a redirect rule sends `faithnhope.foundation/*` → `https://www.faithnhope.foundation/${1}` (301) at the edge. The origin is never contacted for apex requests.
- The `www` CNAME must stay **DNS-only** — proxying it would interfere with GitHub's cert renewals.
- MX/TXT records are Cloudflare Email Routing (`contact@` → Gmail). Don't touch them when changing site DNS.
