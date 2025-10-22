<!-- TROi – Products & Solutions Landing (styled Markdown) -->

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

.troi-wrap{max-width:1100px;margin:0 auto;padding:26px 12px 80px;}
.troi-hero{
  text-align:center; margin:10px 0 28px;
}
.troi-eyebrow{
  display:inline-block; font-size:.8rem; font-weight:800; letter-spacing:.08em;
  text-transform:uppercase; color:var(--accent);
  background:rgba(16,185,129,.08); border:1px solid rgba(16,185,129,.25);
  padding:6px 10px; border-radius:999px;
}
.troi-title{font-size:clamp(32px,5vw,48px);font-weight:900;color:var(--text);margin:10px 0 8px;line-height:1.08;}
.troi-sub{color:var(--muted);font-size:1.1rem;max-width:820px;margin:0 auto 8px;}
.troi-note{color:var(--muted);font-size:.95rem;}

.troi-h2{font-size:1.5rem;color:var(--text);margin:34px 0 12px;}

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
  padding:4px 10px;border-radius:999px;border:1px solid;
}
.badge--ok{color:var(--accent);background:rgba(16,185,129,.08);border-color:rgba(16,185,129,.25);}
.badge--dev{color:var(--accent3);background:rgba(245,158,11,.08);border-color:rgba(245,158,11,.25);}
.badge--plan{color:var(--accent2);background:rgba(96,165,250,.10);border-color:rgba(96,165,250,.25);}
.dot{width:8px;height:8px;border-radius:999px;background:currentColor;display:inline-block;}

.strip{height:6px;position:absolute;inset:0 0 auto 0;background:var(--accent);}
.strip--blue{background:var(--accent2);} .strip--amber{background:var(--accent3);} .strip--violet{background:var(--accent4);}

.table{width:100%;border-collapse:separate;border-spacing:0;background:var(--card);
  border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden;
}
.table th,.table td{padding:12px 14px;text-align:left;vertical-align:top;}
.table thead th{background:#f8fafc;color:#0f172a;font-weight:900;border-bottom:1px solid var(--border);}
.table tbody tr+tr td{border-top:1px solid var(--border);}
</style>

<div class="troi-wrap">

<div class="troi-hero">
  <span class="troi-eyebrow">TROi — Products & Solutions</span>
  <h1 class="troi-title">Innovativa ramverk och verktyg<br/>för snabbare, tryggare tech</h1>
  <p class="troi-sub">Vi bygger **lätta men kraftfulla** ramverk som gör arkitektur, integration och leverans <em>tydligt, versionshanterat och automatiserbart</em> — så team kan röra sig snabbt utan att tappa riktningen.</p>
  <p class="troi-note">Alla erbjudanden lever som **Docs-as-Code** i Git och kan kopplas till CI/CD.</p>
</div>

## Current Offerings

<div class="grid">

  <div class="card">
    <span class="strip"></span>
    <h3>Architecture-as-Code (AaC) <span class="badge badge--ok"><span class="dot"></span>Available</span></h3>
    <p>Ramverket som gör arkitektur levande och versionshanterad.</p>
    <ul>
      <li>ADRs (beslut med kontext & trade-offs)</li>
      <li>Tech Radar (quadrants & rings)</li>
      <li>Target Architecture (principer & roadmap)</li>
    </ul>
  </div>

  <div class="card">
    <span class="strip strip--blue"></span>
    <h3>Integration Frameworks <span class="badge badge--ok"><span class="dot"></span>Available</span></h3>
    <p>Metoder & mönster för robusta integrationsflöden mellan system.</p>
    <ul>
      <li>Event-drivet + API-först</li>
      <li>Antikorruptionslager & översättare</li>
      <li>Referensarkitektur (cloud-friendly)</li>
    </ul>
  </div>

  <div class="card">
    <span class="strip strip--violet"></span>
    <h3>Technology Assessments <span class="badge badge--ok"><span class="dot"></span>Available</span></h3>
    <p>Snabb nulägesanalys med tydliga rekommendationer och prioriterad roadmap.</p>
    <ul>
      <li>Gap-analys & risk</li>
      <li>Principer & guardrails</li>
      <li>Kost/nytta & leveransplan</li>
    </ul>
  </div>

  <div class="card">
    <span class="strip strip--amber"></span>
    <h3>Custom Solution Development <span class="badge badge--ok"><span class="dot"></span>Available</span></h3>
    <p>Skräddarsydd utveckling med fokus på enkelhet, driftsäkerhet och integration.</p>
    <ul>
      <li>Arkitektur & implementering</li>
      <li>CI/CD & observability</li>
      <li>Handover med dokumenterade mönster</li>
    </ul>
  </div>

  <div class="card">
    <span class="strip strip--blue"></span>
    <h3>Engineering Competence <span class="badge badge--ok"><span class="dot"></span>Available</span></h3>
    <p>Guided Autonomy, Team Topologies och arbetssätt som skalar.</p>
    <ul>
      <li>Repo-struktur & standarder</li>
      <li>ADR & ADR-rutiner</li>
      <li>Tech-radar & enablers</li>
    </ul>
  </div>

  <div class="card">
    <span class="strip"></span>
    <h3>Target Architecture Advisory <span class="badge badge--ok"><span class="dot"></span>Available</span></h3>
    <p>Från vision till praktisk färdplan med tydliga principer, domäner och BC:er.</p>
    <ul>
      <li>Domänkartläggning & kontextgränser</li>
      <li>Roadmap & värde-sekvenser</li>
      <li>Beslutslogg (ADRs) kopplad till initiativ</li>
    </ul>
  </div>

</div>

## Upcoming Products

<div class="grid">

  <div class="card card--wide">
    <span class="strip"></span>
    <h3>Enterprise Integration Suite <span class="badge badge--dev"><span class="dot"></span>In Development</span></h3>
    <p>Toolkit för sömlös system-integration: mallar, policies, och CI-steg.</p>
    <ul>
      <li>API-policy & schema-validering i pipeline</li>
      <li>Event-kontrakt & kompatibilitetstester</li>
      <li>Observability-starter (tracing, metrics, logs)</li>
    </ul>
  </div>

  <div class="card card--wide">
    <span class="strip strip--blue"></span>
    <h3>Security Assessment Platform <span class="badge badge--plan"><span class="dot"></span>Planning Phase</span></h3>
    <p>Automatiserade kontroller & rapporter för säkrare leverans.</p>
    <ul>
      <li>Dependency & license scanning</li>
      <li>Secrets-detektion & policy-gate</li>
      <li>Risk-score & rekommenderade åtgärder</li>
    </ul>
  </div>

</div>

## Why TROi

<table class="table">
  <thead><tr><th>Styrka</th><th>Vad du får</th></tr></thead>
  <tbody>
    <tr><td><strong>Lightweight men robust</strong></td><td>Praktiska ramverk som funkar i verkligheten utan onödig byråkrati.</td></tr>
    <tr><td><strong>Docs-as-Code</strong></td><td>Allt lever i Git – versionshistorik, PR-flöde och automatiserad publicering.</td></tr>
    <tr><td><strong>Guided Autonomy</strong></td><td>Snabba team, tydliga principer, noll tech-sprawl.</td></tr>
    <tr><td><strong>Mätbart värde</strong></td><td>Från beslut till implementation med spårbar effekt på leveransen.</td></tr>
  </tbody>
</table>

</div>
