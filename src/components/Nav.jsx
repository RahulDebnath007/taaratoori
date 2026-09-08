import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { rooms } from '../data/content'

const links = [
  { name: 'Home', path: '/' },
  ...rooms.map((room) => ({
    name: room.name,
    path: room.path,
  })),
  { name: 'Careers', path: '/careers' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 sm:px-10">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="shrink-0"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-teal/40">
              <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_10px_rgba(79,184,176,0.8)]" />
            </span>

            <div>
              <p className="font-display text-lg leading-none tracking-tight">
                Taara Toori
              </p>
              <p className="mt-1 text-[8px] tracking-[0.25em] text-muted">
                SYSTEM
              </p>
            </div>
          </div>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-3 py-2 text-sm whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-panel text-gold'
                    : 'text-muted hover:bg-panel/70 hover:text-paper'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-px w-8 -translate-x-1/2 bg-gold" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ONLINE STATUS */}
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-[9px] tracking-[0.2em] text-muted">
            ONLINE
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_10px_rgba(79,184,176,0.8)] animate-pulse" />
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-rule bg-panel/70 text-paper transition-colors hover:border-teal/40 md:hidden"
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? 'translate-y-[4px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${
                menuOpen ? '-translate-y-[4px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-rule transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 py-4 sm:px-10">
          <div className="rounded-2xl border border-rule bg-panel/50 p-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-ink text-gold'
                      : 'text-muted hover:bg-ink/70 hover:text-paper'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>

                    {isActive && (
                      <span className="flex items-center gap-2 text-[9px] tracking-[0.15em] text-gold">
                        ACTIVE
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between px-2 pb-2">
            <span className="text-[9px] tracking-[0.2em] text-muted">
              TAARA TOORI / SYSTEM
            </span>

            <span className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-teal">
              ONLINE
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            </span>
          </div>
        </nav>
      </div>
    </header>
  )
}