[← Back to TROi.se](https://troi.se)
---

## 🧭 Architecture Decision Records (ADR) — Guide & CLI Tutorial

Architecture Decision Records (ADRs) document **key technical and architectural decisions**, the reasoning behind them, and their consequences.  
They provide a transparent and lightweight way to ensure that decisions are understood, traceable, and evolve with your system.

### 💡 Best Practices

- ✅ Keep each ADR about one clear decision.  
- ✅ Capture reasoning, trade-offs, and alternatives — not just the conclusion.  
- ✅ Record decisions when they happen — not retroactively.  
- ✅ Use clear statuses: Draft → Proposed → Accepted → Superseded.  
- ✅ Link related ADRs using `related:`, `supersedes:`, and `superseded_by:` fields.  
- ✅ Never delete ADRs — supersede them to preserve history.  
- ✅ Use pull requests for discussion and approval.  
- ✅ Keep ADRs concise and easy to read.  
- ✅ Store supporting diagrams or assets next to the ADR file if needed.  
- ✅ Treat ADRs as code — reviewed, versioned, and published.  

### Why ADR
Architecture knowledge often disappears into slides, chats, and memory. 
When teams or technologies change, context is lost, and decisions are repeated or contradicted.

> **Good architecture isn’t about getting every decision right — it’s about making the reasoning visible.**

ADRs ensure:
• Transparency — everyone knows why choices were made.
• Continuity — new team members understand the reasoning.
• Accountability — clear ownership and decision status.
• Traceability — decisions can be followed over time.

The goal is informed decisions — not discussions.

### CLI Tutorial
We use Log4brains to create, preview, and publish ADRs easily.
Each ADR is a simple Markdown file, managed in version control and published as a static site.

#### Requirements: Node.js + Git installed
Quick check:
```bash
node -v && npm -v && git --version
```
#### Go to your repository root
Example: cd ~/code/chricker.github.io
```bash
cd /path/to/your/repo
```

#### Create the ADR folder structure (once)
```bash
mkdir -p adr/docs/adr
cd adr
```
#### Initialize a minimal npm project and install the latest Log4brains
```bash
npm init -y
npm install --save-dev log4brains@latest
```
#### Create the Log4brains configuration (v1 format)
```bash
cat > .log4brains.yml <<'YAML'
project:
  name: "TROi Architecture Decisions"
  tz: "Europe/Stockholm"
  adrFolder: "./docs/adr"
YAML
```
#### Create your first ADR (interactive)
```bash
npx -y log4brains@latest adr new
```
 Tip: to skip questions, add a title directly:
 ```bash
 npx -y log4brains@latest adr new --title "Adopt event-driven integration"
```
#### Preview locally (dev server)
Open the printed URL (e.g. http://localhost:4004/adr-l4b)
```bash
npx -y log4brains@latest preview --basePath /adr-l4b
```
(Stop the dev server with Ctrl+C when finished)

#### Build the static ADR site (creates adr/.log4brains/out/)
```bash
npx -y log4brains@latest build --basePath /adr-l4b
ls -la .log4brains/out | head
```
#### (Optional local test) Copy the build output into MkDocs so you can preview everything
```bash
cd ..
mkdir -p docs/adr-l4b
rm -rf docs/adr-l4b/*
cp -r adr/.log4brains/out/* docs/adr-l4b/
```
#### Commit and push
```bash
git add adr .github/workflows/mkdocs-pages.yml docs/adr-l4b || true
git commit -m "Add Log4brains ADR setup + first ADR"
git push
```
**Done! GitHub Actions will build and publish → https://troi.se/adr-l4b**
