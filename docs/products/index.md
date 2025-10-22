<!-- Architecture-as-Code (AaC) — styled MD inspired by the screenshot -->

<style>
/* ========= AaC page-scoped styles ========= */
:root {
  --aac-bg: #0b0f14;              /* dark page bg works well on light too */
  --aac-card: #ffffff;            /* card background */
  --aac-text: #0f172a;            /* slate-900 */
  --aac-muted: #6b7280;           /* gray-500 */
  --aac-border: #e5e7eb;          /* gray-200 */
  --aac-shadow: 0 6px 18px rgba(2, 6, 23, 0.08);
  --aac-radius: 16px;

  --aac-accent: #10b981;          /* emerald */
  --aac-accent-2: #60a5fa;        /* blue */
  --aac-accent-3: #f59e0b;        /* amber */
  --aac-accent-4: #a78bfa;        /* violet */
}

.aac-wrap {
  max-width: 1060px;
  margin: 0 auto;
  padding: 24px 12px 64px;
}

.aac-eyebrow {
  display:inline-block;
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--aac-accent);
  background: rgba(16,185,129,.08);
  border: 1px solid rgba(16,185,129,.25);
  padding: 6px 10px;
  border-radius: 999px;
}

.aac-title {
  margin: 10px 0 8px;
  font-size: clamp(28px, 5vw, 42px);
  line-height: 1.1;
  color: var(--aac-text);
  font-weight: 900;
}

.aac-subtitle {
  color: var(--aac-muted);
  font-size: 1.05rem;
  margin-bottom: 28px;
}

/* Cards */
.aac-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 18px;
}

.aac-card {
  grid-column: span 4;
  background: var(--aac-card);
  border: 1px solid var(--aac-border);
  border-radius: var(--aac-radius);
  box-shadow: var(--aac-shadow);
  padding: 18px 18px 16px;
}

@media (max-width: 900px) {
  .aac-card { grid-column: span 12; }
}

.aac-card h3 {
  margin: 0 0 6px;
  font-size: 1.05rem;
  color: var(--aac-text);
}
.aac-card p { margin: 0 0 10px; color: var(--aac-muted); }

.aac-keylist {
  list-style: none; margin: 10px 0 0; padding: 0;
}
.aac-keylist li {
  padding-left: 24px;
  position: relative;
  margin: 8px 0;
  color: var(--aac-text);
}
.aac-keylist li::before {
  content: "•";
  position: absolute; left: 8px; top: 0; line-height: 1.2;
  color: var(--aac-accent);
  font-weight: 900;
}

/* Module mini-cards with colored accents */
.aac-mod {
  grid-column: span 4;
  background: var(--aac-card);
  border: 1px solid var(--aac-border);
  border-radius: var(--aac-radius);
  box-shadow: var(--aac-shadow);
  padding: 16px 16px 14px;
  position: relative;
  overflow: hidden;
}
.aac-mod::before {
  content:"";
  position:absolute; inset:0 0 auto 0; height:6px;
  background: var(--aac-accent);
}
.aac-mod--blue::before  { background: var(--aac-accent-2); }
.aac-mod--amber::before { background: var(--aac-accent-3); }
.aac-mod--violet::before{ background: var(--aac-accent-4); }

.aac-mod h4 { margin: 6px 0 6px; font-size: 1rem; color: var(--aac-text); }
.aac-mod p { margin: 0; color: var(--aac-muted); font-size: .95rem; }

/* Section headings */
.aac-h2 {
  margin: 34px 0 12px;
  font-size: 1.4rem;
  color: var(--aac-text);
}

/* Badges */
.aac-badge {
  display:inline-flex; align-items:center; gap:6px;
  font-size:.8rem; font-weight:700; color: var(--aac-accent);
  background: rgba(16,185,129,.08);
  border:1px solid rgba(16,185,129,.25);
  padding: 4px 10px; border-radius: 999px;
}
.aac-dot {
  width:8px; height:8px; border-radius:999px; background: var(--aac-accent);
}

/* Feature table */
.aac-table {
  width:100%; border-collapse:separate; border-spacing:0;
  background: var(--aac-card); border:1px solid var(--aac-border);
  border-radius: var(--aac-radius); box-shadow: var(--aac-shadow);
  overflow:hidden;
}
.aac-table th, .aac-table td {
  text-align:left; padding:12px 14px; vertical-align:top;
}
.aac-table thead th {
  background:#f8fafc; color:#0f172a; font-weight:800;
  border-bottom:1px solid var(--aac-border);
}
.aac-table tbody tr + tr td { border-top:1px solid var(--aac-border); }
</style>

<div class="aac-wrap">

  <span class="aac-eyebrow">Framework Product</span>
  <h1 class="aac-title">Architecture-as-Code (AaC)</h1>
  <p class="aac-subtitle">
    Ett hög­nivåramverk som gör arkitektur <strong>levande och versionshanterad</strong>. 
    Få beslut, riktning och teknikval att samspela – och utvecklas som kod.
  </p>

  <div class="aac-grid" style="margin-top:18px;">
    <div class="aac-card">
      <h3>Product Overview</h3>
      <p>AaC är en lättviktig metod + struktur som förvandlar arkitektur från statiska dokument till ett <em>levande system</em> i Git.</p>
      <ul class="aac-keylist">
        <li>Versionering & PR-granskning av arkitekturelement</li>
        <li>Spårbarhet från princip → beslut → implementation</li>
        <li>Automatiserbar governance i CI/CD</li>
      </ul>
    </div>

    <div class="aac-card">
      <h3>Current Status</h3>
      <p>
        <span class="aac-badge"><span class="aac-dot"></span> Available</span>
      </p>
      <ul class="aac-keylist">
        <li>Docs-as-Code (MkDocs Material)</li>
        <li>ADR-publicering (Log4brains)</li>
        <li>Tech Radar (YAML + renderer)</li>
      </ul>
    </div>

    <div class="aac-card">
      <h3>Who it’s for</h3>
      <p>Produkt- & teknikledare, domänarkitekter, plattforms- och team-owners som vill ha snabb rörelse utan att tappa alignment.</p>
      <ul class="aac-keylist">
        <li>Skalbara organisationer med flera team</li>
        <li>Domän-/bounded context-tänk</li>
        <li>Behov av tydlig “guided autonomy”</li>
      </ul>
    </div>
  </div>

  <h2 class="aac-h2">Core Modules</h2>
  <div class="aac-grid">
    <div class="aac-mod aac-mod--blue">
      <h4>ADRs — Decision Records</h4>
      <p>Versionshanterade beslut med kontext, alternativ och trade-offs. Sökbart besluts-DNA.</p>
    </div>
    <div class="aac-mod aac-mod--amber">
      <h4>Tech Radar — Technology Alignment</h4>
      <p>Synliggör val över quadrants & rings (Adopt/Trial/Assess/Hold) för minskad tech-sprawl.</p>
    </div>
    <div class="aac-mod aac-mod--violet">
      <h4>Target Architecture — Principles & Roadmap</h4>
      <p>Levande riktning och principer som kopplar affärsintention till teknisk utveckling.</p>
    </div>
  </div>

  <h2 class="aac-h2">Key Capabilities</h2>
  <table class="aac-table">
    <thead>
      <tr>
        <th>Capability</th>
        <th>What it enables</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Version Control First</strong></td>
        <td>All arkitektur lever i repo → commit-historik, kodgranskning och revert.</td>
      </tr>
      <tr>
        <td><strong>Traceable Decisions</strong></td>
        <td>Länkning mellan ADRs, epics, kod och dokumentation.</td>
      </tr>
      <tr>
        <td><strong>Automation Ready</strong></td>
        <td>Validera policy, rendera rapporter och publicera sidor i CI/CD.</td>
      </tr>
      <tr>
        <td><strong>Guided Autonomy</strong></td>
        <td>Team rör sig snabbt inom tydliga principer och standarder.</td>
      </tr>
      <tr>
        <td><strong>Single Source of Truth</strong></td>
        <td>Beslut, riktning och teknikval samlas och uppdateras på ett ställe.</td>
      </tr>
    </tbody>
  </table>

  <h2 class="aac-h2">Integrations</h2>
  <div class="aac-grid">
    <div class="aac-mod">
      <h4>Log4brains</h4>
      <p>Genererar ADR-index och webbvyer direkt från repo.</p>
    </div>
    <div class="aac-mod">
      <h4>MkDocs Material</h4>
      <p>Docs-as-Code med teman, sök och komponenter.</p>
    </div>
    <div class="aac-mod">
      <h4>Zalando Tech Radar</h4>
      <p>YAML-driven radar som kan publiceras automatiskt.</p>
    </div>
  </div>

</div>
