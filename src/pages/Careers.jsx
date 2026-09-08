import { useState } from 'react'

const careers = [
  {
    number: '01',
    category: 'ENGINEERING',
    title: 'Software Engineering',
    description:
      'Build reliable interfaces, platforms, and computational systems that turn complex ideas into useful products.',
    type: 'FULL-TIME',
    mode: 'HYBRID',
  },
  {
    number: '02',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'AI / ML Engineering',
    description:
      'Design intelligent systems, machine learning pipelines, and applied AI solutions for real-world problems.',
    type: 'FULL-TIME',
    mode: 'HYBRID',
  },
  {
    number: '03',
    category: 'QUANTUM',
    title: 'Quantum Computing',
    description:
      'Explore quantum algorithms, optimization techniques, simulation, and practical applications of emerging computation.',
    type: 'RESEARCH',
    mode: 'HYBRID',
  },
  {
    number: '04',
    category: 'RESEARCH',
    title: 'Applied Research',
    description:
      'Investigate new approaches across quantum computing, AI, mathematics, and computational intelligence.',
    type: 'RESEARCH',
    mode: 'FLEXIBLE',
  },
  {
    number: '05',
    category: 'PRODUCT',
    title: 'Product & Design',
    description:
      'Shape how complex technology becomes simple, useful, and intuitive for the people who use it.',
    type: 'FULL-TIME',
    mode: 'HYBRID',
  },
  {
    number: '06',
    category: 'OPERATIONS',
    title: 'Operations & Strategy',
    description:
      'Help coordinate people, projects, partnerships, and the systems that keep the organization moving.',
    type: 'FULL-TIME',
    mode: 'HYBRID',
  },
]

function CareerCard({ career }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-rule bg-[#0c1422]/75 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-[#101a2a] hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
      <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal/30 bg-teal/5">
            <span className="font-display text-xs text-teal tnum">
              {career.number}
            </span>
          </div>

          <span className="rounded-full border border-rule px-3 py-1.5 text-[10px] tracking-[0.18em] text-muted">
            {career.type}
          </span>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] text-teal">
              {career.category}
            </span>
          </div>

          <h3 className="font-display text-2xl leading-tight transition-colors duration-300 group-hover:text-teal sm:text-3xl">
            {career.title}
          </h3>

          <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
            {career.description}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-rule pt-5">
          <span className="text-[10px] tracking-[0.18em] text-muted">
            {career.mode}
          </span>

          <span className="flex items-center gap-2 text-sm text-paper transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
            Explore role
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </article>
  )
}

export default function Careers() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-rule bg-[#0c1422]/65 px-6 py-12 backdrop-blur-md sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(79,184,176,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,184,176,0.06) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
        </div>

        <div className="relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_14px_rgba(79,184,176,0.8)]" />
              <span className="text-xs tracking-[0.22em] text-teal">
                CAREERS / JOIN THE SYSTEM
              </span>
            </div>

            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[0.98] sm:text-6xl lg:text-7xl">
              Build what
              <br />
              comes next.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              We are building at the intersection of quantum computation,
              artificial intelligence, mathematics, and human-centered
              technology. Join a team that is interested in difficult
              problems and practical outcomes.
            </p>
          </div>

          <div className="lg:justify-self-end lg:max-w-xs">
            <div className="border-l border-teal/40 pl-5">
              <p className="text-[10px] tracking-[0.2em] text-muted">
                TAARA TOORI / PEOPLE
              </p>
              <p className="mt-4 font-display text-xl leading-relaxed text-paper">
                Curious minds.
                <br />
                Serious problems.
                <br />
                Better systems.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-5 text-[10px] tracking-[0.18em] text-muted">
          <span>RESEARCH</span>
          <span>ENGINEERING</span>
          <span>AI / ML</span>
          <span>QUANTUM</span>
          <span>PRODUCT</span>
          <span>OPERATIONS</span>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="mt-20 sm:mt-28">
        <div className="mb-10 flex flex-col gap-5 border-b border-rule pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] text-teal">
              01 / OPEN POSITIONS
            </p>

            <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Find your place
              <br />
              in the system.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-muted">
            Explore the disciplines behind our work. Roles can evolve as the
            problems we solve evolve.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {careers.map((career) => (
            <CareerCard key={career.number} career={career} />
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section className="mt-20 rounded-3xl border border-rule bg-[#0c1422]/55 p-7 backdrop-blur-md sm:mt-28 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-teal">
              02 / HOW WE WORK
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Curiosity is part
              <br />
              of the job.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-rule bg-ink/50 p-6">
              <span className="font-display text-xl text-gold">01</span>
              <h3 className="mt-5 font-display text-xl">Think deeply</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                We make room for research, experimentation, and understanding
                the problem before building the solution.
              </p>
            </div>

            <div className="rounded-2xl border border-rule bg-ink/50 p-6">
              <span className="font-display text-xl text-gold">02</span>
              <h3 className="mt-5 font-display text-xl">Build practically</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Good ideas become valuable when they can work reliably outside
                the laboratory.
              </p>
            </div>

            <div className="rounded-2xl border border-rule bg-ink/50 p-6">
              <span className="font-display text-xl text-gold">03</span>
              <h3 className="mt-5 font-display text-xl">Learn constantly</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Our disciplines change quickly. We expect people to keep
                learning and questioning assumptions.
              </p>
            </div>

            <div className="rounded-2xl border border-rule bg-ink/50 p-6">
              <span className="font-display text-xl text-gold">04</span>
              <h3 className="mt-5 font-display text-xl">Work together</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Research, engineering, design, and operations work better when
                they share context rather than working in isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-20 scroll-mt-24 sm:mt-28">
        <div className="mb-10 border-b border-rule pb-8">
          <p className="text-xs tracking-[0.2em] text-teal">
            03 / CONTACT
          </p>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr,0.7fr] lg:items-end">
            <div>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Start a
                <br />
                conversation.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-muted">
              Interested in joining Taara Toori, collaborating on research, or
              simply want to know more? Send us a message and our team will get
              back to you.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.75fr,1.25fr]">
          {/* CONTACT INFO */}
          <div className="rounded-2xl border border-rule bg-[#0c1422]/65 p-7 backdrop-blur-md sm:p-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
              <span className="text-xs tracking-[0.18em] text-teal">
                SYSTEM ONLINE
              </span>
            </div>

            <div className="mt-10 space-y-8">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-muted">
                  EMAIL
                </p>
                <p className="mt-2 text-sm text-paper">
                  hello@taaratoori.example
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.18em] text-muted">
                  LOCATION
                </p>
                <p className="mt-2 text-sm text-paper">
                  Kolkata · West Bengal · IN
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.18em] text-muted">
                  RESPONSE
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  We typically respond within a few working days.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-rule pt-5">
              <p className="font-display text-lg text-paper">
                Complex problems
                <br />
                inspire better science.
              </p>
              <p className="mt-3 text-xs text-muted">— TAARA TOORI</p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-rule bg-[#0c1422]/65 p-7 backdrop-blur-md sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[10px] tracking-[0.18em] text-muted">
                  NAME
                </span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-rule bg-ink/70 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-muted/60 focus:border-teal/60"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[10px] tracking-[0.18em] text-muted">
                  EMAIL
                </span>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-rule bg-ink/70 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-muted/60 focus:border-teal/60"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-[10px] tracking-[0.18em] text-muted">
                SUBJECT
              </span>
              <input
                type="text"
                required
                placeholder="What would you like to discuss?"
                className="w-full rounded-xl border border-rule bg-ink/70 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-muted/60 focus:border-teal/60"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-[10px] tracking-[0.18em] text-muted">
                MESSAGE
              </span>
              <textarea
                required
                rows="6"
                placeholder="Tell us a little about your idea, role, or project..."
                className="w-full resize-none rounded-xl border border-rule bg-ink/70 px-4 py-3 text-sm leading-6 text-paper outline-none transition-colors placeholder:text-muted/60 focus:border-teal/60"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {submitted ? (
                <p className="text-sm text-teal">
                  Message prepared successfully.
                </p>
              ) : (
                <p className="text-xs text-muted">
                  TAARA TOORI / CONTACT CHANNEL
                </p>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-gold/90 hover:gap-4"
              >
                Send message
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}