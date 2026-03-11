import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver — auto-update active link as user scrolls
  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          threshold: 0.3,
          rootMargin: "-80px 0px 0px 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const links = ["home", "about", "projects", "skills", "contact"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'DM Sans', sans-serif;
        }

        .nav-root.scrolled {
          background: rgba(8, 12, 24, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 179, 237, 0.1);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          color: #fff;
          letter-spacing: -0.5px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nav-logo-dot {
          width: 8px;
          height: 8px;
          background: #63b3ed;
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.6; }
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 4px;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links li a {
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.4px;
          text-transform: capitalize;
          padding: 8px 18px;
          border-radius: 100px;
          transition: color 0.25s ease, background 0.25s ease;
          position: relative;
          display: inline-block;
        }

        /* Sliding underline */
        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: calc(100% - 36px);
          height: 2px;
          background: linear-gradient(90deg, #3182ce, #63b3ed);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .nav-links li a:hover {
          color: rgba(255,255,255,0.85);
        }

        .nav-links li a:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Active state */
        .nav-links li a.active {
          color: #fff;
          background: rgba(99, 179, 237, 0.1);
        }

        .nav-links li a.active::after {
          transform: translateX(-50%) scaleX(1);
        }

        /* Contact CTA button */
        .nav-links li a.nav-cta {
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff !important;
          font-weight: 500;
          box-shadow: 0 4px 16px rgba(49,130,206,0.3);
          transition: all 0.25s ease;
        }

        .nav-links li a.nav-cta::after {
          display: none;
        }

        .nav-links li a.nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(49,130,206,0.45);
          background: linear-gradient(135deg, #2b77cb, #90cdf4);
        }

        .nav-links li a.nav-cta.active {
          background: linear-gradient(135deg, #3182ce, #63b3ed);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .hamburger:hover { background: rgba(255,255,255,0.08); }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 16px 24px 24px;
          background: rgba(8, 12, 24, 0.97);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(99, 179, 237, 0.1);
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-size: 1rem;
          padding: 12px 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
          text-transform: capitalize;
          font-family: 'DM Sans', sans-serif;
          position: relative;
        }

        .mobile-menu a.active {
          color: #63b3ed;
          background: rgba(99,179,237,0.08);
        }

        .mobile-menu a:hover { background: rgba(99,179,237,0.07); color: #63b3ed; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .nav-inner { padding: 16px 24px; }
        }
      `}</style>

      <nav className={`nav-root ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <span className="nav-logo-dot"></span>
            Samin Shrestha
          </a>

          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={`${active === link ? "active" : ""} ${link === "contact" ? "nav-cta" : ""}`}
                  onClick={() => setActive(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={active === link ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;