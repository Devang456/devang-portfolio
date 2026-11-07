import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Icon from '../components/common/Icons';
import { skillCategories } from '../data/skills';
import './Skills.css';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend Development':
        return <Icon name="react" size={24} />;
      case 'Backend Development':
        return <Icon name="nodejs" size={24} />;
      case 'Database':
        return <Icon name="mongodb" size={24} />;
      case 'Development Tools':
        return <Icon name="git" size={24} />;
      default:
        return <Icon name="code" size={24} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <Container>
        <SectionHeading
          badge="Verified Tech Stack"
          title="Core Technologies &"
          gradientWord="Technical Skills"
          description="A focused, verified skill set honed through dedicated project development, 6-month intensive MERN training, and internship experience."
        />

        <div className="skills-categories-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="card skill-category-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(cat.category)}
                </div>
                <div className="category-meta">
                  <h3 className="category-title">{cat.category}</h3>
                  <p className="category-subtitle">{cat.description}</p>
                </div>
              </div>

              <div className="category-skills-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-card-item">
                    <div className="skill-icon-pill">
                      <Icon name={skill.icon} size={20} />
                    </div>
                    <div className="skill-info">
                      <div className="skill-title-row">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note */}
        <div className="skills-honest-banner">
          <span className="banner-icon">💡</span>
          <p className="banner-text">
            <strong>Honest Skill Policy:</strong> No artificial percentages or unverified technologies. Every tool listed is actively used in my production-deployed projects or repositories.
          </p>
        </div>
      </Container>
    </section>
  );
}
