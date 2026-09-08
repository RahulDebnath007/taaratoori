import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { rooms } from '../data/content'

const links = [
  {
    name: 'Home',
    path: '/',
  },
  ...rooms.map((room) => ({
    name: room.name,
    path: room.path,
  })),
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-ink/90
        backdrop-blur-xl
        border-b
        border-rule
      "
    >
      {/* =====================================================
          TOP ACCENT LINE
      ===================================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-gold/50
          to-transparent
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          px-5
          sm:px-10
          h-[72px]
          flex
          items-center
          justify-between
          gap-6
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="
            group
            flex
            items-center
            gap-3
            shrink-0
          "
        >
          {/* Logo status dot */}
          <span className="relative flex w-2 h-2">
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-teal
                opacity-40
                animate-ping
              "
            />

            <span
              className="
                relative
                w-2
                h-2
                rounded-full
                bg-teal
                shadow-[0_0_10px_rgba(79,184,176,0.7)]
              "
            />
          </span>

          {/* Logo text */}
          <span
            className="
              font-display
              text-lg
              sm:text-xl
              tracking-tight
              text-paper
              group-hover:text-white
              transition-colors
              duration-300
            "
          >
            Taara Toori
          </span>

          {/* System label */}
          <span
            className="
              hidden
              xl:block
              text-[8px]
              text-muted
              uppercase
              tracking-[0.18em]
              border-l
              border-rule
              pl-3
              ml-1
            "
          >
            System
          </span>
        </NavLink>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-1
          "
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `
                  group
                  relative
                  flex
                  items-center
                  px-3
                  lg:px-3.5
                  py-2.5
                  rounded-lg
                  whitespace-nowrap
                  text-sm
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? 'text-gold bg-gold/5'
                      : 'text-muted hover:text-paper hover:bg-white/5'
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  {/* Navigation label */}
                  <span>
                    {link.name}
                  </span>

                  {/* Active underline */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        left-3
                        right-3
                        bottom-0
                        h-px
                        bg-gold
                      "
                    />
                  )}

                  {/* Hover effect */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-lg
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      bg-gradient-to-r
                      from-transparent
                      via-white/5
                      to-transparent
                    "
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>


        {/* =================================================
            DESKTOP SYSTEM STATUS
        ================================================= */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-3
            shrink-0
            pl-5
            border-l
            border-rule
          "
        >
          <span
            className="
              text-[8px]
              text-muted
              uppercase
              tracking-[0.18em]
            "
          >
            Online
          </span>

          <span className="relative flex w-1.5 h-1.5">
            <span
              className="
                absolute
                inset-0
                rounded-full
                bg-teal
                opacity-50
                animate-ping
              "
            />

            <span
              className="
                relative
                w-1.5
                h-1.5
                rounded-full
                bg-teal
                shadow-[0_0_8px_rgba(79,184,176,0.8)]
              "
            />
          </span>
        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            relative
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-lg
            border
            border-rule
            bg-panel/40
            text-muted
            hover:text-paper
            hover:border-teal/40
            transition-all
            duration-300
          "
        >
          {/* Hamburger / Close icon */}
          <span className="relative w-5 h-4 block">

            {/* Top */}
            <span
              className={`
                absolute
                left-0
                w-5
                h-px
                bg-current
                transition-all
                duration-300
                ${
                  menuOpen
                    ? 'top-2 rotate-45'
                    : 'top-0'
                }
              `}
            />

            {/* Middle */}
            <span
              className={`
                absolute
                left-0
                top-2
                w-5
                h-px
                bg-current
                transition-all
                duration-300
                ${
                  menuOpen
                    ? 'opacity-0'
                    : 'opacity-100'
                }
              `}
            />

            {/* Bottom */}
            <span
              className={`
                absolute
                left-0
                w-5
                h-px
                bg-current
                transition-all
                duration-300
                ${
                  menuOpen
                    ? 'top-2 -rotate-45'
                    : 'top-4'
                }
              `}
            />

          </span>
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          md:hidden
          overflow-hidden
          bg-ink/95
          backdrop-blur-xl
          border-t
          border-rule
          transition-all
          duration-300
          ${
            menuOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0 border-t-transparent'
          }
        `}
      >
        <nav className="px-5 py-4">

          {/* Mobile menu header */}
          <div
            className="
              flex
              items-center
              justify-between
              mb-2
              pb-3
              border-b
              border-rule
            "
          >
            <span
              className="
                text-[9px]
                text-muted
                uppercase
                tracking-[0.2em]
              "
            >
              Navigation
            </span>

            <span
              className="
                flex
                items-center
                gap-2
                text-[9px]
                text-teal
                uppercase
                tracking-[0.15em]
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-teal
                  shadow-[0_0_7px_rgba(79,184,176,0.7)]
                "
              />

              Online
            </span>
          </div>


          {/* Mobile links */}
          <div className="flex flex-col">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `
                    group
                    relative
                    flex
                    items-center
                    justify-between
                    py-4
                    border-b
                    border-rule/70
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? 'text-gold'
                        : 'text-muted hover:text-paper'
                    }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Link name */}
                    <span className="text-sm">
                      {link.name}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`
                        text-sm
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? 'text-teal translate-x-0'
                            : 'text-muted/40 -translate-x-1 group-hover:text-muted group-hover:translate-x-0'
                        }
                      `}
                    >
                      →
                    </span>

                    {/* Active line */}
                    {isActive && (
                      <span
                        className="
                          absolute
                          left-0
                          bottom-[-1px]
                          w-10
                          h-px
                          bg-gold
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

          </div>

        </nav>
      </div>
    </header>
  )
}