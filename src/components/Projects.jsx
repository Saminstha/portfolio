import { Github } from "lucide-react";

const projects = [
  {
    title: "Automatic Number Plate Recognition",
    category: "Computer Vision · AI",
    description:
      "Built a computer vision system using YOLO to detect vehicle license plates in real-time and automatically extract plate numbers from images.",
    tech: ["Python", "YOLO", "OpenCV", "Deep Learning"],
    github: "https://github.com/Saminstha/automatic-number-plate-detection",
    icon: "🚗",
    color: "rgba(99,179,237,0.08)",
    accent: "#63b3ed",
    ongoing: false,
  },
  {
    title: "Instagram Clone",
    category: "Full-Stack · Social",
    description:
      "A social media web application built with Django where users can create accounts, upload posts, follow other users, like and comment on posts in a dynamic feed.",
    tech: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/Saminstha/instaclone-django",
    icon: "📸",
    color: "rgba(154,120,255,0.08)",
    accent: "#9a78ff",
    ongoing: false,
  },
  {
    title: "Student Management System",
    category: "Web App · Backend",
    description:
      "A web-based system developed to manage student records, including adding, updating, and tracking academic information in an organized database-driven platform.",
    tech: ["Django", "Python", "SQLite", "HTML/CSS"],
    github: "https://github.com/Saminstha/student-management-system",
    icon: "🎓",
    color: "rgba(72,187,120,0.08)",
    accent: "#48bb78",
    ongoing: false,
  },
  {
    title: "News Portal Web Application",
    category: "Full-Stack · CMS",
    description:
      "A full-stack news portal built using Django that allows users to browse news articles organized by categories with a dynamic content management system and responsive interface.",
    tech: ["Django", "Python", "CMS", "Bootstrap"],
    github: "https://github.com/Saminstha/News_portal",
    icon: "📰",
    color: "rgba(251,191,36,0.08)",
    accent: "#fbbf24",
    ongoing: false,
  },
  {
    title: "Event Manager Web Application",
    category: "Web App · Management",
    description:
      "A Django-based event management system that allows users to create, manage, and track events with features like event scheduling, attendance tracking, and a responsive UI.",
    tech: ["Django", "Python", "SQLite", "HTML/CSS"],
    github: "https://github.com/Saminstha/event_manager",
    icon: "📅",
    color: "rgba(249,115,22,0.08)",
    accent: "#f97316",
    ongoing: false,
  },
  {
    title: "VioLens: Real-time Violence Detection System",
    category: "AI · Surveillance",
    description:
      "An AI-powered surveillance system that detects violent activities in real-time using CNN and LSTM models. The system analyzes CCTV footage to identify suspicious behavior and trigger alerts, helping improve public safety and security monitoring.",
    tech: ["Python", "CNN", "LSTM", "Deep Learning", "OpenCV"],
    github: "https://github.com/Saminstha",
    icon: "🛡️",
    color: "rgba(239,68,68,0.08)",
    accent: "#ef4444",
    ongoing: true,
  },
];

function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .projects-section {
          padding: 120px 10%;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: 'WORK';
          position: absolute;
          top: 60px;
          left: -20px;
          font-family: 'Syne', sans-serif;
          font-size: 10rem;
          font-weight: 800;
          color: rgba(99,179,237,0.025);
          letter-spacing: -4px;
          pointer-events: none;
          user-select: none;
        }

        .projects-header {
          margin-bottom: 72px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 24px;
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

        .projects-count {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .project-grid-new {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card-new {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        .project-card-new:hover {
          transform: translateY(-6px);
          border-color: rgba(99,179,237,0.2);
          box-shadow: 0 24px 60px rgba(0,0,0,0.3);
        }

        /* Ongoing card special border pulse */
        .project-card-new.ongoing {
          border-color: rgba(239,68,68,0.25);
        }

        .project-card-new.ongoing:hover {
          border-color: rgba(239,68,68,0.45);
          box-shadow: 0 24px 60px rgba(239,68,68,0.12);
        }

        /* Ongoing badge */
        .ongoing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          color: #fca5a5;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
          width: fit-content;
        }

        .ongoing-dot {
          width: 6px;
          height: 6px;
          background: #ef4444;
          border-radius: 50%;
          animation: ongoing-pulse 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes ongoing-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .project-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          flex-shrink: 0;
        }

        .project-category {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 1px;
          text-transform: uppercase;
          text-align: right;
          margin-top: 4px;
          line-height: 1.6;
        }

        .project-title-new {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.3px;
          line-height: 1.3;
        }

        .project-desc-new {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.42);
          line-height: 1.8;
          font-weight: 300;
          flex: 1;
        }

        .project-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tag {
          font-size: 0.7rem;
          padding: 4px 12px;
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.3px;
          font-weight: 400;
          transition: all 0.2s ease;
        }

        .project-card-new:hover .project-tag {
          border-color: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.65);
        }

        .project-footer {
          display: flex;
          gap: 12px;
          padding-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.25s ease;
        }

        .project-link:hover {
          color: #fff;
          border-color: rgba(99,179,237,0.35);
          background: rgba(99,179,237,0.08);
        }

        .project-link-primary {
          background: rgba(99,179,237,0.1);
          border-color: rgba(99,179,237,0.2);
          color: #90cdf4;
        }

        .project-link-primary:hover {
          background: rgba(99,179,237,0.18);
          color: #fff;
        }

        .project-number {
          position: absolute;
          top: 16px;
          right: 20px;
          font-family: 'Syne', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.02);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        @media (max-width: 1024px) {
          .project-grid-new { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .project-grid-new { grid-template-columns: 1fr; }
          .projects-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-header">
          <div>
            <div className="section-eyebrow">My Work</div>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-count">{projects.length} projects</div>
        </div>

        <div className="project-grid-new">
          {projects.map((project, i) => (
            <div
              className={`project-card-new ${project.ongoing ? "ongoing" : ""}`}
              key={i}
              style={{
                background: `linear-gradient(135deg, ${project.color}, rgba(255,255,255,0.01))`,
              }}
            >
              <div className="project-number">0{i + 1}</div>

              <div className="project-top">
                <div
                  className="project-icon-box"
                  style={{
                    background: project.color,
                    borderColor: `${project.accent}30`,
                  }}
                >
                  {project.icon}
                </div>
                <div className="project-category">
                  {project.category.split(" · ").map((c, j) => (
                    <div key={j}>{c}</div>
                  ))}
                </div>
              </div>

              {project.ongoing && (
                <div className="ongoing-badge">
                  <span className="ongoing-dot" />
                  In Progress
                </div>
              )}

              <div className="project-title-new">{project.title}</div>
              <div className="project-desc-new">{project.description}</div>

              <div className="project-tech-stack">
                {project.tech.map((t, j) => (
                  <span className="project-tag" key={j}>{t}</span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-primary"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;