import { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Icon from '../components/common/Icons';
import { personalInfo } from '../data/personalInfo';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] Message from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open default mail client with pre-filled content
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <Container>
        <SectionHeading
          badge="Direct Channels"
          title="Let's Build Something"
          gradientWord="Great Together."
          description="I am actively seeking fresher MERN Stack Developer roles and internships. Feel free to reach out directly via email, phone, or LinkedIn."
        />

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact Methods & Info */}
          <div className="card contact-cards-col">
            <h3 className="contact-col-heading">
              <span>Get in Touch Directly</span>
            </h3>
            <p className="contact-col-intro">
              Whether you have an open position, an internship opportunity, or want to review my code, I respond promptly.
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
                  <span>GitHub (@Devang456)</span>
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
              Compose a message below. Submitting will launch your default email client with your message pre-formatted.
            </p>

            {sentNotice && (
              <div className="sent-notification-banner">
                <span className="notif-icon">✓</span>
                <div>
                  <strong>Email Client Launched!</strong>
                  <p>If your email client didn't open automatically, you can send an email directly to <code>{personalInfo.email}</code>.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. John Doe / Recruiter Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="MERN Stack Fresher Opportunity / Interview Request"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Hi Devang, we reviewed your Solar Management System and portfolio, and we would like to discuss a fresher MERN role..."
                ></textarea>
              </div>

              <div className="form-actions-row">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Icon name="mail" size={16} />}
                >
                  Send via Email Client
                </Button>

                <Button
                  href={`mailto:${personalInfo.email}`}
                  variant="secondary"
                  size="md"
                >
                  Quick Mailto Direct
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
