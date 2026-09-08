import { Link } from 'react-router-dom'
import { homeStats, rooms } from '../data/content'
import OrbitRings from '../components/OrbitRings'

export default function Home() {
  return (
    <div className="pb-12">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden">

        {/* Background grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#8892A6 1px, transparent 1px), linear-gradient(90deg, #8892A6 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal/5 blur-[120px]" />

        {/* =================================================
            MAIN HERO GRID
            ================================================= */}

        <div className="relative grid lg:grid-cols-[1.05fr,0.95fr] gap-10 lg:gap-16 items-start pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16">

          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <div className="relative z-10">

            {/* System status */}
            <div className="flex flex-wrap items-center gap-3 mb-8">

              <span className="flex items-center gap-2 text-[9px] text-teal uppercase tracking-[0.2em]">

                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-teal opacity-50 animate-ping" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(79,184,176,0.8)]" />
                </span>

                Quantum systems / active

              </span>

              <span className="w-8 h-px bg-rule" />

              <span className="text-[9px] text-muted uppercase tracking-[0.18em]">
                Taara Toori / 2026
              </span>

            </div>


            {/* Main heading */}
            <h1 className="font-display text-[3.5rem] sm:text-6xl lg:text-[5.8rem] xl:text-[6.5rem] font-medium leading-[0.91] tracking-[-0.035em] max-w-4xl">

              The Future is

              <span className="block">
                Quantum.
              </span>

              <span className="block mt-1">
                We Compute it.
              </span>

            </h1>


            {/* Current cycle */}
            <div className="flex items-center gap-4 mt-8 mb-7">

              <span className="w-14 h-px bg-gold" />

              <span className="text-[9px] text-muted uppercase tracking-[0.2em]">
                Current cycle
              </span>

            </div>


            {/* Description */}
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Taara Toori Technologies fuses quantum computation with the
              ordering logic of Vedic mathematics — old pattern recognition,
              new hardware. We build cognition systems, quantum-adjacent
              consulting, and AI/ML products for clients who think in cycles,
              not just deadlines.
            </p>


            {/* =================================================
                ACTION BUTTONS
                ================================================= */}

            <div className="flex flex-wrap items-center gap-4 mt-9">

              <Link
                to="/products"
                className="group relative inline-flex items-center gap-5 overflow-hidden px-6 py-3.5 bg-gold text-ink text-sm font-medium transition-all duration-300 hover:bg-gold/90 hover:-translate-y-1"
              >

                <span className="relative z-10">
                  View products
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              </Link>


              <Link
                to="/employees"
                className="group inline-flex items-center gap-3 px-4 py-3 text-sm text-paper hover:text-teal transition-colors duration-300"
              >

                <span className="border-b border-teal">
                  Meet the team
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

            </div>


            {/* =================================================
                SYSTEM META
                ================================================= */}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10 pt-5 border-t border-rule max-w-xl">

              <span className="text-[9px] text-muted uppercase tracking-[0.17em]">
                System status
              </span>

              <span className="flex items-center gap-2 text-[9px] text-teal uppercase tracking-[0.15em]">

                <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(79,184,176,0.8)]" />

                Operational

              </span>

              <span className="text-rule">
                /
              </span>

              <span className="text-[9px] text-muted uppercase tracking-[0.15em]">
                Cycle 01
              </span>

            </div>

          </div>


          {/* =================================================
              RIGHT ORBITAL SYSTEM
              ================================================= */}

          <div className="relative flex items-start justify-center lg:justify-end pt-0">

            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]">

              {/* Orbit */}
              <OrbitRings className="absolute inset-0 w-full h-full" />


              {/* Center core */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-rule bg-ink/80 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.3)]">

                  <span className="text-[8px] text-muted uppercase tracking-[0.2em] mb-2">
                    Core
                  </span>

                  <span className="font-display text-3xl text-paper">
                    ∞
                  </span>

                  <span className="text-[7px] text-teal uppercase tracking-[0.15em] mt-2">
                    Computing
                  </span>

                </div>

              </div>


              {/* Quantum label */}
              <div className="absolute top-2 right-0 sm:right-3 px-3 py-2 border border-rule bg-ink/80 backdrop-blur-md">

                <p className="text-[7px] text-muted uppercase tracking-[0.15em]">
                  Quantum
                </p>

                <p className="text-[10px] text-paper mt-1">
                  Processing
                </p>

              </div>


              {/* Pattern label */}
              <div className="absolute bottom-5 left-0 sm:left-2 px-3 py-2 border border-rule bg-ink/80 backdrop-blur-md">

                <p className="text-[7px] text-muted uppercase tracking-[0.15em]">
                  Pattern
                </p>

                <p className="text-[10px] text-paper mt-1">
                  Recognition
                </p>

              </div>


              {/* Vertical system marker */}
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2">

                <span className="w-px h-16 bg-gradient-to-b from-transparent via-teal/50 to-transparent" />

                <span className="text-[7px] text-muted uppercase tracking-[0.2em] [writing-mode:vertical-rl]">
                  SYSTEM / 01
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="border-t border-rule py-8">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          {homeStats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-rule bg-[#0c1422]/60 backdrop-blur-md px-6 py-5 transition-all duration-300 hover:border-teal/30 hover:bg-[#101a2a]"
            >

              <div className="flex items-center justify-between mb-5">

                <span className="text-[8px] text-muted uppercase tracking-[0.18em]">
                  Metric
                </span>

                <span className="text-[8px] text-gold tnum">
                  {String(index + 1).padStart(2, '0')}
                </span>

              </div>


              <p className="font-display text-4xl sm:text-5xl text-paper tnum leading-none">
                {stat.value}
              </p>

              <p className="text-xs text-muted mt-2">
                {stat.label}
              </p>


              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-teal group-hover:w-12 transition-all duration-500" />

            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          OBSERVATORY ROOMS
      ===================================================== */}

      <section className="border-t border-rule pt-16 sm:pt-20 mt-8">

        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">

          <div>

            <div className="flex items-center gap-3 mb-3">

              <span className="w-8 h-px bg-gold" />

              <p className="text-[10px] text-gold uppercase tracking-[0.18em]">
                Navigation
              </p>

            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight">
              Four rooms in the observatory.
            </h2>

          </div>


          <span className="text-[9px] text-muted uppercase tracking-[0.18em]">
            Explore / 01—04
          </span>

        </div>


        {/* Room cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {rooms.map((room) => (
            <Link
              key={room.path}
              to={room.path}
              className="group relative overflow-hidden rounded-2xl border border-rule bg-[#0c1422]/65 backdrop-blur-md p-7 sm:p-8 min-h-[220px] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/35 hover:bg-[#101a2a]"
            >

              {/* Card grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500"
                style={{
                  backgroundImage:
                    'linear-gradient(#8892A6 1px, transparent 1px), linear-gradient(90deg, #8892A6 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />


              {/* Card glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 w-32 h-32 rounded-full bg-teal/5 blur-[50px] group-hover:bg-teal/10 transition-all duration-500" />


              <div className="relative flex flex-col h-full">

                {/* Top row */}
                <div className="flex items-center justify-between mb-8">

                  <span className="font-display text-3xl text-gold tnum">
                    {room.panel}
                  </span>

                  <span className="text-[9px] text-muted uppercase tracking-[0.15em] group-hover:text-teal transition-colors duration-300">
                    Open →
                  </span>

                </div>


                {/* Room name */}
                <h3 className="font-display text-2xl sm:text-3xl leading-tight mb-3 group-hover:text-teal transition-colors duration-300">
                  {room.name}
                </h3>


                {/* Room description */}
                <p className="text-muted text-sm leading-relaxed max-w-sm">
                  {room.blurb}
                </p>


                {/* Bottom indicator */}
                <div className="mt-auto pt-6 flex items-center gap-2">

                  <span className="w-1.5 h-1.5 rounded-full bg-teal opacity-50 group-hover:opacity-100 transition-opacity" />

                  <span className="text-[8px] text-muted uppercase tracking-[0.16em]">
                    Observatory room
                  </span>

                </div>

              </div>


              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-teal group-hover:w-20 transition-all duration-500" />

            </Link>
          ))}

        </div>

      </section>

    </div>
  )
}