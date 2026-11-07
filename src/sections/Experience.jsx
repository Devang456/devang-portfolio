import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icons';
import { timelineData } from '../data/timeline';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <Container>
        <SectionHeading
          badge="Practical Experience & Training"
          title="Hands-On Work &"
          gradientWord="Technical Training"
          description="Real-world engineering internships and intensive full-stack development coursework."
        />

        <div className="experience-timeline">
          {/* Virtual Height Internship */}
          {timelineData.experience.map((exp, idx) => (
            <div key={idx} className="card timeline-card">
              <div className="timeline-badge-pill">
                <span className="badge-type internship">{exp.type}</span>
                <span className="badge-period">{exp.period}</span>
              </div>

              <div className="timeline-entity-header">
                <div className="entity-icon-box">
                  <Icon name="briefcase" size={24} />
                </div>
                <div className="entity-titles">
                  <h3 className="entity-role">{exp.role}</h3>
                  <h4 className="entity-company">
                    {exp.company} <span className="entity-location">• {exp.location}</span>
                  </h4>
                </div>
              </div>

              <p className="entity-description">{exp.description}</p>

              <div className="entity-contributions">
                <span className="contributions-title">Key Contributions & Learnings:</span>
                <ul className="contributions-list">
                  {exp.points.map((pt, i) => (
                    <li key={i}>
                      <span className="contrib-bullet">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Ahmedabad Computer Education 6-Month Training */}
          {timelineData.training.map((trn, idx) => (
            <div key={idx} className="card timeline-card training-card">
              <div className="timeline-badge-pill">
                <span className="badge-type training">{trn.type}</span>
                <span className="badge-period">{trn.duration}</span>
              </div>

              <div className="timeline-entity-header">
                <div className="entity-icon-box training-icon">
                  <Icon name="code" size={24} />
                </div>
                <div className="entity-titles">
                  <h3 className="entity-role">{trn.course}</h3>
                  <h4 className="entity-company">
                    {trn.institute} <span className="entity-location">• {trn.location}</span>
                  </h4>
                </div>
              </div>

              <p className="entity-description">{trn.description}</p>

              <div className="entity-contributions">
                <span className="contributions-title">Curriculum & Project Competencies:</span>
                <ul className="contributions-list">
                  {trn.points.map((pt, i) => (
                    <li key={i}>
                      <span className="contrib-bullet">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
