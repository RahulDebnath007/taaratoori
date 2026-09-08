// The numbered rail that opens every interior panel/page.
// The numbering mirrors the client's "Panel 01 / 02 / 03 / 04"
// room system while adding subtle system-status details and motion.

export default function PanelRail({ panel, title, kicker }) {
  return (
    <div className="relative border-b border-rule pb-10 mb-10 sm:mb-14 overflow-hidden">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#8892A6 1px, transparent 1px),
            linear-gradient(90deg, #8892A6 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          right-0
          w-[420px]
          h-[420px]
          rounded-full
          bg-teal/[0.025]
          blur-[100px]
        "
      />

      {/* Main layout */}
      <div
        className="
          relative
          grid
          grid-cols-[56px_1fr]
          sm:grid-cols-[80px_1fr]
          gap-6
          sm:gap-10
        "
      >

        {/* LEFT NUMBERED RAIL */}
        <div className="relative flex flex-col items-start min-h-[190px]">

          {/* Panel number */}
          <div className="flex items-center gap-2">
            <span
              className="
                font-display
                text-lg
                sm:text-xl
                text-gold
                tnum
                leading-none
              "
            >
              {panel}
            </span>

            <span
              className="
                hidden
                sm:block
                text-[8px]
                text-muted
                uppercase
                tracking-[0.18em]
                [writing-mode:vertical-rl]
              "
            >
              Panel
            </span>
          </div>

          {/* Vertical rail */}
          <div
            className="
              relative
              mt-5
              ml-[4px]
              w-px
              flex-1
              min-h-[100px]
              bg-rule
              overflow-hidden
            "
          >
            {/* Gold active section */}
            <div
              className="
                absolute
                top-0
                left-0
                w-px
                h-12
                bg-gold
              "
            />

            {/* Moving scan */}
            <div
              className="
                absolute
                top-0
                left-[-1px]
                w-[3px]
                h-6
                bg-teal
                blur-[2px]
                animate-panel-scan
              "
            />
          </div>

          {/* Bottom node */}
          <div
            className="
              relative
              mt-4
              ml-[1px]
              w-2
              h-2
              rounded-full
              border
              border-gold/50
            "
          >
            <span
              className="
                absolute
                inset-[2px]
                rounded-full
                bg-gold
              "
            />
          </div>
        </div>

        {/* HEADER CONTENT */}
        <div className="min-w-0">

          {/* Metadata */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              mb-5
            "
          >
            {kicker && (
              <div className="flex items-center gap-2">

                {/* Animated status dot */}
                <span className="relative flex w-1.5 h-1.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      w-full
                      h-full
                      rounded-full
                      bg-teal
                      opacity-60
                      animate-ping
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-teal
                      shadow-[0_0_8px_rgba(79,184,176,0.7)]
                    "
                  />
                </span>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-teal
                    uppercase
                    tracking-[0.12em]
                  "
                >
                  {kicker}
                </p>
              </div>
            )}

            {/* Separator */}
            <span className="hidden sm:block w-px h-3 bg-rule" />

            {/* System label */}
            <span
              className="
                text-[9px]
                sm:text-[10px]
                text-muted
                uppercase
                tracking-[0.16em]
              "
            >
              Taara Toori / System
            </span>
          </div>

          {/* Main title */}
          <h1
            className="
              font-display
              text-4xl
              sm:text-5xl
              lg:text-[4.25rem]
              font-medium
              leading-[0.98]
              tracking-[-0.02em]
              max-w-4xl
              text-paper
            "
          >
            {title}
          </h1>

          {/* Bottom metadata */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              sm:justify-between
              gap-4
              mt-7
              max-w-4xl
            "
          >
            {/* Accent */}
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px bg-gold" />

              <span
                className="
                  text-[9px]
                  text-muted
                  uppercase
                  tracking-[0.18em]
                "
              >
                Current cycle
              </span>
            </div>

            {/* Technical metadata */}
            <div
              className="
                flex
                items-center
                gap-4
                text-[9px]
                text-muted
                uppercase
                tracking-[0.16em]
              "
            >
              <span>
                Panel {panel}
              </span>

              <span className="w-1 h-1 rounded-full bg-gold" />

              <span className="flex items-center gap-2">
                Active

                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-teal
                    animate-pulse
                  "
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gold bottom accent */}
      <div
        className="
          absolute
          bottom-[-1px]
          left-0
          h-px
          w-20
          bg-gold
        "
      />
    </div>
  )
}