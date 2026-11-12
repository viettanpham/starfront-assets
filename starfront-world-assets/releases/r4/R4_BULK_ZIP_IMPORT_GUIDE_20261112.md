# R4 V2 Gallery bulk import — 2026-11-12

Status: MANUAL BULK IMPORT KIT PREPARED; no automatic background jobs.

Latest audit at handoff: 87 WebP objects on R4 staging branch; 79 marked VERIFIED in gallery index, 297 expected. R4 Preview channel pinned to an immutable older commit; DO NOT move production or preview pointer until new snapshot has been validated.

Use ChatGPT-provided STARFRONT_R4_MANUAL_UPLOAD_KIT.zip (README.md + import_r4.py) with 12 approved Drive ZIPs. Script verifies each WebP against exact SHA-256 stored in galleries/*.json and does not overwrite mismatched assets, then updates per-pilot galleries, profile image import statuses and release counts. It does not push to GitHub or promote channel.

Sources: MASTER STARFRONT_WORLD/PILOT, approved per-Pilot final ZIPs; 12 original source-manifests preserved in this release. Keep REVIEW/ARCHIVE and earlier superseded render variants out of CDN.

Workflow: download approved ZIPs → clone branch release/r4-pilot-v2-staging-20261112 → run dry-run → import → inspect report/conflicts → commit/push → verify GitHub tree/manifest and HTTP WebPs → update preview channel to NEW immutable commit. If any SHA mismatches remain, STOP & REPORT, do not mark READY.

AI Studio FND8 is independently implementing config/channel/manifest dynamic reader; do not hardcode chapter counts, Pilot rosters or gallery filenames in frontend.
