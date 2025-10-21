# ADRs — Log4brains View

The embedded view below uses the **Log4brains** layout (status badges, search over front matter, etc.).  
To update it, drop the built Log4brains site into `docs/adr-l4b/` (see instructions below).

<div style="border:1px solid var(--md-default-fg-color--light); border-radius: 8px; overflow: hidden;">
  <iframe src="/adr-l4b/index.html" style="width:100%; height:75vh; border:0;"></iframe>
</div>

## How to update the embedded Log4brains site
1. In your ADR repo (or locally), run:
   ```bash
   npx log4brains build
   ```
2. Copy the generated `site/` folder into this repo under `docs/adr-l4b/`.
3. Commit & push. The embedded view will update automatically.
