import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icons';
import { personalInfo } from '../data/personalInfo';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <Container>
        <SectionHeading
          badge="About Me"
          title="Driven by Code, Passionate About"
          gradientWord="Full-Stack Engineering"
          description="A dedicated fresher MERN Stack Developer building modern, maintainable web applications from Ahmedabad, Gujarat."
        />

        <div className="about-content-grid">
          {/* Main Narrative Card */}
          <div className="card about-story-card">
            <h3 className="about-subheading">
              <span className="subheading-tag">//</span> Background & Objective
            </h3>

            <div className="about-paragraphs">
              {personalInfo.aboutFull.map((para, idx) => (
                <p key={idx} className="about-text">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Meta Badges */}
            <div className="about-quick-specs">
              <div className="spec-item">
                <span className="spec-label">Degree</span>
                <span className="spec-val">BCA (2025)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">University</span>
                <span className="spec-val">C. U. Shah University</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Academic CGPA</span>
                <span className="spec-val highlight-val">7.11</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Primary Stack</span>
                <span className="spec-val highlight-val">MERN</span>
              </div>
            </div>
          </div>

          {/* Highlights & Strengths Side Column */}
          <div className="about-highlights-col">
            {personalInfo.highlights.map((item, idx) => (
              <div key={idx} className="card highlight-box">
                <div className="highlight-icon-box">
                  {idx === 0 && <Icon name="react" size={22} />}
                  {idx === 1 && <Icon name="briefcase" size={22} />}
                  {idx === 2 && <Icon name="check" size={22} />}
                </div>
                <div className="highlight-text-content">
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Recruiter Callout */}
            <div className="recruiter-pill-card">
              <span className="recruiter-icon">🎯</span>
              <div className="recruiter-text">
                <strong>Seeking Entry-Level / Junior MERN Roles</strong>
                <p>Ready to join immediately and hit the ground running with modern workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
