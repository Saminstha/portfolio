import { useEffect, useRef } from "react";

function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Stagger children animations
    const children = el.querySelectorAll(".hero-animate");
    children.forEach((child, i) => {
      child.style.animationDelay = `${i * 0.18}s`;
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 10% 80px;
          font-family: 'DM Sans', sans-serif;
        }

        /* Animated mesh background */
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(49, 130, 206, 0.12) 0%, transparent 70%),
            radial-gradient(ellipse 50% 80% at 20% 80%, rgba(99, 179, 237, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 85% 10%, rgba(99, 179, 237, 0.08) 0%, transparent 50%);
          animation: hero-bg-shift 10s ease-in-out infinite alternate;
        }

        @keyframes hero-bg-shift {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.03); }
        }

        /* Grid dots pattern */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(99,179,237,0.15) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%);
        }

        /* Floating orbs */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          animation: orb-float 8s ease-in-out infinite;
        }

        .hero-orb-1 {
          width: 400px; height: 400px;
          background: #3182ce;
          top: -80px; right: 5%;
          animation-delay: 0s;
        }

        .hero-orb-2 {
          width: 250px; height: 250px;
          background: #63b3ed;
          bottom: 10%; left: -60px;
          animation-delay: -3s;
          animation-duration: 11s;
        }

        @keyframes orb-float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 20px) scale(0.97); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(99, 179, 237, 0.1);
          border: 1px solid rgba(99, 179, 237, 0.25);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.8rem;
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
          font-size: clamp(3rem, 7vw, 5.5rem);
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

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 600;
          color: rgba(255,255,255,0.35);
          letter-spacing: -0.5px;
          margin-bottom: 28px;
        }

        .hero-title .highlight {
          color: rgba(99, 179, 237, 0.7);
        }

        .hero-desc {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          max-width: 560px;
          font-weight: 300;
          margin-bottom: 48px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff;
          text-decoration: none;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 32px rgba(49, 130, 206, 0.35);
          position: relative;
          overflow: hidden;
        }

        .hero-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(49, 130, 206, 0.5);
        }

        .hero-btn-primary:hover::after { opacity: 1; }

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
          border-color: rgba(99, 179, 237, 0.4);
          background: rgba(99, 179, 237, 0.06);
        }

        .hero-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }

        .hero-btn-primary:hover .hero-arrow { transform: translate(3px, -1px); }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.25);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(99,179,237,0.5), transparent);
          animation: scroll-bounce 2s ease-in-out infinite;
        }

        @keyframes scroll-bounce {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(0.6); opacity: 1; }
        }

        /* Animate in */
        .hero-animate {
          opacity: 0;
          transform: translateY(30px);
          animation: hero-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes hero-in {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Stats row */
        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-wrap: wrap;
        }

        .hero-stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #63b3ed;
          line-height: 1;
        }

        .hero-stat-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px;
          margin-top: 4px;
        }
      `}</style>

      <section id="home" className="hero-section" ref={containerRef}>
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>

        <div className="hero-content">
          <div className="hero-tag hero-animate">
            <span className="hero-tag-dot"></span>
            Available for opportunities
          </div>

          <h1 className="hero-name hero-animate">
            Hi, I'm<br />
            <span className="accent">Samin Shrestha</span>
          </h1>

          <p className="hero-title hero-animate">
            <span className="highlight">Django</span> Web Developer
          </p>

          <p className="hero-desc hero-animate">
            Computer Engineering student and passionate backend developer building
            modern, scalable web applications. I turn ideas into real-world solutions
            with clean code and thoughtful design.
          </p>

          <div className="hero-actions hero-animate">
            <a href="#projects" className="hero-btn-primary">
              View My Work <span className="hero-arrow">↗</span>
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
              <div className="hero-stat-value">5+</div>
              <div className="hero-stat-label">Projects Built</div>
            </div>
            <div>
              <div className="hero-stat-value">AI</div>
              <div className="hero-stat-label">& ML Experience</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          scroll
        </div>
      </section>
    </>
  );
}

export default Hero;