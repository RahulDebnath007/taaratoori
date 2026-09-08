import PanelRail from '../components/PanelRail'
import { samples } from '../data/content'

export default function Samples() {
  return (
    <div className="pb-24">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <PanelRail
        panel="04"
        kicker="Field notes"
        title="Selected cycles from recent work."
      />

      {/* Intro */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-8 mb-14">

        <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
          Placeholder case studies. Visuals are generative placeholders
          standing in for real client screenshots.
        </p>

        <span className="text-[9px] text-muted uppercase tracking-[0.18em] whitespace-nowrap">
          Selected work / 04
        </span>

      </div>


      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {samples.map((s, index) => (
          <article
            key={s.name}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-rule
              bg-[#0c1422]/70
              backdrop-blur-md
              p-6
              sm:p-8
              min-h-[430px]
              flex
              flex-col
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-teal/40
              hover:bg-[#101a2a]
              shadow-[0_12px_45px_rgba(0,0,0,0.16)]
            "
          >

            {/* =================================================
                BACKGROUND GRID
                ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.025]
                group-hover:opacity-[0.06]
                transition-opacity
                duration-500
              "
              style={{
                backgroundImage:
                  'linear-gradient(#8892A6 1px, transparent 1px), linear-gradient(90deg, #8892A6 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />


            {/* =================================================
                AMBIENT GLOW
                ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                w-48
                h-48
                rounded-full
                bg-teal/5
                blur-[70px]
                group-hover:bg-teal/10
                transition-all
                duration-700
              "
            />


            {/* =================================================
                TOP META
                ================================================= */}

            <div className="relative flex items-start justify-between gap-6">

              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    rounded-full
                    border
                    border-rule
                    text-[10px]
                    text-gold
                    tnum
                    transition-all
                    duration-300
                    group-hover:border-gold/50
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="w-8 h-px bg-rule" />

                <span
                  className="
                    text-[9px]
                    text-teal
                    uppercase
                    tracking-[0.17em]
                  "
                >
                  {s.tag}
                </span>

              </div>


              {/* Status indicator */}
              <div className="flex items-center gap-2 shrink-0">

                <span
                  className="
                    relative
                    flex
                    w-1.5
                    h-1.5
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-teal
                      opacity-40
                      group-hover:animate-ping
                    "
                  />

                  <span
                    className="
                      relative
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-teal
                    "
                  />
                </span>

                <span className="text-[8px] text-muted uppercase tracking-[0.15em]">
                  Case study
                </span>

              </div>

            </div>


            {/* =================================================
                VISUAL PLACEHOLDER
                ================================================= */}

            <div
              className="
                relative
                h-32
                sm:h-36
                mt-8
                mb-8
                overflow-hidden
                rounded-xl
                border
                border-rule
                bg-[#09111e]
              "
            >

              {/* Grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'linear-gradient(#8892A6 1px, transparent 1px), linear-gradient(90deg, #8892A6 1px, transparent 1px)',
                  backgroundSize: '22px 22px',
                }}
              />

              {/* Orbital rings */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <div
                  className="
                    w-28
                    h-28
                    rounded-full
                    border
                    border-rule
                    relative
                  "
                >

                  <div
                    className="
                      absolute
                      inset-4
                      rounded-full
                      border
                      border-rule
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-9
                      rounded-full
                      border
                      border-teal/30
                    "
                  />

                  <span
                    className="
                      absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-2
                      h-2
                      rounded-full
                      bg-gold
                      shadow-[0_0_12px_rgba(201,154,68,0.7)]
                    "
                  />

                </div>

              </div>


              {/* Decorative data points */}
              <span className="absolute top-5 left-[22%] w-1 h-1 rounded-full bg-teal" />
              <span className="absolute bottom-6 right-[20%] w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="absolute top-[35%] right-[30%] w-1 h-1 rounded-full bg-muted" />


              {/* Visual label */}
              <div className="absolute left-4 bottom-4">

                <span className="text-[7px] text-muted uppercase tracking-[0.2em]">
                  Project / {String(index + 1).padStart(2, '0')}
                </span>

              </div>

            </div>


            {/* =================================================
                CONTENT
                ================================================= */}

            <div className="relative">

              <h3
                className="
                  font-display
                  text-2xl
                  sm:text-3xl
                  leading-tight
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-teal
                "
              >
                {s.name}
              </h3>


              <p className="text-muted text-sm leading-relaxed max-w-xl">
                {s.description}
              </p>

            </div>


            {/* =================================================
                METRIC
                ================================================= */}

            <div
              className="
                relative
                mt-auto
                pt-7
                mt-8
                border-t
                border-rule
                flex
                items-end
                justify-between
                gap-5
              "
            >

              <div>

                <p className="text-[8px] text-muted uppercase tracking-[0.17em] mb-2">
                  Impact
                </p>

                <p
                  className="
                    font-display
                    text-3xl
                    sm:text-4xl
                    text-gold
                    tnum
                    leading-none
                  "
                >
                  {s.metricValue}
                </p>

                <p className="text-xs text-muted mt-2">
                  {s.metricLabel}
                </p>

              </div>


              {/* Duration */}
              <div className="text-right">

                <p className="text-[8px] text-muted uppercase tracking-[0.17em] mb-2">
                  Cycle
                </p>

                <p className="text-sm text-paper tnum whitespace-nowrap">
                  {s.duration}
                </p>

              </div>

            </div>


            {/* =================================================
                BOTTOM HOVER ACCENT
                ================================================= */}

            <div
              className="
                absolute
                bottom-0
                left-0
                h-px
                w-0
                bg-teal
                group-hover:w-24
                transition-all
                duration-500
              "
            />

          </article>
        ))}

      </section>


      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}

      <div className="mt-10 pt-6 border-t border-rule flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

        <p className="text-[9px] text-muted uppercase tracking-[0.17em]">
          Taara Toori / Selected cycles
        </p>

        <p className="text-[9px] text-muted uppercase tracking-[0.17em]">
          Research · Systems · Intelligence
        </p>

      </div>

    </div>
  )
}