import { useEffect, useRef } from "react";

const orbitSkills = [
  { name: "Django", icon: "🎸", color: "#44B78B", angle: 0 },
  { name: "Python", icon: "🐍", color: "#FFD43B", angle: 60 },
  { name: "React", icon: "⚛️", color: "#61DAFB", angle: 120 },
  { name: "YOLO", icon: "👁️", color: "#a78bfa", angle: 180 },
  { name: "Git", icon: "🔀", color: "#F05032", angle: 240 },
  { name: "ML", icon: "🧠", color: "#f472b6", angle: 300 },
];

// Second inner orbit
const innerSkills = [
  { name: "HTML5", icon: "🌐", color: "#E44D26", angle: 30 },
  { name: "CSS3", icon: "🎨", color: "#1572B6", angle: 150 },
  { name: "JS", icon: "⚡", color: "#F7DF1E", angle: 270 },
];

function OrbitalRig() {
  const rigRef = useRef(null);

  useEffect(() => {
    let frame;
    let t = 0;

    const animate = () => {
      t += 0.003;
      const rig = rigRef.current;
      if (!rig) return;

      // Outer orbit cards
      const outerCards = rig.querySelectorAll(".orbit-card-outer");
      outerCards.forEach((card, i) => {
        const baseAngle = (i / outerCards.length) * Math.PI * 2;
        const angle = baseAngle + t;
        const rx = 190, ry = 145;
        const x = Math.cos(angle) * rx;
        const y = Math.sin(angle) * ry;
        card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        // Depth effect: scale and opacity based on Y
        const depth = (Math.sin(angle) + 1) / 2;
        card.style.opacity = 0.5 + depth * 0.5;
        card.style.zIndex = Math.round(depth * 10);
      });

      // Inner orbit cards
      const innerCards = rig.querySelectorAll(".orbit-card-inner");
      innerCards.forEach((card, i) => {
        const baseAngle = (i / innerCards.length) * Math.PI * 2;
        const angle = baseAngle - t * 1.4; // counter-rotate
        const rx = 105, ry = 80;
        const x = Math.cos(angle) * rx;
        const y = Math.sin(angle) * ry;
        card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        const depth = (Math.sin(angle) + 1) / 2;
        card.style.opacity = 0.45 + depth * 0.55;
        card.style.zIndex = Math.round(depth * 10);
      });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="orbital-rig" ref={rigRef}>
      {/* Orbit rings */}
      <div className="orbit-ring orbit-ring-outer" />
      <div className="orbit-ring orbit-ring-inner" />

      {/* Center core */}
      <div className="orbit-core">
        <div className="orbit-core-pulse" />
        <span className="orbit-core-icon">💻</span>
      </div>

      {/* Outer orbit cards */}
      {orbitSkills.map((skill, i) => (
        <div
          className="orbit-card orbit-card-outer"
          key={`outer-${i}`}
          style={{ "--accent": skill.color }}
        >
          <span className="orbit-card-icon">{skill.icon}</span>
          <span className="orbit-card-name">{skill.name}</span>
        </div>
      ))}

      {/* Inner orbit cards */}
      {innerSkills.map((skill, i) => (
        <div
          className="orbit-card orbit-card-inner"
          key={`inner-${i}`}
          style={{ "--accent": skill.color }}
        >
          <span className="orbit-card-icon" style={{ fontSize: "1rem" }}>{skill.icon}</span>
          <span className="orbit-card-name" style={{ fontSize: "0.6rem" }}>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      child.style.animationDelay = `${i * 0.15}s`;
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .hero-section {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 10% 80px;
          gap: 40px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Background effects */
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 70% at 70% 40%, rgba(49,130,206,0.1) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 20% 80%, rgba(99,179,237,0.06) 0%, transparent 55%);
          animation: hero-bg-shift 10s ease-in-out infinite alternate;
        }

        @keyframes hero-bg-shift {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        .hero-grid-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(99,179,237,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 80%);
        }

        /* ── Left content column ── */
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99,179,237,0.1);
          border: 1px solid rgba(99,179,237,0.25);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.75rem;
          color: #90cdf4;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          font-weight: 500;
          margin-bottom: 28px;
        }

        .hero-tag-dot {
          width: 6px;
          height: 6px;
          background: #63b3ed;
          border-radius: 50%;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 5.5vw, 5rem);
          line-height: 1.02;
          letter-spacing: -2px;
          color: #fff;
          margin-bottom: 6px;
        }

        .hero-name .accent {
          background: linear-gradient(135deg, #63b3ed 0%, #90cdf4 50%, #3182ce 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-role {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 1.9rem);
          font-weight: 600;
          color: rgba(255,255,255,0.3);
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .hero-role .highlight { color: rgba(99,179,237,0.65); }

        .hero-desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          max-width: 500px;
          font-weight: 300;
          margin-bottom: 44px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 56px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 30px;
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff;
          text-decoration: none;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(49,130,206,0.35);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(49,130,206,0.5);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          border: 1px solid rgba(255,255,255,0.12);
          transition: all 0.25s ease;
        }

        .hero-btn-secondary:hover {
          color: #fff;
          border-color: rgba(99,179,237,0.4);
          background: rgba(99,179,237,0.06);
        }

        .hero-stats {
          display: flex;
          gap: 36px;
          padding-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-wrap: wrap;
        }

        .hero-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.7rem;
          font-weight: 700;
          color: #63b3ed;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.5px;
          margin-top: 4px;
        }

        /* Animate in */
        .hero-animate {
          opacity: 0;
          transform: translateY(28px);
          animation: hero-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes hero-in {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Right orbital column ── */
        .hero-visual {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 500px;
        }

        /* Orbital rig */
        .orbital-rig {
          position: relative;
          width: 420px;
          height: 420px;
          flex-shrink: 0;
        }

        /* Elliptical orbit rings */
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(99,179,237,0.1);
          pointer-events: none;
        }

        .orbit-ring-outer {
          width: 400px;
          height: 302px;
          border-style: dashed;
        }

        .orbit-ring-inner {
          width: 222px;
          height: 168px;
          border-color: rgba(99,179,237,0.07);
        }

        /* Center core */
        .orbit-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(49,130,206,0.25) 0%, rgba(8,12,24,0.8) 70%);
          border: 1px solid rgba(99,179,237,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          z-index: 5;
          box-shadow: 0 0 32px rgba(99,179,237,0.2), inset 0 0 20px rgba(99,179,237,0.05);
        }

        .orbit-core-pulse {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px solid rgba(99,179,237,0.2);
          animation: core-pulse 2.4s ease-in-out infinite;
        }

        @keyframes core-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.15; }
        }

        .orbit-core-icon {
          font-size: 1.8rem;
          position: relative;
          z-index: 1;
        }

        /* Orbit cards */
        .orbit-card {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          background: rgba(8,12,24,0.85);
          border: 1px solid color-mix(in srgb, var(--accent) 30%, rgba(255,255,255,0.06));
          border-radius: 14px;
          padding: 10px 14px;
          min-width: 64px;
          backdrop-filter: blur(12px);
          transition: opacity 0.1s linear;
          cursor: default;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          will-change: transform, opacity;
        }

        .orbit-card:hover {
          background: rgba(20,30,55,0.95);
          border-color: color-mix(in srgb, var(--accent) 60%, rgba(255,255,255,0.1));
          box-shadow: 0 8px 28px rgba(0,0,0,0.5), 0 0 16px color-mix(in srgb, var(--accent) 20%, transparent);
        }

        .orbit-card-icon {
          font-size: 1.3rem;
          line-height: 1;
        }

        .orbit-card-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          white-space: nowrap;
          letter-spacing: 0.3px;
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 2;
          animation: scroll-fade-in 1.2s ease 1.8s both;
        }

        @keyframes scroll-fade-in {
          from { opacity: 0; transform: translateX(-50%) translateY(10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* Mouse body */
        .hero-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid rgba(99,179,237,0.45);
          border-radius: 12px;
          position: relative;
          display: flex;
          justify-content: center;
          padding-top: 6px;
          box-shadow: 0 0 12px rgba(99,179,237,0.15), inset 0 0 8px rgba(99,179,237,0.04);
          animation: mouse-glow 2.4s ease-in-out infinite;
        }

        @keyframes mouse-glow {
          0%, 100% { border-color: rgba(99,179,237,0.35); box-shadow: 0 0 10px rgba(99,179,237,0.1); }
          50%       { border-color: rgba(99,179,237,0.7);  box-shadow: 0 0 18px rgba(99,179,237,0.28); }
        }

        /* Scrolling wheel dot */
        .hero-mouse-wheel {
          width: 3px;
          height: 7px;
          background: #63b3ed;
          border-radius: 2px;
          animation: wheel-scroll 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes wheel-scroll {
          0%   { transform: translateY(0);   opacity: 1; }
          60%  { transform: translateY(10px); opacity: 0; }
          61%  { transform: translateY(0);   opacity: 0; }
          100% { transform: translateY(0);   opacity: 1; }
        }

        /* Chevron arrows */
        .hero-scroll-arrows {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .hero-scroll-arrows span {
          display: block;
          width: 8px;
          height: 8px;
          border-right: 1.5px solid rgba(99,179,237,0.5);
          border-bottom: 1.5px solid rgba(99,179,237,0.5);
          transform: rotate(45deg);
          animation: arrow-cascade 1.6s ease-in-out infinite;
        }

        .hero-scroll-arrows span:nth-child(1) { animation-delay: 0s;    opacity: 0.3; }
        .hero-scroll-arrows span:nth-child(2) { animation-delay: 0.2s;  opacity: 0.6; }
        .hero-scroll-arrows span:nth-child(3) { animation-delay: 0.4s;  opacity: 1;   }

        @keyframes arrow-cascade {
          0%, 100% { transform: rotate(45deg) translateY(0);   opacity: inherit; }
          50%       { transform: rotate(45deg) translateY(4px); opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            padding-top: 140px;
            text-align: center;
          }

          .hero-content { max-width: 100%; }
          .hero-desc { max-width: 100%; }
          .hero-tag { margin: 0 auto 28px; }
          .hero-actions { justify-content: center; }
          .hero-stats { justify-content: center; }

          .hero-visual {
            height: 360px;
          }

          .orbital-rig {
            width: 320px;
            height: 320px;
          }

          .orbit-ring-outer { width: 310px; height: 234px; }
          .orbit-ring-inner { width: 172px; height: 130px; }
        }

        @media (max-width: 640px) {
          .hero-visual { height: 300px; }
          .orbital-rig { width: 280px; height: 280px; }
          .orbit-ring-outer { width: 270px; height: 204px; }
          .orbit-ring-inner { width: 150px; height: 114px; }
        }
      `}</style>

      <section id="home" className="hero-section" ref={containerRef}>
        <div className="hero-bg" />
        <div className="hero-grid-dots" />

        {/* ── Left: Text content ── */}
        <div className="hero-content">
          <div className="hero-tag hero-animate">
            <span className="hero-tag-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name hero-animate">
            Hi, I'm<br />
            <span className="accent">Samin Shrestha</span>
          </h1>

          <p className="hero-role hero-animate">
            <span className="highlight">Django</span> Web Developer
          </p>

          <p className="hero-desc hero-animate">
            Computer Engineering student and passionate backend developer building
            modern, scalable web applications. I turn ideas into real-world solutions
            with clean code and thoughtful design.
          </p>

          <div className="hero-actions hero-animate">
            <a href="#projects" className="hero-btn-primary">
              View My Work ↗
            </a>
            <a href="#contact" className="hero-btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-stats hero-animate">
            <div>
              <div className="hero-stat-value">3+</div>
              <div className="hero-stat-label">Years Learning</div>
            </div>
            <div>
              <div className="hero-stat-value">6+</div>
              <div className="hero-stat-label">Projects Built</div>
            </div>
            <div>
              <div className="hero-stat-value">AI</div>
              <div className="hero-stat-label">& ML Experience</div>
            </div>
          </div>
        </div>

        {/* ── Right: Orbital visual ── */}
        <div className="hero-visual hero-animate">
          <OrbitalRig />
        </div>

        <div className="hero-scroll">
          <div className="hero-mouse">
            <div className="hero-mouse-wheel" />
          </div>
          <div className="hero-scroll-arrows">
            <span /><span /><span />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;