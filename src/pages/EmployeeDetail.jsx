import { Link, useParams } from 'react-router-dom'
import { employees } from '../data/content'

function ProgressRing({ progress }) {
  const radius = 48
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - progress)
  const pct = Math.round(progress * 100)

  return (
    <div className="relative w-40 h-40">
      <svg
        viewBox="0 0 112 112"
        className="w-full h-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke="#223049"
          strokeWidth="3"
        />

        <circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke="#C99A44"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl text-paper">
          {pct}%
        </span>

        <span className="text-[9px] text-muted uppercase tracking-[0.2em] mt-1">
          Cycle
        </span>
      </div>
    </div>
  )
}

export default function EmployeeDetail() {
  const { id } = useParams()

  const employee = employees.find((e) => e.id === id)

  if (!employee) {
    return (
      <div className="pb-24">
        <Link
          to="/employees"
          className="text-sm text-teal hover:text-paper transition-colors"
        >
          ← Back to all employees
        </Link>

        <div className="mt-12 rounded-2xl border border-rule bg-panel/30 p-12">
          <p className="font-display text-2xl text-paper">
            Profile not found.
          </p>

          <p className="text-muted text-sm mt-2">
            That profile isn't in the current roster.
          </p>
        </div>
      </div>
    )
  }

  const pct = Math.round(employee.cycleProgress * 100)

  return (
    <div className="pb-24">
      {/* BACK */}
      <Link
        to="/employees"
        className="
          inline-flex
          items-center gap-2
          text-sm text-muted
          hover:text-teal
          transition-colors
        "
      >
        <span>←</span>
        <span>Back to all employees</span>
      </Link>

      {/* PROFILE HERO */}
      <section
        className="
          relative
          mt-8
          rounded-3xl
          border border-rule
          bg-panel/40
          backdrop-blur-md
          overflow-hidden
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            w-96
            h-96
            rounded-full
            bg-teal/5
            blur-3xl
          "
        />

        <div className="relative p-7 md:p-10 lg:p-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Ring */}
            <div className="shrink-0">
              <ProgressRing progress={employee.cycleProgress} />
            </div>

            {/* Identity */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-teal
                    border border-teal/20
                    bg-teal/5
                    rounded-full
                    px-3 py-1.5
                  "
                >
                  {employee.department}
                </span>

                <span className="text-xs text-muted">
                  Member profile
                </span>
              </div>

              <h1
                className="
                  font-display
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  leading-none
                  text-paper
                "
              >
                {employee.name}
              </h1>

              <p className="text-muted text-base md:text-lg mt-3">
                {employee.role}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-xs">
                <span className="text-muted">
                  Joined{' '}
                  <span className="text-paper">
                    {employee.joined}
                  </span>
                </span>

                <span className="text-muted">
                  Cycle{' '}
                  <span className="text-paper tnum">
                    {pct}%
                  </span>
                </span>

                <span className="text-muted">
                  Achievements{' '}
                  <span className="text-paper tnum">
                    {employee.achievements.length}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mt-14">
        <div className="flex items-end justify-between mb-7">
          <div>
            <span className="text-[10px] text-teal uppercase tracking-[0.2em]">
              Track record
            </span>

            <h2 className="font-display text-3xl mt-2">
              Logged achievements
            </h2>
          </div>

          <span className="text-xs text-muted tnum">
            {String(employee.achievements.length).padStart(2, '0')} entries
          </span>
        </div>

        <div className="grid gap-3">
          {employee.achievements.map((achievement, i) => (
            <div
              key={i}
              className="
                group
                rounded-xl
                border border-rule
                bg-panel/30
                p-5 md:p-6
                flex gap-5
                transition-all duration-300
                hover:bg-panel/60
                hover:border-teal/30
                hover:translate-x-1
              "
            >
              {/* Number */}
              <span
                className="
                  shrink-0
                  text-xs
                  text-gold
                  tnum
                  pt-1
                "
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Achievement */}
              <p
                className="
                  text-sm
                  text-muted
                  leading-relaxed
                  max-w-3xl
                  group-hover:text-paper
                  transition-colors duration-300
                "
              >
                {achievement}
              </p>

              {/* Arrow */}
              <span
                className="
                  ml-auto
                  shrink-0
                  text-muted
                  opacity-0
                  group-hover:opacity-100
                  group-hover:text-teal
                  transition-all duration-300
                "
              >
                →
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}