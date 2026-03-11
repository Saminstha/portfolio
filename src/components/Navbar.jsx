import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          position: relative;
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
          50% { transform: scale(1.4); opacity: 0.7; }
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 8px;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-size: 0.875rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          text-transform: capitalize;
          padding: 8px 16px;
          border-radius: 100px;
          transition: all 0.25s ease;
          position: relative;
          display: block;
        }

        .nav-links li a:hover,
        .nav-links li a.active {
          color: #fff;
          background: rgba(99, 179, 237, 0.12);
        }

        .nav-links li a.active {
          color: #63b3ed;
        }

        .nav-cta {
          padding: 9px 22px !important;
          background: linear-gradient(135deg, #63b3ed, #3182ce) !important;
          color: #fff !important;
          border-radius: 100px !important;
          font-weight: 500 !important;
        }

        .nav-cta:hover {
          background: linear-gradient(135deg, #90cdf4, #63b3ed) !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(99, 179, 237, 0.3) !important;
        }

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
          background: rgba(8, 12, 24, 0.95);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(99, 179, 237, 0.1);
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          padding: 12px 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
          text-transform: capitalize;
          font-family: 'DM Sans', sans-serif;
        }

        .mobile-menu a:hover { background: rgba(99,179,237,0.1); color: #63b3ed; }

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
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;