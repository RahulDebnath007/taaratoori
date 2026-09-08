import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PanelRail from '../components/PanelRail'
import { employees, departments } from '../data/content'

function TimeRing({ progress }) {
  const r = 20
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - progress)

  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg
        viewBox="0 0 48 48"
        className="w-full h-full -rotate-90"
        aria-hidden="true"
      >
        {/* Background ring */}
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="#223049"
          strokeWidth="2"
        />

        {/* Progress */}
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="#C99A44"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>

      {/* Percentage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] text-paper tnum">
          {Math.round(progress * 100)}%
        </span>
      </div>
    </div>
  )
}

export default function Employees() {
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All Departments')

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()

    return employees.filter((e) => {
      const matchesQuery =
        search === '' ||
        e.name.toLowerCase().includes(search) ||
        e.role.toLowerCase().includes(search) ||
        e.department.toLowerCase().includes(search)

      const matchesDept =
        dept === 'All Departments' || e.department === dept

      return matchesQuery && matchesDept
    })
  }, [query, dept])

  return (
    <div className="pb-24">
      {/* HEADER */}
      <PanelRail
        panel="01"
        kicker="The roster"
        title="Twenty-seven names, behind one project."
      />

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 -mt-4 mb-12">
        <p className="text-muted text-sm leading-relaxed max-w-2xl">
          Every member of Taara Toori keeps a personal running measure of
          time management, alongside their logged achievements. Select a
          profile to explore their work and progress.
        </p>

        <div className="text-xs text-muted tracking-wide shrink-0">
          <span className="text-paper tnum">{filtered.length}</span>
          {' '}of{' '}
          <span className="text-paper tnum">{employees.length}</span>
          {' '}members
        </div>
      </div>

      {/* SEARCH / FILTER */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-3 mb-12">
        {/* Search */}
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, role or department…"
            className="
              w-full
              bg-panel/70
              backdrop-blur-md
              border border-rule
              rounded-xl
              pl-11 pr-4 py-3.5
              text-sm
              text-paper
              placeholder:text-muted
              outline-none
              transition-all duration-300
              focus:border-teal/60
              focus:bg-panel
              focus:shadow-[0_0_30px_rgba(79,184,176,0.06)]
            "
          />
        </div>

        {/* Department */}
        <div className="relative">
          <select
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="
              appearance-none
              w-full
              bg-panel/70
              backdrop-blur-md
              border border-rule
              rounded-xl
              px-4 py-3.5
              text-sm
              text-paper
              outline-none
              cursor-pointer
              transition-all duration-300
              focus:border-teal/60
              focus:bg-panel
            "
          >
            {departments.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <svg
            viewBox="0 0 24 24"
            className="
              pointer-events-none
              absolute right-4 top-1/2
              -translate-y-1/2
              w-4 h-4
              text-muted
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      {/* EMPLOYEE GRID */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((e, index) => {
            const progress = Math.round(e.cycleProgress * 100)

            return (
              <Link
                key={e.id}
                to={`/employees/${e.id}`}
                className="
                  group
                  relative
                  min-h-[245px]
                  rounded-2xl
                  border border-rule
                  bg-panel/40
                  backdrop-blur-md
                  p-6
                  overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-teal/40
                  hover:bg-panel/70
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                "
              >
                {/* Ambient hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    w-40
                    h-40
                    rounded-full
                    bg-teal/5
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <span className="text-[10px] text-muted tracking-[0.2em] tnum">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="
                      text-[10px]
                      text-teal
                      border border-teal/20
                      bg-teal/5
                      rounded-full
                      px-2.5 py-1
                    "
                  >
                    {e.department}
                  </span>
                </div>

                {/* Main */}
                <div className="relative mt-8 flex items-center gap-5">
                  <TimeRing progress={e.cycleProgress} />

                  <div className="min-w-0">
                    <h3
                      className="
                        font-display
                        text-xl
                        leading-tight
                        text-paper
                        transition-colors duration-300
                        group-hover:text-white
                      "
                    >
                      {e.name}
                    </h3>

                    <p className="text-muted text-sm mt-1 leading-snug">
                      {e.role}
                    </p>
                  </div>
                </div>

                {/* Bottom */}
                <div
                  className="
                    absolute
                    left-6 right-6 bottom-6
                    pt-4
                    border-t border-rule/70
                    flex items-center justify-between
                  "
                >
                  <div>
                    <span className="block text-[10px] text-muted uppercase tracking-wider">
                      Cycle progress
                    </span>

                    <span className="text-xs text-paper tnum">
                      {progress}% complete
                    </span>
                  </div>

                  <div
                    className="
                      flex items-center gap-2
                      text-xs text-muted
                      group-hover:text-teal
                      transition-colors duration-300
                    "
                  >
                    <span>View profile</span>

                    <span
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className="
                    absolute
                    right-0 top-0
                    w-12 h-12
                    border-t border-r
                    border-transparent
                    group-hover:border-teal/30
                    rounded-tr-2xl
                    transition-colors duration-500
                  "
                />
              </Link>
            )
          })}
        </div>
      ) : (
        <div
          className="
            rounded-2xl
            border border-rule
            bg-panel/30
            p-16
            text-center
          "
        >
          <p className="font-display text-xl text-paper mb-2">
            No profile found.
          </p>

          <p className="text-muted text-sm">
            Try a different name, role, or department.
          </p>

          <button
            onClick={() => {
              setQuery('')
              setDept('All Departments')
            }}
            className="
              mt-6
              text-xs
              text-teal
              border-b border-teal/40
              pb-1
              hover:text-paper
              transition-colors
            "
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  )
}