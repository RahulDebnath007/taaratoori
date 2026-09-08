import PanelRail from '../components/PanelRail'
import { events } from '../data/content'

export default function Events() {
  return (
    <div className="pb-24">
      <PanelRail
        panel="02"
        kicker="Cycles & gatherings"
        title="Workshops, timed to the calendar."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
        {events.map((e, i) => {
          const completed = e.status === 'Completed'

          return (
            <article
              key={i}
              className="
                group
                flex flex-col
                min-h-[390px]
                p-7 md:p-8
                border border-rule
                rounded-2xl
                bg-[#0c1422]/70
                backdrop-blur-md
                shadow-[0_8px_40px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:border-teal/40
                hover:bg-[#101a2a]
                hover:-translate-y-1
                hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)]
              "
            >
              {/* DATE + STATUS */}
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-display text-4xl tnum leading-none">
                    {e.day}
                  </p>

                  <p className="
                    text-xs
                    text-muted
                    mt-2
                    tnum
                    uppercase
                    tracking-wider
                  ">
                    {e.month}
                  </p>
                </div>

                {/* STATUS BADGE */}
                <span
                  className={`
                    shrink-0
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    text-xs
                    tracking-wide
                    rounded-sm
                    ${
                      completed
                        ? `
                          text-red-300/80
                          border
                          border-red-400/30
                          bg-red-500/[0.03]
                        `
                        : `
                          text-teal
                          border
                          border-teal/40
                          bg-teal/[0.03]
                        `
                    }
                  `}
                >
                  {/* STATUS DOT */}
                  <span
                    className={`
                      relative
                      w-2
                      h-2
                      shrink-0
                      rounded-full
                      ${
                        completed
                          ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.7)]'
                          : 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-status-pulse'
                      }
                    `}
                  />

                  {e.status}
                </span>
              </div>

              {/* DIVIDER */}
              <div className="
                w-full
                h-px
                bg-rule
                my-7
              " />

              {/* MAIN CONTENT */}
              <div>
                <h3
                  className="
                    font-display
                    text-2xl
                    leading-snug
                    mb-4
                    transition-colors
                    duration-300
                    group-hover:text-teal
                  "
                >
                  {e.title}
                </h3>

                <p className="
                  text-muted
                  text-sm
                  leading-relaxed
                  max-w-xl
                ">
                  {e.description}
                </p>
              </div>

              {/* BOTTOM INFO */}
              <div
                className="
                  mt-auto
                  pt-8
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                  gap-4
                "
              >
                <div className="
                  flex
                  flex-wrap
                  gap-x-4
                  gap-y-1
                  text-xs
                  text-muted
                ">
                  <span>
                    {e.track}
                    {e.level ? ` · ${e.level}` : ''}
                  </span>

                  <span>
                    {e.room}
                  </span>
                </div>

                <p className="
                  text-sm
                  text-paper
                  tnum
                  whitespace-nowrap
                ">
                  {e.time}
                </p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}