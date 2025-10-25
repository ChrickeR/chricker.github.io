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
    <p>Modern technology organizations are built like systems — every part needs to fit, align, and reinforce the others.</p>
    <p style="color:var(--muted)">I help companies combine strategy, architecture, and engineering leadership into one cohesive engine for growth — hands-on and outcome-driven.</p>
  </section>

  <h2 class="h2">Connected Capabilities</h2>
  <p class="sub">Each capability stands strong on its own — but when connected, they amplify each other to create lasting impact.</p>

  <div class="grid">
    <div class="card">
      <span class="icon i-blue">CIO</span>
      <h3>Technology Strategy & CIO Advisory</h3>
      <span class="kicker">Direction that aligns business and tech</span>
      <p>Shape long-term technology strategies, investment roadmaps, and organizational design that drive measurable business outcomes.</p>
      <p class="meta">Tech vision • Operating model design • Investment prioritization • Transformation leadership</p>
    </div>

    <div class="card">
      <span class="icon i-violet">CTO</span>
      <h3>Engineering & CTO Leadership</h3>
      <span class="kicker">Hands-on leadership for delivery and growth</span>
      <p>Lead or support engineering organizations to improve delivery capability, technical excellence, and leadership maturity.</p>
      <p class="meta">Team design • Delivery frameworks • Coaching • Fractional or interim roles</p>
    </div>

    <div class="card">
      <span class="icon i-green">ARCH</span>
      <h3>Architecture & Systems Design</h3>
      <span class="kicker">Structure that enables evolution</span>
      <p>Build scalable architectures that connect business intent with technology execution — balancing structure and agility.</p>
      <p class="meta">Domain modeling • Integration strategy • Target architecture • Architecture-as-Code</p>
    </div>

    <div class="card">
      <span class="icon i-orange">OPS</span>
      <h3>Operating Models & Governance</h3>
      <span class="kicker">The glue between people, process, and tech</span>
      <p>Define clear ownership, decision flow, and cross-functional collaboration to enable scalable, predictable outcomes.</p>
      <p class="meta">Governance design • Decision flow • Organizational patterns • Scaling models</p>
    </div>

    <div class="card">
      <span class="icon i-indigo">ADV</span>
      <h3>Advisory & Enablement</h3>
      <span class="kicker">Support that builds internal strength</span>
      <p>Mentor teams, align leadership, and enable organizations to continuously evolve through practical, tailored support.</p>
      <p class="meta">Coaching • Strategy facilitation • Architecture reviews • Capability assessments</p>
    </div>
  </div>
</div>