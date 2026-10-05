import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const domains = [
  { name: 'Quantum Computing', code: 'QC', skills: 'Algorithms · Simulation · Circuits', text: 'Develop and explore quantum algorithms, simulations, and practical computing workflows.' },
  { name: 'Quantum AI', code: 'AI', skills: 'QML · Hybrid AI · Optimization', text: 'Bridge quantum methods with machine learning, optimization, and intelligent systems.' },
  { name: 'Quantum Security', code: 'QS', skills: 'Cryptography · QKD · PQC', text: 'Work across quantum-safe security, cryptography, and future-ready communication.' },
  { name: 'Quantum Communication', code: 'QN', skills: 'Networks · Entanglement · Protocols', text: 'Explore the technologies and protocols that connect quantum systems.' },
  { name: 'Quantum Optimization', code: 'QO', skills: 'QAOA · Scheduling · Logistics', text: 'Apply quantum and quantum-inspired approaches to complex decision problems.' },
  { name: 'Quantum Hardware', code: 'QH', skills: 'Systems · Control · Devices', text: 'Build the engineering layer behind scalable quantum technologies.' },
]

const talent = [
  ['01', 'Researchers', 'Explore new algorithms, architectures, experiments, and discoveries.'],
  ['02', 'Quantum Developers', 'Build software, simulations, applications, and hybrid workflows.'],
  ['03', 'Quantum Engineers', 'Work across hardware, control systems, infrastructure, and devices.'],
  ['04', 'Quantum AI Specialists', 'Connect quantum computing with machine learning and optimization.'],
  ['05', 'Students & Emerging Talent', 'Develop practical skills through projects, research, and mentorship.'],
  ['06', 'Industry Professionals', 'Translate quantum capabilities into practical business applications.'],
]

export default function QuantumWorkforce() {
  const [query, setQuery] = useState('')
  const filteredDomains = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return domains
    return domains.filter((d) => `${d.name} ${d.skills} ${d.text}`.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="pb-16">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-rule pb-14 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#8892A6 1px, transparent 1px), linear-gradient(90deg, #8892A6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-teal/5 blur-[110px]" />

        <div className="relative grid items-center gap-12 pt-6 sm:pt-10 lg:grid-cols-[1.05fr,0.95fr] lg:gap-16">
          <div>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-teal">
                <span className="relative flex h-1.5 w-1.5"><span className="absolute inset-0 animate-ping rounded-full bg-teal opacity-50" /><span className="relative h-1.5 w-1.5 rounded-full bg-teal" /></span>
                Quantum Workforce / Active
              </span>
              <span className="h-px w-8 bg-rule" />
              <span className="text-[9px] uppercase tracking-[0.18em] text-muted">Taara Toori / 2026</span>
            </div>

            <h1 className="max-w-4xl font-display text-[3.3rem] font-medium leading-[0.92] tracking-[-0.035em] sm:text-6xl lg:text-[5.7rem]">
              The People Behind
              <span className="block">The Quantum Future.</span>
            </h1>

            <div className="mb-7 mt-8 flex items-center gap-4">
              <span className="h-px w-14 bg-gold" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-muted">Talent · Research · Industry</span>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A workforce ecosystem connecting researchers, engineers, developers, students, and industry professionals around the technologies shaping the quantum era.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#explore" className="group inline-flex items-center gap-5 bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-gold/90">
                Explore expertise <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <Link to="/careers" className="group inline-flex items-center gap-3 px-4 py-3 text-sm text-paper hover:text-teal">
                <span className="border-b border-teal">Explore careers</span><span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto h-[330px] w-[330px] sm:h-[420px] sm:w-[420px]">
            <div className="absolute inset-[7%] rounded-full border border-rule" />
            <div className="absolute inset-[18%] rounded-full border border-rule" />
            <div className="absolute inset-[32%] rounded-full border border-teal/25" />
            <div className="absolute inset-[12%] rotate-45 rounded-full border border-gold/20" />
            <div className="absolute inset-[12%] -rotate-45 rounded-full border border-teal/15" />
            <div className="absolute left-1/2 top-[7%] h-[86%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rule to-transparent" />
            <div className="absolute left-[7%] top-1/2 h-px w-[86%] -translate-y-1/2 bg-gradient-to-r from-transparent via-rule to-transparent" />
            {[['top-4 left-1/2 -translate-x-1/2', 'RESEARCH'], ['right-1 top-1/2 -translate-y-1/2', 'INDUSTRY'], ['bottom-6 left-1/2 -translate-x-1/2', 'DEVELOPMENT'], ['left-0 top-1/2 -translate-y-1/2', 'ENGINEERING']].map(([pos, label]) => (
              <div key={label} className={`absolute ${pos} border border-rule bg-ink/85 px-3 py-2 backdrop-blur-md`}>
                <span className="text-[7px] uppercase tracking-[0.16em] text-muted">{label}</span>
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-rule bg-ink/90 shadow-[0_0_60px_rgba(0,0,0,0.35)] sm:h-32 sm:w-32">
                <span className="mb-2 text-[8px] uppercase tracking-[0.2em] text-muted">Core</span>
                <span className="font-display text-3xl text-paper">∞</span>
                <span className="mt-2 text-[7px] uppercase tracking-[0.15em] text-teal">Talent Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-rule py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3"><span className="h-px w-8 bg-gold" /><span className="text-[10px] uppercase tracking-[0.18em] text-gold">01 / Overview</span></div>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Quantum technology needs quantum talent.</h2>
          </div>
          <div className="max-w-2xl space-y-5 text-sm leading-relaxed text-muted sm:text-base">
            <p>The quantum ecosystem spans disciplines. Computing, physics, mathematics, engineering, artificial intelligence, cybersecurity, and research increasingly overlap.</p>
            <p>Taara Toori’s Quantum Workforce is designed as a bridge between expertise and opportunity — helping people discover where their skills fit and helping organizations find the capabilities they need.</p>
          </div>
        </div>
      </section>

      {/* TALENT */}
      <section className="border-b border-rule py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><div className="flex items-center gap-3"><span className="h-px w-8 bg-gold" /><span className="text-[10px] uppercase tracking-[0.18em] text-gold">02 / Talent Ecosystem</span></div><h2 className="mt-4 font-display text-3xl sm:text-4xl">Different disciplines. One ecosystem.</h2></div>
          <span className="text-[9px] uppercase tracking-[0.18em] text-muted">Explore / 01—06</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {talent.map(([num, title, text]) => (
            <div key={title} className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-rule bg-[#0c1422]/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/35 hover:bg-[#101a2a]">
              <div className="mb-8 flex items-center justify-between"><span className="font-display text-3xl text-gold">{num}</span><span className="text-[8px] uppercase tracking-[0.16em] text-muted group-hover:text-teal">Workforce</span></div>
              <h3 className="font-display text-2xl leading-tight group-hover:text-teal">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-teal transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="explore" className="border-b border-rule py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr,1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-3"><span className="h-px w-8 bg-gold" /><span className="text-[10px] uppercase tracking-[0.18em] text-gold">03 / Expertise</span></div>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Explore the quantum domains.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">Search across the skills and disciplines that form the modern quantum workforce.</p>
            <div className="mt-7 border border-rule bg-panel/30 p-3">
              <label className="sr-only" htmlFor="domain-search">Search expertise</label>
              <input id="domain-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search expertise..." className="w-full bg-transparent px-2 py-2 text-sm text-paper outline-none placeholder:text-muted" />
            </div>
          </div>
          <div className="space-y-3">
            {filteredDomains.map((domain, index) => (
              <div key={domain.name} className="group grid gap-5 border border-rule bg-[#0c1422]/50 p-5 transition-colors hover:border-teal/30 sm:grid-cols-[72px,1fr,auto] sm:items-center">
                <span className="font-display text-2xl text-gold">{domain.code}</span>
                <div><h3 className="font-display text-xl group-hover:text-teal">{domain.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.08em] text-muted">{domain.skills}</p><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{domain.text}</p></div>
                <span className="text-[9px] uppercase tracking-[0.16em] text-muted">{String(index + 1).padStart(2, '0')} / 06</span>
              </div>
            ))}
            {!filteredDomains.length && <div className="border border-rule p-8 text-sm text-muted">No matching domain found. Try “AI”, “security”, “hardware”, or “optimization”.</div>}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-b border-rule py-16 sm:py-20">
        <div className="mb-10"><div className="flex items-center gap-3"><span className="h-px w-8 bg-gold" /><span className="text-[10px] uppercase tracking-[0.18em] text-gold">04 / Workforce Journey</span></div><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">From curiosity to contribution.</h2></div>
        <div className="grid gap-3 md:grid-cols-5">
          {['Discover', 'Connect', 'Collaborate', 'Build', 'Advance'].map((step, i) => (
            <div key={step} className="relative border border-rule bg-[#0c1422]/55 p-5">
              <span className="text-[9px] uppercase tracking-[0.18em] text-gold">0{i + 1}</span>
              <h3 className="mt-10 font-display text-2xl">{step}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{['Explore disciplines and opportunities.', 'Find people with complementary expertise.', 'Work together across research and industry.', 'Turn knowledge into projects and solutions.', 'Grow with the evolving quantum ecosystem.'][i]}</p>
              {i < 4 && <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-teal/50 md:block">→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* TWO AUDIENCES */}
      <section className="border-b border-rule py-16 sm:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="group border border-rule bg-panel/30 p-7 sm:p-9 hover:border-teal/30">
            <span className="text-[9px] uppercase tracking-[0.18em] text-gold">For Talent</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Your expertise has a place in the quantum future.</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">Discover domains, connect with the ecosystem, showcase your capabilities, and find meaningful opportunities to contribute.</p>
            <Link to="/careers" className="mt-7 inline-flex items-center gap-3 text-sm text-paper hover:text-teal">Explore opportunities <span>→</span></Link>
          </div>
          <div className="group border border-rule bg-panel/30 p-7 sm:p-9 hover:border-teal/30">
            <span className="text-[9px] uppercase tracking-[0.18em] text-gold">For Organizations</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Build the team behind your quantum ambition.</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">Find specialized expertise, research collaborators, technical capabilities, and emerging talent for quantum initiatives.</p>
            <a href="mailto:hello@taaratoori.example" className="mt-7 inline-flex items-center gap-3 text-sm text-paper hover:text-teal">Start a conversation <span>→</span></a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#8892A6 1px, transparent 1px), linear-gradient(90deg, #8892A6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-4xl">
          <span className="text-[9px] uppercase tracking-[0.2em] text-teal">05 / Join the ecosystem</span>
          <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.03em] sm:text-7xl">The future won't build itself.</h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">Connect with the people building what comes next.</p>
          <Link to="/careers" className="group mt-8 inline-flex items-center gap-5 bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-all hover:-translate-y-1 hover:bg-gold/90">Join the Quantum Workforce <span className="transition-transform group-hover:translate-x-1">→</span></Link>
        </div>
      </section>
    </div>
  )
}
