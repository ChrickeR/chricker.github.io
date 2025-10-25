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
}

.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 14px 64px;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.hero-text {
  flex: 1;
  min-width: 320px;
}

.hero-image {
  flex: 1;
  min-width: 320px;
  text-align: right;
}

.hero-image img {
  max-width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
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
  margin: 0 0 18px;
  max-width: 600px;
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

.kicker {
  display: block;
  color: var(--muted);
  font-size: .9rem;
  margin-top: 2px;
}
</style>

<div class="wrap">

  <section class="hero">
    <div class="hero-text">
      <h1>Technology Leadership<br>That Scales Businesses</h1>
      <p>I help Nordic enterprises design and operate technology organizations that drive measurable business impact — through structure, clarity, and speed.</p>
      <p style="color:var(--muted)">From strategy to execution, my framework turns architecture and leadership into a systematic growth engine — not a bottleneck.</p>
    </div>

    <div class="hero-image">
      <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Technology Leadership">
    </div>
  </section>

  <h2 class="h2">Five Pillars of Technology Excellence</h2>
  <p class="sub">A practical framework for transforming technology into a strategic business advantage — enabling faster decisions, stronger teams, and sustainable growth.</p>

  <div class="grid">
    <div class="card">
      <span class="icon i-blue">EO</span>
      <h3>Enterprise Operating Models</h3>
      <span class="kicker">Governance that scales</span>
      <p>Design organizations that scale efficiently, align business and tech, and deliver predictable outcomes.</p>
      <p class="meta">Operating models • Governance frameworks • Decision flow • Scalable execution</p>
    </div>

    <div class="card">
      <span class="icon i-violet">SA</span>
      <h3>Solution Architecture</h3>
      <span class="kicker">Blueprints that create value</span>
      <p>Architect with purpose — translating strategy into actionable, maintainable solutions that evolve with the business.</p>
      <p class="meta">Technical design • Integration patterns • Architecture blueprints • Implementation roadmaps</p>
    </div>

    <div class="card">
      <span class="icon i-green">EL</span>
      <h3>Engineering Leadership</h3>
      <span class="kicker">High-performing delivery cultures</span>
      <p>Develop teams and practices that sustain velocity, quality, and innovation — without burning out your people.</p>
      <p class="meta">Team enablement • Dev excellence • Culture systems • Leadership coaching</p>
    </div>

    <div class="card">
      <span class="icon i-orange">AaC</span>
      <h3>Architecture-as-Code</h3>
      <span class="kicker">Living documentation for real change</span>
      <p>Embed architecture into your engineering workflows — making decisions, principles, and direction transparent and versioned.</p>
      <p class="meta">ADRs • Tech Radar • Target Architecture • Docs-as-Code • Automated guardrails</p>
    </div>

    <div class="card">
      <span class="icon i-indigo">LS</span>
      <h3>Leadership Services</h3>
      <span class="kicker">Hands-on guidance. Zero fluff.</span>
      <p>Fractional CTO or advisory support to drive transformation, build alignment, and accelerate outcomes.</p>
      <p class="meta">Fractional leadership • Coaching • Strategy facilitation • Decision support</p>
    </div>
  </div>
</div>