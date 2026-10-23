# STARFRONT WORLD ASSETS REPOSITORY
**External Image Assets & CDN Distribution for STARFRONT WORLD V2**

## 1. Overview
This repository hosts the official runtime artwork and visual assets for **STARFRONT WORLD V2** (React Web Game, Next.js 16).
Assets are distributed globally to the web game client via **jsDelivr CDN**.

- **Repository Name:** `starfront-world-assets`
- **Visibility:** Public
- **Release Tag:** `v2.0-assets-r1`
- **Total Files:** 26 WebP images
- **Total Size:** 5.94 MB (6,230,606 bytes)
- **Format:** 100% WebP high-fidelity format

---

## 2. Directory Layout

```text
starfront-world-assets/
├── images/
│   ├── aegis-gear.webp
│   ├── alviss-fullbody.webp
│   ├── alviss-portrait.webp
│   ├── eric-fullbody.webp
│   ├── eric-portrait.webp
│   ├── falcon-gear.webp
│   ├── kaelen-fullbody.webp
│   ├── kaelen-portrait.webp
│   ├── lyra-fullbody.webp
│   ├── lyra-portrait.webp
│   ├── marcus-fullbody.webp
│   ├── marcus-portrait.webp
│   ├── selena-fullbody.webp
│   ├── selena-portrait.webp
│   ├── valentine-activity-001.webp
│   ├── valentine-casual.webp
│   ├── valentine-closeup.webp
│   ├── valentine-combat.webp
│   ├── valentine-event-001.webp
│   ├── valentine-fullbody.webp
│   ├── valentine-portrait.webp
│   ├── valentine-story-001.webp
│   ├── valentine-uniform-001.webp
│   ├── vanguard-gear.webp
│   ├── victor-fullbody.webp
│   └── victor-portrait.webp
├── manifests/
│   └── assets-manifest.json
├── SHA256SUMS.txt
└── README.md
```

---

## 3. jsDelivr CDN URL Patterns

Client applications resolve images using the following immutable pattern:
```text
https://cdn.jsdelivr.net/gh/<GITHUB_OWNER>/starfront-world-assets@<RELEASE_TAG>/images/<FILE_NAME>
```

### Examples:
- **Marcus Portrait:**
  `https://cdn.jsdelivr.net/gh/<GITHUB_OWNER>/starfront-world-assets@v2.0-assets-r1/images/marcus-portrait.webp`
- **Valentine Combat (V2):**
  `https://cdn.jsdelivr.net/gh/<GITHUB_OWNER>/starfront-world-assets@v2.0-assets-r1/images/valentine-combat.webp`
- **Aegis Gear Illustration:**
  `https://cdn.jsdelivr.net/gh/<GITHUB_OWNER>/starfront-world-assets@v2.0-assets-r1/images/aegis-gear.webp`

---

## 4. Release & Tagging Conventions

- **Always use Immutable Git Tags:** E.g., `v2.0-assets-r1`, `v2.0-assets-r2`.
- **Never rely on branch references (`@main` or `@master`):** jsDelivr caches Git tags permanently (immutable), while branch heads have 12-hour CDN cache TTL, causing stale image bugs.
- **Never rewrite or force-push an existing release tag.**

---

## 5. Integrity Verification

To verify that all assets are intact and uncorrupted:

```bash
# On Linux / macOS:
sha256sum -c SHA256SUMS.txt
```

Every file must report `OK`.
