import { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Icon from '../components/common/Icons';
import { personalInfo } from '../data/personalInfo';
import './Contact.css';

const MESSAGE_TEMPLATES = [
  {
    icon: 'briefcase',
    label: 'Full-Time Role',
    subject: 'MERN Stack Developer Opportunity - Interview Request',
    message: 'Hi Devang, I reviewed your portfolio and Solar Management System. We have an open MERN Stack Developer role and would like to connect for an interview.'
  },
  {
    icon: 'rocket',
    label: 'Project / Freelance',
    subject: 'Web Application Development Inquiry',
    message: 'Hi Devang, I reviewed your developer portfolio and projects. We have a web application requirement and would like to discuss the scope and timeline with you.'
  },
  {
    icon: 'message',
    label: 'Quick Connect',
    subject: 'Connecting via Developer Portfolio / Networking',
    message: 'Hi Devang, I came across your developer portfolio and loved your work. I would love to connect with you on LinkedIn and stay in touch.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: MESSAGE_TEMPLATES[0].subject,
    message: MESSAGE_TEMPLATES[0].message
  });
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [launchedNotice, setLaunchedNotice] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
      } else if (type === 'message') {
        setCopiedMessage(true);
        setTimeout(() => setCopiedMessage(false), 2500);
      }
    });
  };

  const handleSelectTemplate = (index) => {
    setActiveTemplate(index);
    setFormData((prev) => ({
      ...prev,
      subject: MESSAGE_TEMPLATES[index].subject,
      message: MESSAGE_TEMPLATES[index].message
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getEncodedMailData = () => {
    const sender = formData.name.trim() || 'Recruiter / Hiring Manager';
    const emailInfo = formData.email.trim() ? `\nReply-To: ${formData.email.trim()}` : '';
    const subject = encodeURIComponent(
      formData.subject.trim() || `[Portfolio Inquiry] Message from ${sender}`
    );
    const body = encodeURIComponent(
      `${formData.message.trim()}\n\n---\nSent by: ${sender}${emailInfo}\nSent via Devang Parmar Portfolio`
    );

    return { subject, body };
  };

  // Launch email composer with pre-filled details
  const handleSendMessage = (e) => {
    if (e) e.preventDefault();
    const { subject, body } = getEncodedMailData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setLaunchedNotice(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <SectionHeading
          badge="Direct Channels"
          title="Let's Build Something"
          gradientWord="Great Together."
          description="I am actively seeking full-time fresher MERN Stack Developer roles. Feel free to reach out directly via email, phone, or LinkedIn."
        />

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact Methods & Info */}
          <div className="card contact-cards-col">
            <h3 className="contact-col-heading">
              <span>Get in Touch Directly</span>
            </h3>
            <p className="contact-col-intro">
              Whether you have an open position, a project requirement, or want to review my code, I respond promptly.
            </p>

            <div className="contact-channels-list">
              {/* Email Card */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Icon name="mail" size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email Address</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-link">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  <Icon name={copiedEmail ? 'check' : 'copy'} size={16} />
                  <span className="btn-label">{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Icon name="phone" size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Phone & WhatsApp</span>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-link">
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  <Icon name={copiedPhone ? 'check' : 'copy'} size={16} />
                  <span className="btn-label">{copiedPhone ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Location Card */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Icon name="location" size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Current Location</span>
                  <span className="channel-val">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Connection Pills */}
            <div className="contact-social-section">
              <span className="social-section-title">Verified Developer Profiles:</span>
              <div className="contact-social-buttons">
                <a
                  href={personalInfo.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <Icon name="github" size={16} />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={personalInfo.socialLinks[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <Icon name="linkedin" size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-Configured Message Composer */}
          <div className="card contact-form-card">
            <h3 className="contact-col-heading">
              <span>Send a Message</span>
            </h3>
            <p className="contact-col-intro">
              Select a quick template or write your message below. Clicking <strong>&quot;Send Message&quot;</strong> opens your email composer with everything pre-filled!
            </p>

            {/* Quick Template Selector Chips */}
            <div className="template-chips-section">
              <span className="template-label">Quick Templates:</span>
              <div className="template-chips-row">
                {MESSAGE_TEMPLATES.map((tmpl, idx) => (
                  <button
                    key={tmpl.label}
                    type="button"
                    className={`template-chip ${activeTemplate === idx ? 'active' : ''}`}
                    onClick={() => handleSelectTemplate(idx)}
                  >
                    <Icon name={tmpl.icon} size={14} />
                    <span>{tmpl.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {launchedNotice && (
              <div className="sent-notification-banner">
                <span className="notif-icon">✓</span>
                <div>
                  <strong>Email Composer Launched!</strong>
                  <p>Your email service was opened with your message. You can also write directly to <code>{personalInfo.email}</code>.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. Recruiter / HR Manager"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email (Optional)
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. recruiter@company.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Subject of your message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="form-actions-row">
                {/* 1. Primary: Direct Send Message */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Icon name="mail" size={16} />}
                >
                  Send Message
                </Button>

                {/* 2. Copy Formatted Message */}
                <button
                  type="button"
                  className="copy-msg-btn"
                  onClick={() => handleCopy(formData.message, 'message')}
                  title="Copy message to clipboard"
                >
                  <Icon name={copiedMessage ? 'check' : 'copy'} size={14} />
                  <span>{copiedMessage ? 'Copied Message!' : 'Copy Message'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
