import myPhoto from "../assets/samin.png";

function About() {
  const highlights = [
    { icon: "🎓", label: "4th Year CE Student" },
    { icon: "⚙️", label: "Django & Python" },
    { icon: "🤖", label: "AI / ML Projects" },
    { icon: "🌐", label: "Full-Stack Builder" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .about-section {
          padding: 120px 10%;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: 'ABOUT';
          position: absolute;
          top: 60px;
          right: -20px;
          font-family: 'Syne', sans-serif;
          font-size: 10rem;
          font-weight: 800;
          color: rgba(99,179,237,0.03);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        .about-header {
          margin-bottom: 72px;
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

        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }

        /* Image column */
        .about-image-col {
          position: relative;
        }

        .about-img-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .about-img-wrapper::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, rgba(99,179,237,0.4), transparent 50%, rgba(49,130,206,0.2));
          border-radius: 20px;
          z-index: 0;
        }

        .about-img-wrapper::after {
          content: '';
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 80%;
          height: 80%;
          border: 1px solid rgba(99,179,237,0.15);
          border-radius: 20px;
          z-index: -1;
        }

        .about-img-wrapper img {
          width: 100%;
          max-width: 360px;
          height: 440px;
          object-fit: cover;
          object-position: top;
          border-radius: 18px;
          display: block;
          position: relative;
          z-index: 1;
          filter: grayscale(20%) contrast(1.05);
          transition: filter 0.4s ease;
        }

        .about-img-wrapper:hover img {
          filter: grayscale(0%) contrast(1.08);
        }

        /* Floating badge */
        .about-badge {
          position: absolute;
          bottom: 24px;
          right: -16px;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(99,179,237,0.2);
          padding: 14px 20px;
          border-radius: 14px;
          z-index: 2;
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .about-badge-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .about-badge-value {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #63b3ed;
          margin-top: 2px;
        }

        /* Text column */
        .about-text-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 8px;
        }

        .about-highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          transition: all 0.25s ease;
        }

        .about-highlight-item:hover {
          background: rgba(99,179,237,0.07);
          border-color: rgba(99,179,237,0.2);
          color: rgba(255,255,255,0.9);
          transform: translateY(-2px);
        }

        .about-highlight-icon {
          font-size: 1.1rem;
        }

        .about-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-paragraphs p {
          font-size: 0.97rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
        }

        .about-paragraphs p strong {
          color: rgba(255,255,255,0.85);
          font-weight: 500;
        }

        .about-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 8px;
        }

        .about-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 26px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .about-btn-primary {
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff;
          box-shadow: 0 6px 24px rgba(49, 130, 206, 0.3);
        }

        .about-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(49, 130, 206, 0.45);
        }

        .about-btn-ghost {
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .about-btn-ghost:hover {
          color: #fff;
          border-color: rgba(99,179,237,0.3);
          background: rgba(99,179,237,0.06);
        }

        @media (max-width: 900px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .about-img-wrapper img {
            max-width: 100%;
            height: 360px;
          }

          .about-badge { right: 16px; }

          .about-highlights {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .about-highlights { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-header">
          <div className="section-eyebrow">Who I am</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-layout">
          <div className="about-image-col">
            <div className="about-img-wrapper">
              <img src={myPhoto} alt="Samin Shrestha" />
              <div className="about-badge">
                <div className="about-badge-label">Currently</div>
                <div className="about-badge-value">4th Year CE</div>
              </div>
            </div>
          </div>

          <div className="about-text-col">
            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div className="about-highlight-item" key={i}>
                  <span className="about-highlight-icon">{h.icon}</span>
                  {h.label}
                </div>
              ))}
            </div>

            <div className="about-paragraphs">
              <p>
                I'm a <strong>fourth-year Computer Engineering student</strong> with a strong interest
                in web development and backend technologies. My primary stack includes
                <strong> Django, Python, Bootstrap</strong>, and modern web technologies.
              </p>
              <p>
                I enjoy building full-stack applications such as <strong>social media platforms</strong> and
                management systems, focusing on creating scalable and user-friendly web solutions.
              </p>
              <p>
                Beyond web development, I've explored <strong>Artificial Intelligence and
                Machine Learning</strong> — working with deep learning, computer vision, and
                real-time data analysis to build meaningful, intelligent systems.
              </p>
              <p>
                I'm always eager to learn new technologies and improve by working on
                practical projects that solve real-world problems.
              </p>
            </div>

            <div className="about-cta-row">
              <a href="#projects" className="about-btn about-btn-primary">View Projects ↗</a>
              <a href="#contact" className="about-btn about-btn-ghost">Let's Talk</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;