# STARFRONT WORLD V2 — FULL CDN R3 PACKAGE

**247 WebP approved + Gallery manifests + Story manifests + Valentine chapter 01**.

## Repo layout
Copy the CONTENTS of `starfront-world-assets/` into the asset repository's matching asset root. Check existing repo layout first: keep `images/<filename>.webp` matching manifest path `/images/<filename>.webp`. Do not create a duplicate nested `starfront-world-assets/starfront-world-assets/`.

## Git sequence
1. Branch from `version2-r1`, e.g. `feature/universal-cdn-r3`.
2. Merge contents with repo, **do not delete R2 assets**, do not overwrite existing GitHub Actions workflow with an untested template.
3. Verify all 247 `images/<filename>.webp` files against `images/pilots/<pilot>/gallery.json` SHA-256.
4. Verify `content-manifest.json`, `images/manifest.json`, Story references and GitHub Pages/CDN root paths.
5. Run existing repo checks and confirm public URLs; only then tag/release `v3.0-assets-r3`.

**Not yet GitHub-validated or published.** 4 V1 references Marcus/Victor remain external and are not fake WebP assets.
