# FND8 E.0 / Pilot Profile V2 — CDN-driven integration handoff

**2026-11-12 — DATA PREVIEW / NOT RUNTIME UI QA**

## Confirmed
- Twelve pilot IDs and exact fullName/displayName imported from user-approved Pilot Canonical Names (2026-10-28).
- Profile snippets for 11 other pilots written as DRAFT_REVIEW, not canonical biography or gameplay.
- Valentine has 5 JSON chapters under `stories/pilots/valentine/`; CH04 reconstructed REVIEW, CH05 R02 REVIEW.
- GitHub repo presently has only legacy V1 Pilot images; the 12 V2 Gallery source WebPs have **not** been verified in this repo. Never label these as CDN_READY.
- FND8 React/AI Studio source not accessible in this asset-only GitHub repo. No UI source edits/tests performed.

## Reader dynamic data flow (REQUIRED; no UI hardcode)
1. Fetch CDN `profiles/manifest.preview.json` at the active release root. Dynamically render entries; do not hardcode the 12 Pilot names in React.
2. Fetch selected `entries[].profilePath` relative to the identical release root. Render Overview from profile fields; keep quote and description distinct. `null` is unavailable, never fabricated.
3. If selected profile `story.available=true`, fetch `story.manifestPath`, then its chapter paths in manifest order and interleave chapter blocks with verified story images. If false, show supplied `emptyState`; do not create fictional chapters.
4. Gallery: resolve only verified physical WebP records from the **separate** approved CDN asset manifest. If none pass hash/path checks, present an empty/gallery-sync-pending state; avoid 404 and fallback to wrong portrait.
5. Class stats and Traits must be fetched from canonical FND1/FND8 system definitions keyed by classId. This profile is **not** a stat/trait source. Gear Compat likewise system-derived or empty.
6. Version updates: a mutable release-channel pointer may select an immutable release commit/tag; poll/refetch on app start and controlled refresh, then load all manifests/data under that single pinned release. Do not mix old JSON with new images or hardcode chapter count. The pointer and its production infrastructure are NOT yet implemented; do not claim automatic update already works.

## FND8 UI regressions needing runtime testing
- Desktop: Stage/Dossier bottom black gap; check responsive min-height/scroll.
- Mobile: Info/Gallery text contrast and overlay; Art→Info→Art transitions.
- Image navigation: hero, active thumb, selected index and metadata sync; fullscreen header `06/N`/pan/zoom.
- Two showcase/background controls on both desktop and mobile.
- Four tabs OVERVIEW / STORY / GEAR COMPAT / GALLERY; 12-person roster from CDN; 1 Story with 5 chapters, other 11 empty.
- Never rewrite V1, Character Selection Wizard, Class Stats, Traits or FND-8.3.2.x.

## Release blocker
The current repo lacks all 12 Pilot V2 Gallery WebPs and Story artwork files. Data-only records do not satisfy complete Gallery or full-image Story Reader readiness. Next workstream: import exact APPROVED WebP files from Drive with SHA validation, create per-pilot gallery manifests, then connect and test real AI Studio frontend.
