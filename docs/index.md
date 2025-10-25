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
  letter-spacing: -0.01em;
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

.card h3 {
  margin: 10px 0 6px;
  font-size: 1.1rem;
  color: var(--text);
}

.card p {
  margin: 0 0 8px;
  color: var(--muted);
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: white;
  letter-spacing: .02em;
  margin-bottom: 6px;
}

.i-blue { background: linear-gradient(135deg, var(--blue), #3b82f6); }
.i-violet { background: linear-gradient(135deg, var(--violet), #8b5cf6); }
.i-green { background: linear-gradient(135deg, var(--green), #10b981); }
.i-orange { background: linear-gradient(135deg, var(--orange), #f97316); }
.i-indigo { background: linear-gradient(135deg, var(--indigo), #6366f1); }
.i-rose { background: linear-gradient(135deg, var(--rose), #ec4899); }

.kicker {
  display: block;
  color: var(--muted);
  font-size: .9rem;
  margin-top: 2px;
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
      <span class="icon i-blue">CIO</span>
      <h3>Technology Strategy & CIO Advisory</h3>
      <span class="kicker">Clear direction and alignment</span>
      <p>Shape long-term strategies, roadmaps, and operating principles that connect technology investments to business outcomes.</p>
      <p class="meta">Tech vision • Investment roadmaps • Organizational design • Transformation support</p>
    </div>

    <div class="card">
      <span class="icon i-violet">CTO</span>
      <h3>Engineering & CTO Leadership</h3>
      <span class="kicker">From strategy to scalable delivery</span>
      <p>Enable engineering organizations to deliver value at scale — through structure, culture, and pragmatic leadership.</p>
      <p class="meta">Engineering leadership • Delivery models • Capability development • Technical direction</p>
    </div>

    <div class="card">
      <span class="icon i-green">ARCH</span>
      <h3>Architecture & Systems Design</h3>
      <span class="kicker">Structures that evolve with intent</span>
      <p>Design architectures that bridge business goals and technology evolution — balancing flexibility with clarity.</p>
      <p class="meta">Domain modeling • Integration strategy • Target architecture • Architecture-as-Code</p>
    </div>

    <div class="card">
      <span class="icon i-orange">OPS</span>
      <h3>Operating Models & Governance</h3>
      <span class="kicker">How people, process, and tech connect</span>
      <p>Define operating principles that scale — from decision flow and ownership to metrics and cross-domain collaboration.</p>
      <p class="meta">Governance design • Ownership models • Decision structures • Scaling frameworks</p>
    </div>

    <div class="card">
      <span class="icon i-indigo">ADV</span>
      <h3>Advisory & Enablement</h3>
      <span class="kicker">Building internal capability</span>
      <p>Support teams and leaders with tailored coaching, facilitation, and actionable insight that accelerates maturity.</p>
      <p class="meta">Coaching • Strategy facilitation • Architecture reviews • Capability assessments</p>
    </div>

    <div class="card">
      <span class="icon i-rose">INT</span>
      <h3>Leadership in Action</h3>
      <span class="kicker">Fractional & interim roles</span>
      <p>Hands-on leadership when it matters most — stepping in as interim CIO, CTO, or Engineering Manager to stabilize, scale, or transform organizations.</p>
      <p class="meta">Interim CIO/CTO • Engineering management • Transformation leadership • Hands-on delivery</p>
    </div>
  </div>

  <p class="sub" style="margin-top:48px;">Let’s connect the pieces — and turn your technology organization into a system that scales.</p>
</div>