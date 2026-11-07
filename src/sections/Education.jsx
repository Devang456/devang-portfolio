import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icons';
import { timelineData } from '../data/timeline';
import './Education.css';

export default function Education() {
  const edu = timelineData.education[0];

  return (
    <section id="education" className="section education-section">
      <Container>
        <SectionHeading
          badge="Formal Education"
          title="Academic Credentials &"
          gradientWord="Foundations"
          description="Undergraduate degree in Computer Applications grounding full-stack development in core CS fundamentals."
        />

        <div className="education-card-wrapper">
          <div className="card education-card">
            {/* Year & CGPA pill */}
            <div className="edu-top-row">
              <span className="edu-year-badge">
                <Icon name="calendar" size={14} />
                <span>Class of {edu.year}</span>
              </span>
              <span className="edu-cgpa-badge">
                <span className="cgpa-label">Graduation Score:</span>
                <span className="cgpa-val">{edu.grade}</span>
              </span>
            </div>

            {/* University & Degree */}
            <div className="edu-main-row">
              <div className="edu-icon-circle">
                <Icon name="graduationcap" size={28} />
              </div>
              <div className="edu-headings">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-university">{edu.institution}</h4>
                <p className="edu-location">
                  <Icon name="location" size={14} />
                  <span>{edu.location}</span>
                </p>
              </div>
            </div>

            {/* Core Coursework & Foundations */}
            <div className="edu-coursework-box">
              <span className="coursework-title">Computer Science Foundations & Coursework:</span>
              <p className="coursework-desc">{edu.highlights}</p>

              <div className="coursework-chips">
                <span className="course-chip">Data Structures & Algorithms</span>
                <span className="course-chip">Database Management Systems (DBMS)</span>
                <span className="course-chip">Web Technologies</span>
                <span className="course-chip">Object-Oriented Programming (OOP)</span>
                <span className="course-chip">Operating Systems</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
