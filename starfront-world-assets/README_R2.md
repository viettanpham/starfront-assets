# STARFRONT CDN R2 — GitHub-ready package

**200 approved V2 WebP** across nine pilots: `alviss` 10, `kaelen` 20, `lyra` 20, `selena` 20, `valentine` 35, `fortuna` 30, `aria` 20, `rhea` 23, `nova` 22.

This package is **a repository overlay**, not an instruction to delete legacy `manifests/assets-manifest.json` or R1 images from the target repository. Existing R1 files must be preserved for backward compatibility as needed.

- `images/manifest.json`: category directory index.
- `images/pilots/manifest.json`: pilot directory index.
- `images/pilots/<pilot>/files.json`: generated from actual WebP by Node script.
- `images/pilots/<pilot>/gallery.json`: optional editable editorial display fields. For R2 this pack provides neutral, non-speculative titles; upgrade exact wording after editorial verification.
- `.github/workflows/asset-index.yml`: auto-regeneration after push to `version1-r2`; commits generated indexes to same branch.
- `STARFRONT_ASSET_CDN_RELEASE_GUIDE.md`: release and update instructions.

**Important:** Application runtime must support these schemas before enabling CDN R2. Creating a tag alone will not fix currently broken app asset paths. This package does not create a remote GitHub tag or change the live app.
