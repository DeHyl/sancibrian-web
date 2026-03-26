# Security Policy — Sancibrian.com Website

> **Last Updated:** 2026-03-25
> **Maintained by:** Alejandro Dominguez — DeHyl SAS
> **Stack:** Next.js 14 + Tailwind CSS (static site, deployed via Vercel/Railway)

---

## 1. Project Risk Profile

**Risk Level: LOW**

Sancibrian.com is a **pure static marketing website** with:
- No API routes
- No database
- No user authentication
- No server-side data processing

The only dynamic element is the **Capitán DD chat widget** (embedded from capitan-dd on Railway).

Primary threats:
- Supply chain attack via the embedded widget script
- Google Analytics ID exposure (low impact)
- XSS via malicious widget compromise

---

## 2. Security Status

| Layer | Status | Notes |
|---|---|---|
| API Routes | ✅ None | No attack surface |
| Database | ✅ None | No attack surface |
| User Auth | ✅ None | No credentials to steal |
| Embedded Widget | ⚠️ Trusted source | capitan-dd on Railway — we control it |
| Google Analytics | ✅ Low risk | GA ID is public-facing by design |
| Image Sources | ✅ Allowlisted | Only `images.unsplash.com` in next.config.ts |

---

## 3. Security Protocols

### 3.1 Widget Script Trust Model
The site loads:
```html
<Script src="https://capitan-dd-production.up.railway.app/widget.js" />
```

This script has full DOM access on sancibrian.com. Security relies on:
- Railway account security (2FA enabled on Railway account)
- capitan-dd repo access control (DeHyl GitHub org)
- Capitán DD's own security hardening (see capitan-dd/docs/security/SECURITY.md)

**If capitan-dd Railway deployment is compromised, sancibrian.com visitors are at risk.**

### 3.2 Content Security Policy
Next.js applies default security headers. Custom CSP not configured (acceptable for static site with no user data).

### 3.3 Dependency Management
```bash
npm audit  # Run before each deploy
```
Next.js and its dependencies are the main attack surface. Keep Next.js updated.

---

## 4. Incident Response

### Widget Compromise Suspected
1. Immediately remove the `<Script>` tag from `app/layout.tsx`
2. Deploy to production (Vercel/Railway auto-deploy from main branch)
3. Investigate capitan-dd Railway deployment
4. Restore widget only after capitan-dd security is confirmed

### Defacement / XSS
1. Roll back to previous Git commit
2. Force deploy: `git push origin main` triggers Railway auto-deploy

---

## 5. Security Checklist (Before Each Deploy)

- [ ] `npm audit` clean (or only low-severity findings)
- [ ] No secrets in code or environment variables
- [ ] Widget script URL still points to trusted Railway deployment
- [ ] Google Analytics ID is the correct property ID

---

## 6. No Daily Automated Audit

This project is excluded from the daily security audit (no server, no dependencies with exploit potential). Next.js version upgrades are handled manually when security advisories are published.

Recommended: Run `npm audit` manually before each major content update.
