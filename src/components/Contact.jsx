import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, Github, Linkedin, Instagram, Facebook, Send, ArrowUpRight } from "lucide-react";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  const socials = [
    { icon: <Github size={18} />, href: "https://github.com/Saminstha", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/samin-shrestha-553567236", label: "LinkedIn" },
    { icon: <Facebook size={18} />, href: "https://facebook.com/samiin.shrestha", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/_samiin_10/", label: "Instagram" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section {
          padding: 120px 10% 80px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: 'HELLO';
          position: absolute;
          top: 50px;
          right: -40px;
          font-family: 'Syne', sans-serif;
          font-size: 10rem;
          font-weight: 800;
          color: rgba(99,179,237,0.025);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        /* Glow background */
        .contact-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(49,130,206,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-header {
          margin-bottom: 72px;
          text-align: center;
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
          margin-bottom: 16px;
        }

        .contact-subtitle {
          font-size: 1rem;
          color: rgba(255,255,255,0.38);
          font-weight: 300;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 60px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* Left info panel */
        .contact-info-panel {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .contact-info-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          border-color: rgba(99,179,237,0.2);
          background: rgba(99,179,237,0.04);
        }

        .contact-info-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.25);
          margin-bottom: 16px;
          font-weight: 600;
        }

        .contact-info-row {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          padding: 8px 0;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        a.contact-info-row:hover { color: #90cdf4; }

        .contact-info-icon {
          width: 34px;
          height: 34px;
          background: rgba(99,179,237,0.08);
          border: 1px solid rgba(99,179,237,0.12);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #63b3ed;
          flex-shrink: 0;
        }

        /* Social links */
        .socials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          font-size: 0.82rem;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .social-card:hover {
          background: rgba(99,179,237,0.08);
          border-color: rgba(99,179,237,0.25);
          color: #90cdf4;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .social-card-icon {
          color: rgba(255,255,255,0.35);
          transition: color 0.25s ease;
        }

        .social-card:hover .social-card-icon { color: #63b3ed; }

        /* Right form panel */
        .contact-form-panel {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 40px;
        }

        .contact-form-new {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-size: 0.72rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-weight: 500;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          outline: none;
          transition: all 0.25s ease;
          resize: none;
          box-sizing: border-box;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(99,179,237,0.45);
          background: rgba(99,179,237,0.04);
          box-shadow: 0 0 0 4px rgba(99,179,237,0.07);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255,255,255,0.18);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #3182ce, #63b3ed);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(49, 130, 206, 0.3);
          letter-spacing: 0.3px;
          margin-top: 8px;
        }

        .form-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(49, 130, 206, 0.45);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-submit.loading {
          background: rgba(49,130,206,0.5);
        }

        /* Status messages */
        .status-msg {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: status-in 0.3s ease;
        }

        @keyframes status-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .status-success {
          background: rgba(72, 187, 120, 0.1);
          border: 1px solid rgba(72, 187, 120, 0.25);
          color: #68d391;
        }

        .status-error {
          background: rgba(245, 101, 101, 0.1);
          border: 1px solid rgba(245, 101, 101, 0.2);
          color: #fc8181;
        }

        /* Spin animation for loading */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* Footer strip */
        .contact-footer {
          margin-top: 80px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .contact-footer-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.2);
          font-weight: 300;
        }

        .contact-footer-text span {
          color: rgba(99,179,237,0.5);
        }

        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; gap: 40px; }
          .contact-header { text-align: left; }
          .contact-subtitle { margin: 0; }
          .form-row { grid-template-columns: 1fr; }
          .contact-form-panel { padding: 28px 24px; }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-glow" />

        <div className="contact-header">
          <div className="section-eyebrow">Reach Out</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info-panel">
            <div className="contact-info-card">
              <div className="contact-info-card-title">Direct Contact</div>
              <a href="tel:+9779843473968" className="contact-info-row">
                <div className="contact-info-icon"><Phone size={15} /></div>
                +977-9843473968
              </a>
              <a href="mailto:saminshrestha7@gmail.com" className="contact-info-row">
                <div className="contact-info-icon"><Mail size={15} /></div>
                saminshrestha7@gmail.com
              </a>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card-title">Follow Me</div>
              <div className="socials-grid">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-card">
                    <span className="social-card-icon">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-panel">
            <form ref={form} onSubmit={sendEmail} className="contact-form-new">
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Your Name</label>
                  <input className="form-input" type="text" name="name" placeholder="Samin Shrestha" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Your Email</label>
                  <input className="form-input" type="email" name="email" placeholder="hello@example.com" required />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              {status === "success" && (
                <div className="status-msg status-success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="status-msg status-error">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button type="submit" className={`form-submit ${loading ? "loading" : ""}`} disabled={loading}>
                {loading ? (
                  <><div className="spinner" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <div className="contact-footer-text">
            © 2025 <span>Samin Shrestha</span>. Designed & Built with ❤️
          </div>
          <div className="contact-footer-text">
            Computer Engineering Student · <span>Django Developer</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;