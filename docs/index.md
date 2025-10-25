<style>
:root {
  --text:#0f172a;
  --muted:#64748b;
  --border:#e5e7eb;
  --card:#ffffff;
  --shadow:0 8px 24px rgba(2,6,23,.06);
  --radius:16px;
  --blue:#60a5fa;
  --violet:#a78bfa;
  --green:#34d399;
  --orange:#fb923c;
  --indigo:#818cf8;
  --rose:#f472b6;
}

.wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 48px 14px 64px;
}

.hero {
  text-align: center;
  margin: 18px 0 60px;
}

.hero h1 {
  margin: 0 0 14px;
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.05;
  color: var(--text);
  font-weight: 900;
}

.hero p {
  margin: 0 auto 18px;
  max-width: 720px;
  color: var(--muted);
  font-size: 1.1rem;
}

.h2 {
  text-align: center;
  margin: 64px 0 16px;
  font-size: 1.8rem;
  color: var(--text);
  font-weight: 900;
}

.sub {
  text-align: center;
  color: var(--muted);
  margin: 0 auto 40px;
  max-width: 720px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 24px;
  transition: transform .15s ease, box-shadow .15s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(2,6,23,.09);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.icon svg {
  width: 22px;
  height: 22px;
}

.i-blue { background: linear-gradient(135deg, var(--blue), #3b82f6); }
.i-violet { background: linear-gradient(135deg, var(--violet), #8b5cf6); }
.i-green { background: linear-gradient(135deg, var(--green), #10b981); }
.i-orange { background: linear-gradient(135deg, var(--orange), #f97316); }
.i-indigo { background: linear-gradient(135deg, var(--indigo), #6366f1); }
.i-rose { background: linear-gradient(135deg, var(--rose), #ec4899); }

.card h3 {
  font-size: 1.1rem;
  color: var(--text);
  margin: 0;
}

.card p {
  margin: 0 0 8px;
  color: var(--muted);
}

.kicker {
  display: block;
  color: var(--muted);
  font-size: .9rem;
  margin-top: 4px;
}
</style>

<div class="wrap">

  <section class="hero">
    <h1>Technology Leadership That Fits Together</h1>
    <p>Modern technology organizations work best when every part — strategy, architecture, engineering, and leadership — reinforces the others.</p>
    <p style="color:var(--muted)">I help companies connect these pieces into one cohesive engine for growth: practical, outcome-driven, and built to evolve.</p>
  </section>

  <h2 class="h2">Connected Capabilities</h2>
  <p class="sub">Each capability stands strong on its own — but together they form a system that scales, adapts, and delivers.</p>

  <div class="grid">

    <div class="card">
      <div class="card-header">
        <span class="icon i-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/></svg>
        </span>
        <h3>Technology Strategy</h3>
      </div>
      <span class="kicker">Clear direction and alignment</span>
      <p>Shape long-term strategies, investment priorities, and operating principles that connect technology with business outcomes.</p>
      <p class="meta">Tech vision • Investment roadmaps • Org design • Transformation leadership</p>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="icon i-violet">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M12 8v4l3 3m-3-7a9 9 0 100 18 9 9 0 000-18z"/></svg>
        </span>
        <h3>Engineering Leadership</h3>
      </div>
      <span class="kicker">From strategy to scalable delivery</span>
      <p>Enable engineering organizations to deliver value at scale — through culture, structure, and technical direction.</p>
      <p class="meta">Delivery systems • Capability growth • Leadership coaching • Scaling frameworks</p>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="icon i-green">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M3 7h18M3 12h18M3 17h18"/></svg>
        </span>
        <h3>Architecture & Systems Design</h3>
      </div>
      <span class="kicker">Structures that evolve with intent</span>
      <p>Design architectures that bridge business goals and technology evolution — balancing flexibility with clarity.</p>
      <p class="meta">Domain modeling • Integration strategy • Target architecture • Architecture-as-Code</p>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="icon i-orange">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M12 6v6l4 2"/></svg>
        </span>
        <h3>Operating Models & Governance</h3>
      </div>
      <span class="kicker">The glue between people, process & tech</span>
      <p>Define scalable operating principles — ownership, decision flow, and collaboration for predictable outcomes.</p>
      <p class="meta">Governance design • Decision flow • Organizational patterns • Metrics & alignment</p>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="icon i-indigo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M8 9l3 3-3 3m5-6l3 3-3 3"/></svg>
        </span>
        <h3>Advisory & Enablement</h3>
      </div>
      <span class="kicker">Building internal capability</span>
      <p>Support teams and leaders with tailored coaching, facilitation, and actionable insight that accelerates maturity.</p>
      <p class="meta">Coaching • Facilitation • Architecture reviews • Capability assessments</p>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="icon i-rose">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M10 6H6v12h4l8-6-8-6z"/></svg>
        </span>
        <h3>Leadership in Action</h3>
      </div>
      <span class="kicker">Fractional & interim roles</span>
      <p>Hands-on leadership when it matters most — stepping in as interim CIO, CTO, or Engineering Manager to stabilize, scale, or transform.</p>
      <p class="meta">Interim CIO/CTO • Engineering mgmt • Transformation leadership • Hands-on delivery</p>
    </div>

  </div>

  <p class="sub" style="margin-top:48px;">Let’s connect the pieces — and turn your technology organization into a system that scales.</p>
</div>