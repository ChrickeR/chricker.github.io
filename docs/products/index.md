<!-- TROi – Architecture-as-Code (AaC) Product Landing Page -->

<style>
:root{
  --bg:#0b0f14;
  --card:#ffffff;
  --text:#0f172a;
  --muted:#6b7280;
  --border:#e5e7eb;
  --shadow:0 10px 24px rgba(2,6,23,.08);
  --radius:18px;

  --accent:#10b981;      /* TROi green */
  --accent2:#60a5fa;     /* blue */
  --accent3:#f59e0b;     /* amber */
  --accent4:#a78bfa;     /* violet */
}

.wrap{max-width:1100px;margin:0 auto;padding:26px 12px 80px;}
.hero{text-align:center;margin:10px 0 28px;}
.eyebrow{display:inline-block;font-size:.8rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;
  color:var(--accent);background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.25);
  padding:6px 10px;border-radius:999px;}
.title{font-size:clamp(32px,5vw,48px);font-weight:900;color:var(--text);margin:10px 0 8px;line-height:1.08;}
.sub{color:var(--muted);font-size:1.1rem;max-width:820px;margin:0 auto 8px;}
.note{color:var(--muted);font-size:.95rem;}

.h2{font-size:1.5rem;color:var(--text);margin:34px 0 12px;}
.grid{display:grid;grid-template-columns:repeat(12,1fr);gap:18px;}
.card{
  grid-column:span 4;background:var(--card);border:1px solid var(--border);
  border-radius:var(--radius);box-shadow:var(--shadow);padding:18px 18px 16px;position:relative;overflow:hidden;
}
.card--wide{grid-column:span 12;}
.card h3{margin:0 0 6px;font-size:1.05rem;color:var(--text);}
.card p{margin:0 0 10px;color:var(--muted);}
.card ul{margin:10px 0 0;padding-left:18px;}
.card li{margin:6px 0;color:var(--text);}
@media (max-width:900px){.card{grid-column:span 12;}}

.badge{display:inline-flex;align-items:center;gap:6px;font-size:.78rem;font-weight:800;
  padding:4px 10px;border-radius:999px;border:1px solid;}
.badge--ok{color:var(--accent);background:rgba(16,185,129,.08);border-color:rgba(16,185,129,.25);}
.badge--dev{color:var(--accent3);background:rgba(245,158,11,.08);border-color:rgba(245,158,11,.25);}
.dot{width:8px;height:8px;border-radius:999px;background:currentColor;display:inline-block;}

.strip{height:6px;position:absolute;inset:0 0 auto 0;background:var(--accent);}
.strip--blue{background:var(--accent2);} .strip--amber{background:var(--accent3);} .strip--violet{background:var(--accent4);}

.table{width:100%;border-collapse:separate;border-spacing:0;background:var(--card);
  border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;}
.table th,.table td{padding:12px 14px;text-align:left;vertical-align:top;}
.table thead th{background:#f8fafc;color:#0f172a;font-weight:900;border-bottom:1px solid var(--border);}
.table tbody tr+tr td{border-top:1px solid var(--border);}
</style>

<div class="wrap">

<div class="hero">
  <span class="eyebrow">TROi Framework Product</span>
  <h1 class="title">Architecture-as-Code (AaC)</h1>
  <p class="sub">A lightweight framework that turns architecture into a <strong>living, version-controlled system</strong> — enabling teams to evolve, align, and govern architecture like code.</p>
  <p class="note">Available as part of the TROi product suite — built with Docs-as-Code principles and full Git integration.</p>
</div>

## Core Framework Modules

<div class="grid">
  <div class="card">
    <span class="strip strip--blue"></span>
    <h3>ADRs — Architecture Decision Records</h3>
    <p>Versioned decision logs capturing context, options, trade-offs, and rationale.  
       Enables traceability and collective decision intelligence.</p>
  </div>

  <div class="card">
    <span class="strip strip--amber"></span>
    <h3>Tech Radar — Technology Landscape</h3>
    <p>Visual map of adopted, trialed, assessed, or deprecated technologies — supporting strategic alignment and tech transparency.</p>
  </div>

  <div class="card">
    <span class="strip strip--violet"></span>
    <h3>Target Architecture — Principles & Roadmap</h3>
    <p>Defines principles, desired future state, and architectural evolution path — connecting strategy to implementation.</p>
  </div>
</div>

## Product Capabilities

<table class="table">
  <thead><tr><th>Capability</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>Version Control First</strong></td><td>All architectural artefacts live in Git — fully traceable, reviewable, and evolvable.</td></tr>
    <tr><td><strong>Decision Traceability</strong></td><td>Links architecture changes to business intent and code implementation.</td></tr>
    <tr><td><strong>Automation Ready</strong></td><td>Integrates with CI/CD pipelines for validation, publishing, and governance.</td></tr>
    <tr><td><strong>Guided Autonomy</strong></td><td>Teams move independently while staying aligned through shared principles.</td></tr>
    <tr><td><strong>Knowledge Retention</strong></td><td>Architectural knowledge lives on — even when teams evolve.</td></tr>
  </tbody>
</table>

## Integrations

<div class="grid">
  <div class="card">
    <span class="strip"></span>
    <h3>Log4brains</h3>
    <p>Generates searchable ADR indexes and web views directly from your repository.</p>
  </div>
  <div class="card">
    <span class="strip strip--blue"></span>
    <h3>MkDocs Material</h3>
    <p>Docs-as-Code site generation with custom components, search, and themes.</p>
  </div>
  <div class="card">
    <span class="strip strip--amber"></span>
    <h3>Zalando Tech Radar</h3>
    <p>YAML-driven radar visualisation for technology alignment across teams.</p>
  </div>
</div>

## Product Status

<div class="card card--wide">
  <span class="strip"></span>
  <h3>Availability <span class="badge badge--ok"><span class="dot"></span>Available</span></h3>
  <p>The Architecture-as-Code framework is actively used within enterprise-scale environments and available for integration with new projects.</p>
</div>

<div class="card card--wide">
  <span class="strip strip--amber"></span>
  <h3>Next Iteration <span class="badge badge--dev"><span class="dot"></span>In Development</span></h3>
  <p>Automation layer for architecture validation and governance reporting — including compliance checks and visual dashboards.</p>
</div>

## Why Architecture-as-Code

<table class="table">
  <thead><tr><th>Strength</th><th>What it Delivers</th></tr></thead>
  <tbody>
    <tr><td><strong>Transparency</strong></td><td>Architecture becomes a visible, shared conversation — not a hidden document.</td></tr>
    <tr><td><strong>Speed & Alignment</strong></td><td>Faster iteration with consistent, principle-based governance.</td></tr>
    <tr><td><strong>Longevity</strong></td><td>Decisions and intent are preserved beyond org charts and project cycles.</td></tr>
    <tr><td><strong>Open Integration</strong></td><td>Works seamlessly with existing repos, docs, and pipelines.</td></tr>
  </tbody>
</table>

</div>
