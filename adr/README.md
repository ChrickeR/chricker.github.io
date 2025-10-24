# ADR Overlay for Log4brains (TROi)

Drop this folder **adr-overlay/** in the **root** of your MkDocs repo (same level as `docs/`).

The GitHub Actions workflow will:
1) Checkout your ADR source repo
2) Copy everything from `adr-overlay/` **into** that ADR source (overriding files)
3) Build Log4brains
4) Embed the built site into `docs/adr-l4b/`

## Includes
- Branding (`static/logo.svg` placeholder)
- `log4brains.config.js` (site title/description)
- ADR **_TEMPLATE.md** with DDD + ownership fields
- Two example ADRs (`0001`, `0002`)
