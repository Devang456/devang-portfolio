import { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Icon from '../components/common/Icons';
import SolarMockup from '../components/projects/SolarMockup';
import ChatMockup from '../components/projects/ChatMockup';
import ProjectModal from '../components/projects/ProjectModal';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const solarProject = projects.find((p) => p.id === 'solar-management-system') || projects[0];
  const instantTalkProject = projects.find((p) => p.id === 'instant-talk') || projects[1];

  const handleOpenDetails = (proj) => {
    setSelectedProject(proj);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section projects-section">
      <Container>
        <SectionHeading
          badge="Featured Engineering"
          title="Production Projects &"
          gradientWord="Code Artifacts"
          description="Real-world full-stack MERN applications architected with modern industry standards, clean APIs, and verified repositories."
        />

        <div className="projects-showcase-flow">
          {/* PRIMARY FEATURED PROJECT: Solar Management System */}
          <div className="card primary-project-card">
            <div className="primary-project-grid">
              {/* Left Column: Project Details */}
              <div className="primary-project-info">
                <div className="project-badge-row">
                  <span className="badge">
                    <span className="badge-dot"></span>
                    {solarProject.statusBadge}
                  </span>
                  <span className="flagship-chip">PRIMARY FEATURED PROJECT</span>
                </div>

                <h3 className="primary-title">{solarProject.title}</h3>
                <h4 className="primary-subtitle">{solarProject.subtitle}</h4>

                <p className="primary-tagline">&ldquo;{solarProject.tagline}&rdquo;</p>

                <p className="primary-desc">{solarProject.description}</p>

                {/* Key Highlight Bullets */}
                <div className="project-feature-bullets">
                  <span className="bullet-title">Architectural Highlights:</span>
                  <ul className="bullets-list">
                    <li>Architected complete backend services from scratch using Node.js & Express.</li>
                    <li>Integrated real-time IoT energy tracking & interactive React telemetry dashboards.</li>
                    <li>Designed normalized MongoDB schemas with optimized query performance.</li>
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {solarProject.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="primary-actions">
                  <Button
                    href={solarProject.liveUrl}
                    variant="primary"
                    size="md"
                    target="_blank"
                    icon={<Icon name="externallink" size={16} />}
                    iconPosition="right"
                  >
                    Launch Live Demo
                  </Button>

                  <Button
                    href={solarProject.githubUrl}
                    variant="secondary"
                    size="md"
                    target="_blank"
                    icon={<Icon name="github" size={16} />}
                  >
                    GitHub Repository
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => handleOpenDetails(solarProject)}
                    icon={<Icon name="eye" size={16} />}
                  >
                    View Details
                  </Button>
                </div>
              </div>

              {/* Right Column: Interactive Browser Mockup */}
              <div className="primary-project-mockup">
                <SolarMockup onOpenDetails={() => handleOpenDetails(solarProject)} />
                <p className="mockup-caption">
                  <Icon name="check" size={14} /> Production deployment verified on Vercel
                </p>
              </div>
            </div>
          </div>

          {/* SECOND PROJECT: InstantTalk */}
          <div className="card secondary-project-card">
            <div className="secondary-project-grid">
              {/* Left Column: Chat Mockup */}
              <div className="secondary-project-mockup">
                <ChatMockup onOpenDetails={() => handleOpenDetails(instantTalkProject)} />
                <p className="mockup-caption">
                  <Icon name="git" size={14} /> Codebase available on GitHub • Ready for deployment
                </p>
              </div>

              {/* Right Column: Project Info */}
              <div className="secondary-project-info">
                <div className="project-badge-row">
                  <span className="badge">
                    <span className="badge-dot"></span>
                    {instantTalkProject.statusBadge}
                  </span>
                </div>

                <h3 className="primary-title">{instantTalkProject.title}</h3>
                <h4 className="primary-subtitle">{instantTalkProject.subtitle}</h4>

                <p className="primary-tagline">&ldquo;{instantTalkProject.tagline}&rdquo;</p>

                <p className="primary-desc">{instantTalkProject.description}</p>

                {/* Key Bullets */}
                <div className="project-feature-bullets">
                  <span className="bullet-title">Real-Time Capabilities:</span>
                  <ul className="bullets-list">
                    <li>Low-latency bidirectional messaging powered by WebSockets event loops.</li>
                    <li>JWT token authentication with Google OAuth integrations.</li>
                    <li>Live presence tracking, typing indicators, and message read receipts.</li>
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {instantTalkProject.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (Strictly NO fake live demo button) */}
                <div className="primary-actions">
                  <Button
                    href={instantTalkProject.githubUrl}
                    variant="primary"
                    size="md"
                    target="_blank"
                    icon={<Icon name="github" size={16} />}
                  >
                    Explore GitHub Code
                  </Button>

                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => handleOpenDetails(instantTalkProject)}
                    icon={<Icon name="eye" size={16} />}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Deep Dive */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseDetails} />
        )}
      </Container>
    </section>
  );
}
