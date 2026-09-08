import PanelRail from '../components/PanelRail'
import { products, services } from '../data/content'

export default function Products() {
  return (
    <div className="pb-24">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <PanelRail
        panel="03"
        kicker="What we build"
        title="Three products. A practice around them."
      />


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="mb-24">

        {/* Section heading */}
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-[10px] text-teal uppercase tracking-[0.18em] mb-2">
              Product suite
            </p>

            <h2 className="font-display text-2xl sm:text-3xl text-paper">
              Built for the next cycle.
            </h2>
          </div>

          <span className="hidden sm:block text-[9px] text-muted uppercase tracking-[0.18em]">
            03 / Products
          </span>
        </div>


        {/* ===================================================
            PRODUCT CARDS
        =================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {products.map((p) => (
            <article
              key={p.index}
              className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-rule bg-[#0c1422]/75 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:border-teal/40 hover:bg-[#101a2a] hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >

              {/* Background grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.025] group-hover:opacity-[0.05] transition-opacity duration-500"
                style={{
                  backgroundImage: `
                    linear-gradient(#8892A6 1px, transparent 1px),
                    linear-gradient(90deg, #8892A6 1px, transparent 1px)
                  `,
                  backgroundSize: '28px 28px',
                }}
              />


              {/* Ambient glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 w-48 h-48 rounded-full bg-teal/5 blur-[70px] group-hover:bg-teal/10 transition-all duration-500" />


              {/* Card content */}
              <div className="relative h-full flex flex-col p-7 sm:p-8">

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <span className="block text-[10px] text-teal uppercase tracking-[0.16em] mb-2">
                      Product
                    </span>

                    <span className="block font-display text-4xl sm:text-5xl text-paper tnum leading-none">
                      {String(p.index).padStart(2, '0')}
                    </span>
                  </div>


                  {/* Active status */}
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-teal/20 bg-teal/5">

                    <span className="relative flex w-1.5 h-1.5">

                      {/* Blinking glow */}
                      <span className="absolute inset-0 rounded-full bg-teal opacity-50 animate-ping" />

                      {/* Main dot */}
                      <span className="relative w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(79,184,176,0.7)]" />

                    </span>

                    <span className="text-[8px] text-teal uppercase tracking-[0.14em]">
                      Active
                    </span>

                  </div>

                </div>


                {/* Divider */}
                <div className="w-full h-px bg-rule my-7" />


                {/* =================================================
                    PRODUCT INFORMATION
                ================================================= */}

                <div>

                  <h3 className="font-display text-2xl sm:text-[1.65rem] leading-[1.12] text-paper mb-4 transition-colors duration-300 group-hover:text-teal">
                    {p.name}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed">
                    {p.description}
                  </p>

                </div>


                {/* =================================================
                    DECORATIVE ORBIT
                ================================================= */}

                <div className="relative flex items-center justify-center w-20 h-20 mt-8 opacity-40 group-hover:opacity-80 group-hover:rotate-12 transition-all duration-700">

                  {/* Outer orbit */}
                  <div className="absolute w-16 h-16 rounded-full border border-rule border-dashed" />

                  {/* Inner orbit */}
                  <div className="absolute w-10 h-10 rounded-full border border-teal/30 border-dashed" />

                  {/* Gold nucleus */}
                  <span className="absolute w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(201,154,68,0.6)]" />

                  {/* Teal orbital dot */}
                  <span className="absolute w-1.5 h-1.5 rounded-full bg-teal translate-x-7 -translate-y-2 shadow-[0_0_8px_rgba(79,184,176,0.7)]" />

                </div>


                {/* =================================================
                    PRICE FOOTER
                ================================================= */}

                <div className="mt-auto pt-6 border-t border-rule flex items-end justify-between gap-4">

                  <div>

                    <p className="text-[9px] text-muted uppercase tracking-[0.16em] mb-1">
                      Starting from
                    </p>

                    <p className="text-teal text-sm sm:text-base font-medium">
                      {p.price}
                    </p>

                  </div>


                  {/* Arrow */}
                  <div className="flex items-center justify-center w-9 h-9 rounded-full border border-rule text-muted transition-all duration-300 group-hover:border-teal/40 group-hover:text-teal group-hover:translate-x-1">
                    →
                  </div>

                </div>

              </div>


              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-20 transition-all duration-500" />

            </article>
          ))}

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section>

        {/* Services heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

          <div>

            <div className="flex items-center gap-3 mb-3">

              <span className="w-8 h-px bg-gold" />

              <p className="text-[10px] text-gold uppercase tracking-[0.18em]">
                Services
              </p>

            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight">
              Consulting &amp; delivery
            </h2>

          </div>


          <span className="text-[9px] text-muted uppercase tracking-[0.18em]">
            Practice / 04
          </span>

        </div>


        {/* ===================================================
            SERVICE CARDS
        =================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {services.map((s, index) => (
            <article
              key={s.name}
              className="group relative overflow-hidden rounded-2xl border border-rule bg-[#0c1422]/60 backdrop-blur-md p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:bg-[#101a2a]"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gold/5 blur-[50px] group-hover:bg-gold/10 transition-all duration-500" />


              {/* Content */}
              <div className="relative flex flex-col h-full">

                {/* Top row */}
                <div className="flex items-center justify-between gap-4 mb-6">

                  <span className="text-[9px] text-teal uppercase tracking-[0.16em]">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="text-[9px] text-muted tnum uppercase tracking-[0.12em]">
                    {s.duration}
                  </span>

                </div>


                {/* Service title */}
                <h3 className="font-display text-xl sm:text-2xl leading-tight mb-3 transition-colors duration-300 group-hover:text-teal">
                  {s.name}
                </h3>


                {/* Service description */}
                <p className="text-muted text-sm leading-relaxed max-w-xl">
                  {s.description}
                </p>


                {/* Service footer */}
                <div className="mt-7 pt-5 border-t border-rule flex items-center justify-between gap-4">

                  <span className="text-[9px] text-muted uppercase tracking-[0.16em]">
                    Consulting &amp; delivery
                  </span>

                  <span className="text-teal text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>


              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-teal group-hover:w-16 transition-all duration-500" />

            </article>
          ))}

        </div>

      </section>

    </div>
  )
}