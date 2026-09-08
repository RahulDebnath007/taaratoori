export default function OrbitRings({ className = '' }) {
  return (
    <svg
      viewBox="0 0 420 420"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      {/* Orbit rings */}
      <circle
        cx="210"
        cy="210"
        r="180"
        fill="none"
        stroke="#223049"
        strokeWidth="1"
        strokeDasharray="1 7"
      />

      <circle
        cx="210"
        cy="210"
        r="130"
        fill="none"
        stroke="#223049"
        strokeWidth="1"
        strokeDasharray="1 7"
      />

      <circle
        cx="210"
        cy="210"
        r="80"
        fill="none"
        stroke="#223049"
        strokeWidth="1"
        strokeDasharray="1 7"
      />

      {/* Center */}
      <circle
        cx="210"
        cy="210"
        r="4"
        fill="#C99A44"
      />

      {/* ========================= */}
      {/* OUTER ORBIT */}
      {/* ========================= */}

      <g>
        <circle
          cx="390"
          cy="210"
          r="3"
          fill="#C99A44"
        />

        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 210 210"
          to="360 210 210"
          dur="18s"
          repeatCount="indefinite"
        />
      </g>

      {/* ========================= */}
      {/* MIDDLE ORBIT */}
      {/* ========================= */}

      <g>
        <circle
          cx="340"
          cy="210"
          r="2.5"
          fill="#4FB8B0"
        />

        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 210 210"
          to="-360 210 210"
          dur="12s"
          repeatCount="indefinite"
        />
      </g>

      {/* ========================= */}
      {/* INNER ORBIT */}
      {/* ========================= */}

      <g>
        <circle
          cx="290"
          cy="210"
          r="3"
          fill="#C99A44"
          opacity="0.8"
        />

        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 210 210"
          to="360 210 210"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>

      {/* ========================= */}
      {/* SECONDARY PARTICLE */}
      {/* ========================= */}

      <g>
        <circle
          cx="210"
          cy="80"
          r="2"
          fill="#8892A6"
        />

        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 210 210"
          to="-360 210 210"
          dur="15s"
          repeatCount="indefinite"
        />
      </g>

      {/* ========================= */}
      {/* SECONDARY PARTICLE */}
      {/* ========================= */}

      <g>
        <circle
          cx="210"
          cy="130"
          r="2"
          fill="#8892A6"
        />

        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 210 210"
          to="360 210 210"
          dur="10s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  )
}