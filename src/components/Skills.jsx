const skills = [
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#E44D26"/>
        <path d="M16 27.6V4.4H24.1L22 25.2 16 27.6z" fill="#F16529"/>
        <path d="M11.2 13.6H16v3.2h-1.6l.4 4.4 1.2.3v3.3l-4.4-1.2-.3-3.6h3.1l.1 1.5 1.5.4.1-2.8H10.6l-.4-4.8H16V10.4h-5.2l-.4-4.4H16V2.6H7.6L9.2 20 11.2 13.6z" fill="#EBEBEB"/>
        <path d="M16 10.4v3.2h4.6l-.4 4.4-4.2 1.1v3.3l4.3-1.2.3-4H16v-3.2h4.9l.4-4.4H16V2.6h8.4L22.8 20 16 21.9v3.3l7.6-2.1L26 2h-10v8.4z" fill="#fff"/>
      </svg>
    ),
    color: "#E44D26",
    bg: "rgba(228,77,38,0.08)",
    border: "rgba(228,77,38,0.22)",
    glow: "rgba(228,77,38,0.14)",
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <path d="M6 2l2.4 26.4L16 30l7.6-1.6L26 2H6z" fill="#1572B6"/>
        <path d="M16 27.6V4.4H24.1L22 25.2 16 27.6z" fill="#33A9DC"/>
        <path d="M11 6H16v3.4H10.6l-.4-3.4zm-.7 7.4H16v3.2h-4.6l.3 3.3 4.3 1.1v3.4l-4.4-1.2-.3-4.1h-1.5l-.4-4.7-.4-1.1.8.1z" fill="#EBEBEB"/>
        <path d="M16 6v3.4h5.4l-.4 3.4H16v3.2h4.6l-.45 4.9-4.15 1.1V25.3l4.3-1.2.6-6.7H16v-3.2h5.4L22 6H16z" fill="#fff"/>
      </svg>
    ),
    color: "#1572B6",
    bg: "rgba(21,114,182,0.08)",
    border: "rgba(21,114,182,0.22)",
    glow: "rgba(21,114,182,0.14)",
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <rect x="2" y="2" width="28" height="28" rx="3" fill="#F7DF1E"/>
        <path d="M10 24.8l2.1-1.28c.42.74.8 1.37 1.7 1.37.87 0 1.42-.34 1.42-1.66V14.4h2.6v8.88c0 2.73-1.6 3.97-3.94 3.97-2.1 0-3.33-1.09-3.95-2.42zM19.2 24.5l2.1-1.3c.55.9 1.27 1.57 2.54 1.57 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.2-1.88-1.7l-.64-.28c-1.87-.8-3.1-1.8-3.1-3.9 0-1.94 1.48-3.42 3.8-3.42 1.65 0 2.84.58 3.7 2.08l-2.02 1.3c-.45-.8-.93-1.12-1.68-1.12-.76 0-1.25.48-1.25 1.12 0 .78.49 1.1 1.62 1.58l.64.27c2.2.95 3.44 1.92 3.44 4.1 0 2.35-1.85 3.6-4.33 3.6-2.43 0-4-1.16-4.75-2.7z" fill="#323330"/>
      </svg>
    ),
    color: "#F7DF1E",
    bg: "rgba(247,223,30,0.07)",
    border: "rgba(247,223,30,0.22)",
    glow: "rgba(247,223,30,0.12)",
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <circle cx="16" cy="16" r="2.6" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.4" fill="none"/>
        <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.4" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    ),
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.07)",
    border: "rgba(97,218,251,0.22)",
    glow: "rgba(97,218,251,0.12)",
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <path d="M15.9 2C11.5 2 11.9 3.9 11.9 3.9V8H16v1H7.8S4 8.5 4 12.9c0 4.4 3.5 4.2 3.5 4.2H10v-2.2S9.8 11.3 13.4 11.3h7.1c0 0 3.3.1 3.3-3.1V5C23.8 5 24.3 2 15.9 2z" fill="url(#pyg1)"/>
        <path d="M16.1 30c4.4 0 4-1.9 4-1.9V24H16v-1h8.2S28 23.5 28 19.1c0-4.4-3.5-4.2-3.5-4.2H22v2.2s.2 3.6-3.4 3.6h-7.1c0 0-3.3-.1-3.3 3.1V27c0 0-.5 3 8.1 3h-.2z" fill="url(#pyg2)"/>
        <circle cx="13.5" cy="5.5" r="1.1" fill="white"/>
        <circle cx="18.5" cy="26.5" r="1.1" fill="white"/>
        <defs>
          <linearGradient id="pyg1" x1="4" y1="2" x2="24" y2="11" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5A9FD4"/>
            <stop offset="1" stopColor="#306998"/>
          </linearGradient>
          <linearGradient id="pyg2" x1="8" y1="21" x2="28" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD43B"/>
            <stop offset="1" stopColor="#FFE873"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    color: "#FFD43B",
    bg: "rgba(255,212,59,0.07)",
    border: "rgba(255,212,59,0.22)",
    glow: "rgba(255,212,59,0.12)",
  },
  {
    name: "Django",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <rect width="32" height="32" rx="5" fill="#092E20"/>
        <path d="M17.4 5.5h3.4V20c-1.7.34-2.95.47-4.3.47-4.1 0-6.2-1.86-6.2-5.43 0-3.45 2.26-5.7 5.63-5.7.56 0 .98.05 1.47.18V5.5zm0 7.82c-.38-.14-.7-.2-1.08-.2-1.65 0-2.6 1.04-2.6 2.76 0 1.68.9 2.62 2.54 2.62.35 0 .65-.02 1.14-.1v-5.08z" fill="#44B78B"/>
        <path d="M22.5 10.6H26v13.4h-3.5V10.6zM22.5 5.5H26v3.4h-3.5V5.5z" fill="#44B78B"/>
      </svg>
    ),
    color: "#44B78B",
    bg: "rgba(68,183,139,0.08)",
    border: "rgba(68,183,139,0.22)",
    glow: "rgba(68,183,139,0.14)",
  },
  {
    name: "Machine Learning",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <circle cx="16" cy="16" r="3.2" fill="#a78bfa"/>
        <circle cx="6.5" cy="10" r="2.4" fill="#7c3aed" opacity="0.85"/>
        <circle cx="25.5" cy="10" r="2.4" fill="#7c3aed" opacity="0.85"/>
        <circle cx="6.5" cy="22" r="2.4" fill="#7c3aed" opacity="0.85"/>
        <circle cx="25.5" cy="22" r="2.4" fill="#7c3aed" opacity="0.85"/>
        <circle cx="16" cy="4" r="2" fill="#c4b5fd"/>
        <circle cx="16" cy="28" r="2" fill="#c4b5fd"/>
        <line x1="16" y1="12.8" x2="8.5" y2="10.8" stroke="#a78bfa" strokeWidth="1.3" opacity="0.7"/>
        <line x1="16" y1="12.8" x2="23.5" y2="10.8" stroke="#a78bfa" strokeWidth="1.3" opacity="0.7"/>
        <line x1="16" y1="19.2" x2="8.5" y2="21.2" stroke="#a78bfa" strokeWidth="1.3" opacity="0.7"/>
        <line x1="16" y1="19.2" x2="23.5" y2="21.2" stroke="#a78bfa" strokeWidth="1.3" opacity="0.7"/>
        <line x1="16" y1="12.8" x2="16" y2="6" stroke="#a78bfa" strokeWidth="1.3" opacity="0.7"/>
        <line x1="16" y1="19.2" x2="16" y2="26" stroke="#a78bfa" strokeWidth="1.3" opacity="0.7"/>
      </svg>
    ),
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.22)",
    glow: "rgba(167,139,250,0.14)",
  },
  
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
        <path d="M29.47 14.53L17.47 2.53a1.8 1.8 0 00-2.55 0l-2.53 2.53 3.2 3.2a2.14 2.14 0 012.7 2.7l3.08 3.08a2.14 2.14 0 11-1.28 1.28L17 12.23V20a2.14 2.14 0 11-1.72 0v-7.94a2.14 2.14 0 01-1.16-2.8l-3.15-3.15L2.53 14.47a1.8 1.8 0 000 2.55l12 12a1.8 1.8 0 002.55 0l12.4-12.4a1.8 1.8 0 00-.01-2.09z" fill="#F05032"/>
      </svg>
    ),
    color: "#F05032",
    bg: "rgba(240,80,50,0.08)",
    border: "rgba(240,80,50,0.22)",
    glow: "rgba(240,80,50,0.14)",
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

        .skills-section::before {
          content: 'SKILLS';
          position: absolute;
          bottom: 20px;
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

        /* Skills grid — exactly 3 columns */
        .skills-grid-new {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-card {
          background: rgba(255,255,255,0.02);
          border-radius: 22px;
          padding: 44px 24px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 28px 64px rgba(0,0,0,0.38);
        }

        .skill-icon-box {
          width: 88px;
          height: 88px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .skill-card:hover .skill-icon-box {
          transform: scale(1.12);
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.2px;
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
          line-height: 1.3;
        }

        .skill-card:hover .skill-name {
          color: rgba(255,255,255,0.95);
        }

        /* Glow overlay */
        .skill-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          opacity: 0;
          transition: opacity 0.38s ease;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .skills-grid-new {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 520px) {
          .skills-grid-new {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .skill-icon-box { width: 68px; height: 68px; }
          .skill-card { padding: 32px 16px 26px; gap: 16px; }
          .skill-name { font-size: 0.88rem; }
        }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="skills-header">
          <div className="section-eyebrow">What I know</div>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid-new">
          {skills.map((skill, i) => (
            <div
              className="skill-card"
              key={i}
              style={{ border: `1px solid ${skill.border}` }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('.skill-card-glow').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('.skill-card-glow').style.opacity = '0';
              }}
            >
              <div
                className="skill-card-glow"
                style={{
                  background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${skill.glow} 0%, transparent 70%)`,
                }}
              />

              <div
                className="skill-icon-box"
                style={{
                  background: skill.bg,
                  border: `1px solid ${skill.border}`,
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