const skills = [
  // ─────────────────────────────────────────────
  // FRONTEND
  // ─────────────────────────────────────────────
  {
    name: "HTML5",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#E44D26" />
        <path d="M16 27.6V4.4H24.1L22 25.2 16 27.6z" fill="#F16529" />
        <path
          d="M11.2 13.6H16v3.2h-1.6l.4 4.4 1.2.3v3.3l-4.4-1.2-.3-3.6h3.1l.1 1.5 1.5.4.1-2.8H10.6l-.4-4.8H16V10.4h-5.2l-.4-4.4H16V2.6H7.6L9.2 20 11.2 13.6z"
          fill="#EBEBEB"
        />
        <path
          d="M16 10.4v3.2h4.6l-.4 4.4-4.2 1.1v3.3l4.3-1.2.3-4H16v-3.2h4.9l.4-4.4H16V2.6h8.4L22.8 20 16 21.9v3.3l7.6-2.1L26 2h-10v8.4z"
          fill="#fff"
        />
      </svg>
    ),
    color: "#E44D26",
    glow: "rgba(228,77,38,0.35)",
    glowSoft: "rgba(228,77,38,0.08)",
  },

  {
    name: "CSS3",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#1572B6" />
        <path d="M16 27.6V4.4H24.1L22 25.2 16 27.6z" fill="#33A9DC" />
        <path
          d="M11 6H16v3.4H10.6l-.4-3.4zm-.7 7.4H16v3.2h-4.6l.3 3.3 4.3 1.1v3.4l-4.4-1.2-.3-4.1h-1.5l-.4-4.7-.4-1.1.8.1z"
          fill="#EBEBEB"
        />
        <path
          d="M16 6v3.4h5.4l-.4 3.4H16v3.2h4.6l-.45 4.9-4.15 1.1V25.3l4.3-1.2.6-6.7H16v-3.2h5.4L22 6H16z"
          fill="#fff"
        />
      </svg>
    ),
    color: "#1572B6",
    glow: "rgba(21,114,182,0.35)",
    glowSoft: "rgba(21,114,182,0.08)",
  },

  {
    name: "JavaScript",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <rect x="2" y="2" width="28" height="28" rx="3" fill="#F7DF1E" />
        <path
          d="M10 24.8l2.1-1.28c.42.74.8 1.37 1.7 1.37.87 0 1.42-.34 1.42-1.66V14.4h2.6v8.88c0 2.73-1.6 3.97-3.94 3.97-2.1 0-3.33-1.09-3.95-2.42zM19.2 24.5l2.1-1.3c.55.9 1.27 1.57 2.54 1.57 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.2-1.88-1.7l-.64-.28c-1.87-.8-3.1-1.8-3.1-3.9 0-1.94 1.48-3.42 3.8-3.42 1.65 0 2.84.58 3.7 2.08l-2.02 1.3c-.45-.8-.93-1.12-1.68-1.12-.76 0-1.25.48-1.25 1.12 0 .78.49 1.1 1.62 1.58l.64.27c2.2.95 3.44 1.92 3.44 4.1 0 2.35-1.85 3.6-4.33 3.6-2.43 0-4-1.16-4.75-2.7z"
          fill="#323330"
        />
      </svg>
    ),
    color: "#F7DF1E",
    glow: "rgba(247,223,30,0.3)",
    glowSoft: "rgba(247,223,30,0.07)",
  },

  {
    name: "TypeScript",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <rect x="2" y="2" width="28" height="28" rx="3" fill="#3178C6" />
        <path
          d="M7.5 14.2h6.8v2.3h-2.2v7.8H9.7v-7.8H7.5v-2.3zM15.2 21.8l1.8-1.3c.7 1 1.5 1.6 2.6 1.6.9 0 1.5-.4 1.5-1 0-.7-.5-.9-1.7-1.4l-.7-.3c-1.9-.8-3.1-1.7-3.1-3.5 0-1.8 1.5-3 3.7-3 1.6 0 2.8.5 3.7 1.8l-1.8 1.3c-.4-.7-1-.9-1.7-.9-.7 0-1.2.3-1.2.8 0 .6.4.8 1.4 1.2l.7.3c2.1.9 3.3 1.8 3.3 3.6 0 2.1-1.7 3.4-4.1 3.4-2.2 0-3.8-1-4.4-2.6z"
          fill="#fff"
        />
      </svg>
    ),
    color: "#3178C6",
    glow: "rgba(49,120,198,0.32)",
    glowSoft: "rgba(49,120,198,0.08)",
  },

  {
    name: "React",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <circle cx="16" cy="16" r="2.6" fill="#61DAFB" />
        <ellipse
          cx="16"
          cy="16"
          rx="13.5"
          ry="5.2"
          stroke="#61DAFB"
          strokeWidth="1.4"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13.5"
          ry="5.2"
          stroke="#61DAFB"
          strokeWidth="1.4"
          transform="rotate(60 16 16)"
        />
        <ellipse
          cx="16"
          cy="16"
          rx="13.5"
          ry="5.2"
          stroke="#61DAFB"
          strokeWidth="1.4"
          transform="rotate(120 16 16)"
        />
      </svg>
    ),
    color: "#61DAFB",
    glow: "rgba(97,218,251,0.3)",
    glowSoft: "rgba(97,218,251,0.07)",
  },

  // ─────────────────────────────────────────────
  // BACKEND
  // ─────────────────────────────────────────────
  {
    name: "Node.js",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path
          d="M16 3.2l11.2 6.45v12.7L16 28.8 4.8 22.35V9.65L16 3.2z"
          fill="#68A063"
        />
        <path
          d="M16 6.2l8.6 4.95v9.7L16 25.8l-8.6-4.95v-9.7L16 6.2z"
          fill="#fff"
          opacity="0.08"
        />
        <path
          d="M13.2 20.5v-8.1l2.8-1.6 2.8 1.6v8.1l-2.8 1.6-2.8-1.6z"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "#68A063",
    glow: "rgba(104,160,99,0.32)",
    glowSoft: "rgba(104,160,99,0.08)",
  },

  {
    name: "Express.js",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path
          d="M5 21.5h22M7 10.5h18M10 16h12"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    color: "#ffffff",
    glow: "rgba(255,255,255,0.25)",
    glowSoft: "rgba(255,255,255,0.06)",
  },

  {
    name: "Python",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path
          d="M15.9 2C11.5 2 11.9 3.9 11.9 3.9V8H16v1H7.8S4 8.5 4 12.9c0 4.4 3.5 4.2 3.5 4.2H10v-2.2S9.8 11.3 13.4 11.3h7.1c0 0 3.3.1 3.3-3.1V5C23.8 5 24.3 2 15.9 2z"
          fill="#3776AB"
        />
        <path
          d="M16.1 30c4.4 0 4-1.9 4-1.9V24H16v-1h8.2S28 23.5 28 19.1c0-4.4-3.5-4.2-3.5-4.2H22v2.2s.2 3.6-3.4 3.6h-7.1c0 0-3.3-.1-3.3 3.1V27c0 0-.5 3 8.1 3h-.2z"
          fill="#FFD43B"
        />
        <circle cx="13.5" cy="5.5" r="1.1" fill="white" />
        <circle cx="18.5" cy="26.5" r="1.1" fill="white" />
      </svg>
    ),
    color: "#FFD43B",
    glow: "rgba(255,212,59,0.28)",
    glowSoft: "rgba(255,212,59,0.07)",
  },

  {
    name: "Django",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <rect width="32" height="32" rx="5" fill="#092E20" />
        <path
          d="M17.4 5.5h3.4V20c-1.7.34-2.95.47-4.3.47-4.1 0-6.2-1.86-6.2-5.43 0-3.45 2.26-5.7 5.63-5.7.56 0 .98.05 1.47.18V5.5zm0 7.82c-.38-.14-.7-.2-1.08-.2-1.65 0-2.6 1.04-2.6 2.76 0 1.68.9 2.62 2.54 2.62.35 0 .65-.02 1.14-.1v-5.08z"
          fill="#44B78B"
        />
        <path
          d="M22.5 10.6H26v13.4h-3.5V10.6zM22.5 5.5H26v3.4h-3.5V5.5z"
          fill="#44B78B"
        />
      </svg>
    ),
    color: "#44B78B",
    glow: "rgba(68,183,139,0.32)",
    glowSoft: "rgba(68,183,139,0.08)",
  },

  // ─────────────────────────────────────────────
  // DATABASE
  // ─────────────────────────────────────────────
  {
    name: "MongoDB",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path
          d="M16.1 3c.4 3.1 2.8 5.1 4.1 7.3 1.5 2.5 1.8 5.1 1.1 7.7-.8 3.1-2.8 5.3-5.2 7.4-.2-1.4-.2-2.7-.1-4.1.1-2.4.2-4.7-.2-7-.5-2.7-.8-5.2.3-7.9z"
          fill="#47A248"
        />
        <path
          d="M16.1 3c-.4 4.3-.2 8.7-.1 13 .1 3.2-.1 6.3-.1 9.4"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    ),
    color: "#47A248",
    glow: "rgba(71,162,72,0.32)",
    glowSoft: "rgba(71,162,72,0.08)",
  },

  {
    name: "Mongoose",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path
          d="M16 4l3.2 5.5 6.2 1.8-4.2 4.8.4 6.5-5.6-2.2-5.6 2.2.4-6.5-4.2-4.8 6.2-1.8L16 4z"
          fill="#880000"
        />
        <circle cx="16" cy="14" r="3" fill="#fff" opacity="0.9" />
      </svg>
    ),
    color: "#880000",
    glow: "rgba(136,0,0,0.30)",
    glowSoft: "rgba(136,0,0,0.07)",
  },

  // ─────────────────────────────────────────────
  // AI / MACHINE LEARNING
  // ─────────────────────────────────────────────
  {
    name: "Machine Learning",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <circle cx="16" cy="16" r="3.2" fill="#a78bfa" />
        <circle cx="6.5" cy="10" r="2.4" fill="#7c3aed" opacity="0.85" />
        <circle cx="25.5" cy="10" r="2.4" fill="#7c3aed" opacity="0.85" />
        <circle cx="6.5" cy="22" r="2.4" fill="#7c3aed" opacity="0.85" />
        <circle cx="25.5" cy="22" r="2.4" fill="#7c3aed" opacity="0.85" />
        <circle cx="16" cy="4" r="2" fill="#c4b5fd" />
        <circle cx="16" cy="28" r="2" fill="#c4b5fd" />
        <line
          x1="16"
          y1="12.8"
          x2="8.5"
          y2="10.8"
          stroke="#a78bfa"
          strokeWidth="1.3"
          opacity="0.7"
        />
        <line
          x1="16"
          y1="12.8"
          x2="23.5"
          y2="10.8"
          stroke="#a78bfa"
          strokeWidth="1.3"
          opacity="0.7"
        />
        <line
          x1="16"
          y1="19.2"
          x2="8.5"
          y2="21.2"
          stroke="#a78bfa"
          strokeWidth="1.3"
          opacity="0.7"
        />
        <line
          x1="16"
          y1="19.2"
          x2="23.5"
          y2="21.2"
          stroke="#a78bfa"
          strokeWidth="1.3"
          opacity="0.7"
        />
        <line
          x1="16"
          y1="12.8"
          x2="16"
          y2="6"
          stroke="#a78bfa"
          strokeWidth="1.3"
          opacity="0.7"
        />
        <line
          x1="16"
          y1="19.2"
          x2="16"
          y2="26"
          stroke="#a78bfa"
          strokeWidth="1.3"
          opacity="0.7"
        />
      </svg>
    ),
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.32)",
    glowSoft: "rgba(167,139,250,0.08)",
  },

  {
    name: "OpenCV",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <circle cx="16" cy="16" r="5" stroke="#5C3EE8" strokeWidth="2.2" />
        <circle cx="7" cy="10" r="3.5" stroke="#5C3EE8" strokeWidth="2" />
        <circle cx="25" cy="10" r="3.5" stroke="#5C3EE8" strokeWidth="2" />
        <circle cx="7" cy="22" r="3.5" stroke="#5C3EE8" strokeWidth="2" />
        <circle cx="25" cy="22" r="3.5" stroke="#5C3EE8" strokeWidth="2" />
        <path
          d="M10 11.5l3 2M22 11.5l-3 2M10 20.5l3-2M22 20.5l-3-2"
          stroke="#5C3EE8"
          strokeWidth="1.5"
        />
      </svg>
    ),
    color: "#5C3EE8",
    glow: "rgba(92,62,232,0.32)",
    glowSoft: "rgba(92,62,232,0.08)",
  },

  {
    name: "YOLO",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="4"
          stroke="#00AEEF"
          strokeWidth="2"
        />
        <path
          d="M10 10l5 6v6M22 10l-5 6v6M15 16h2"
          stroke="#00AEEF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "#00AEEF",
    glow: "rgba(0,174,239,0.30)",
    glowSoft: "rgba(0,174,239,0.07)",
  },

  // ─────────────────────────────────────────────
  // TOOLS
  // ─────────────────────────────────────────────
  {
    name: "Git",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path
          d="M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.55 0l-2.53 2.53 3.2 3.2a2.14 2.14 0 012.7 2.7l3.08 3.08a2.14 2.14 0 11-1.28 1.28L17 12.23V20a2.14 2.14 0 11-1.72 0v-7.94a2.14 2.14 0 01-1.16-2.8l-3.15-3.15L2.53 14.47a1.8 1.8 0 000 2.55l12 12a1.8 1.8 0 002.55 0l12.4-12.4a1.8 1.8 0 00-.01-2.09z"
          fill="#F05032"
        />
      </svg>
    ),
    color: "#F05032",
    glow: "rgba(240,80,50,0.32)",
    glowSoft: "rgba(240,80,50,0.08)",
  },

  {
    name: "GitHub",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
      >
        <path
          d="M16 3C8.82 3 3 8.82 3 16c0 5.75 3.73 10.63 8.9 12.35.65.12.88-.28.88-.62v-2.18c-3.62.79-4.39-1.74-4.39-1.74-.59-1.5-1.45-1.9-1.45-1.9-1.18-.81.09-.79.09-.79 1.31.09 2 1.35 2 1.35 1.16 1.99 3.04 1.42 3.78 1.09.12-.85.45-1.42.82-1.75-2.89-.33-5.93-1.45-5.93-6.43 0-1.42.51-2.58 1.35-3.49-.14-.33-.59-1.65.13-3.44 0 0 1.1-.35 3.58 1.33a12.4 12.4 0 016.52 0c2.48-1.68 3.58-1.33 3.58-1.33.72 1.79.27 3.11.13 3.44.84.91 1.35 2.07 1.35 3.49 0 4.99-3.05 6.1-5.95 6.42.47.41.88 1.21.88 2.44v3.62c0 .35.23.75.89.62A13.01 13.01 0 0029 16C29 8.82 23.18 3 16 3z"
          fill="#fff"
        />
      </svg>
    ),
    color: "#ffffff",
    glow: "rgba(255,255,255,0.25)",
    glowSoft: "rgba(255,255,255,0.06)",
  },
];

function Skills() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .skills-section {
          padding: 120px 10%;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Ambient background blobs */
        .skills-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .skills-blob-1 {
          width: 500px; height: 400px;
          background: rgba(49,130,206,0.07);
          top: -60px; left: -100px;
        }

        .skills-blob-2 {
          width: 400px; height: 350px;
          background: rgba(68,183,139,0.06);
          bottom: 0; right: -80px;
        }

        .skills-section::after {
          content: 'SKILLS';
          position: absolute;
          bottom: 10px;
          right: -30px;
          font-family: 'Syne', sans-serif;
          font-size: 9rem;
          font-weight: 800;
          color: rgba(99,179,237,0.025);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        .skills-header {
          margin-bottom: 64px;
          position: relative;
          z-index: 1;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #63b3ed;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .section-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #63b3ed;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          color: #fff;
          line-height: 1.05;
        }

        .skills-grid-new {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        /* ── Glassmorphism card ── */
        .skill-card {
          position: relative;
          border-radius: 24px;
          padding: 36px 28px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          cursor: default;
          overflow: hidden;
          text-align: center;

          /* Glass base */
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);

          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s ease,
                      border-color 0.3s ease,
                      background 0.3s ease;
        }

        /* Inner shine streak — top left glint */
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.18) 40%,
            rgba(255,255,255,0.06) 70%,
            transparent 100%
          );
          border-radius: 24px 24px 0 0;
        }

        /* Bottom colour wash */
        .skill-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          border-radius: 0 0 24px 24px;
          background: var(--card-glow-soft, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .skill-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.14);
          box-shadow:
            0 30px 70px rgba(0,0,0,0.45),
            0 0 0 1px rgba(255,255,255,0.06),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        .skill-card:hover::after {
          opacity: 1;
        }

        /* Coloured glow bubble behind icon */
        .skill-glow-bubble {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          opacity: 0;
          filter: blur(40px);
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .skill-card:hover .skill-glow-bubble {
          opacity: 0.55;
        }

        /* Icon container */
        .skill-icon-wrap {
          position: relative;
          z-index: 1;
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s ease,
                      border-color 0.3s ease;
          flex-shrink: 0;
        }

        .skill-card:hover .skill-icon-wrap {
          transform: scale(1.1) translateY(-2px);
          border-color: rgba(255,255,255,0.2);
        }

        /* Skill name */
        .skill-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.3px;
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
          line-height: 1.3;
        }

        .skill-card:hover .skill-name {
          color: rgba(255,255,255,0.92);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .skills-grid-new {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 520px) {
          .skills-grid-new {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .skill-card { padding: 28px 16px 24px; }
          .skill-icon-wrap { width: 64px; height: 64px; }
          .skill-name { font-size: 0.82rem; }
        }
      `}</style>

      <section id="skills" className="skills-section">
        {/* Ambient blobs */}
        <div className="skills-blob skills-blob-1" />
        <div className="skills-blob skills-blob-2" />

        <div className="skills-header">
          <div className="section-eyebrow">What I know</div>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid-new">
          {skills.map((skill, i) => (
            <div
              className="skill-card"
              key={i}
              style={{
                "--card-glow-soft": `radial-gradient(ellipse 80% 60% at 50% 100%, ${skill.glowSoft} 0%, transparent 70%)`,
              }}
            >
              {/* Coloured glow blob behind icon */}
              <div
                className="skill-glow-bubble"
                style={{ background: skill.glow }}
              />

              <div
                className="skill-icon-wrap"
                style={{
                  boxShadow: `0 8px 32px ${skill.glowSoft}, inset 0 1px 0 rgba(255,255,255,0.08)`,
                }}
              >
                {skill.icon}
              </div>

              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
