<!-- TROi – Main Landing (lightweight, airy) -->

<style>
:root{
  --text:#0f172a;          /* slate-900 */
  --muted:#64748b;         /* slate-500 */
  --border:#e5e7eb;        /* gray-200 */
  --card:#ffffff;
  --shadow:0 8px 24px rgba(2,6,23,.06);
  --radius:16px;

  --blue:#60a5fa;
  --violet:#a78bfa;
  --green:#34d399;
  --orange:#fb923c;
  --indigo:#818cf8;
}

.wrap{max-width:1100px;margin:0 auto;padding:24px 14px 64px;}
.hero{ text-align:center; margin:18px 0 40px; }
.hero h1{
  margin: 0 0 10px;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.05;
  color: var(--text);
  font-weight: 900;
  letter-spacing: -0.01em;
}
.hero p{
  margin: 0 auto;
  max-width: 840px;
  color: var(--muted);
  font-size: 1.08rem;
}

.h2{
  text-align:center;
  margin: 24px 0 16px;
  font-size: 1.6rem;
  color: var(--text);
  font-weight: 900;
}
.sub{ text-align:center; color:var(--muted); margin:0 auto 18px; max-width: 760px; }

.grid{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 18px;
}

.card{
  grid-column: span 4;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 18px;
  transition: transform .15s ease, box-shadow .15s ease;
}
.card:hover{ transform: translateY(-2px); box-shadow: 0 10px 28px rgba(2,6,23,.09); }

@media (max-width: 900px){ .card{ grid-column: span 12; } }

.card h3{ margin: 8px 0 6px; font-size: 1.06rem; color: var(--text); }
.card p{ margin: 0 0 8px; color: var(--muted); }
.meta{ color: var(--muted); font-size: .95rem; }

.icon{
  width: 40px; height: 40px; border-radius: 12px;
  display:inline-flex; align-items:center; justify-content:center;
  font-weight:900; color:white; letter-spacing:.02em;
}
.i-blue{ background: linear-gradient(135deg, var(--blue), #3b82f6); }
.i-violet{ background: linear-gradient(135deg, var(--violet), #8b5cf6); }
.i-green{ background: linear-gradient(135deg, var(--green), #10b981); }
.i-orange{ background: linear-gradient(135deg, var(--orange), #f97316); }
.i-indigo{ background: linear-gradient(135deg, var(--indigo), #6366f1); }

.kicker{ display:block; color:var(--muted); font-size:.9rem; margin-top:2px; }
</style>

<div class="wrap">

  <section class="hero">
    <h1>Technology leadership<br/>that scales businesses</h1>
    <p>Helping Nordic enterprises build systematic technology organizations that create sustainable competitive advantage.</p>
  </section>

  <h2 class="h2">Five Pillars of Technology Excellence</h2>
  <p class="sub">Proven approaches that turn technology into a strategic business enabler — with clarity, speed, and measurable outcomes.</p>

  <div class="grid">

    <div class="card">
      <span class="icon i-blue">EO</span>
      <h3>Enterprise Operating Models</h3>
      <span class="kicker">Clear governance & scalable ways of working</span>
      <p>Build systematic organizations that scale efficiently and deliver value consistently.</p>
      <p class="meta">Governance frameworks • Decision structures • Cross-functional alignment • Scalable operations</p>
    </div>

    <div class="card">
      <span class="icon i-violet">SA</span>
      <h3>Solution Architecture</h3>
      <span class="kicker">Blueprints that solve real business problems</span>
      <p>Design and architect solutions with a practical, value-first approach.</p>
      <p class="meta">Technical design • System integration • Architecture blueprints • Implementation roadmaps</p>
    </div>

    <div class="card">
      <span class="icon i-green">EL</span>
      <h3>Engineering Leadership</h3>
      <span class="kicker">High-performing teams, consistent results</span>
      <p>Develop teams that deliver reliably through culture, coaching, and enabling systems.</p>
      <p class="meta">Team capability • Engineering culture • Performance systems • Leadership development</p>
    </div>

    <div class="card">
      <span class="icon i-orange">AaC</span>
      <h3>Architecture-as-Code</h3>
      <span class="kicker">Living, version-controlled architecture</span>
      <p>Turn principles, decisions, and direction into transparent, evolvable artefacts.</p>
      <p class="meta">ADRs • Tech Radar • Target Architecture • Docs-as-Code • Governance automation</p>
    </div>

    <div class="card">
      <span class="icon i-indigo">LS</span>
      <h3>Leadership Services</h3>
      <span class="kicker">Hands-on guidance, zero fluff</span>
      <p>Interim leadership, advisory, and coaching to accelerate outcomes and reduce risk.</p>
      <p class="meta">Fractional roles • Coaching • Strategy facilitation • Decision support</p>
    </div>

  </div>

</div>
