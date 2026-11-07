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
    subject: 'MERN Stack Opportunity / Interview Request',
    message: 'Hi Devang, I reviewed your Solar Management System and developer portfolio, and I would like to discuss an opportunity with you.'
  });
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

  // Launch directly in Gmail in browser (100% reliable)
  const handleOpenGmail = (e) => {
    if (e) e.preventDefault();
    const { subject, body } = getEncodedMailData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setLaunchedNotice(true);
  };

  // Launch in desktop email client (Outlook, Windows Mail, Apple Mail)
  const handleOpenMailto = (e) => {
    if (e) e.preventDefault();
    const { subject, body } = getEncodedMailData();
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setLaunchedNotice(true);
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
              Write your message below. Click <strong>&quot;Open &amp; Send in Gmail&quot;</strong> to instantly open Gmail in your browser with everything pre-filled!
            </p>

            {launchedNotice && (
              <div className="sent-notification-banner">
                <span className="notif-icon">✓</span>
                <div>
                  <strong>Email Composer Launched!</strong>
                  <p>Your email service was opened with your message. You can also send directly to <code>{personalInfo.email}</code>.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleOpenGmail} className="contact-form">
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
                    placeholder="Enter your name or company"
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
                    placeholder="Enter your email to get reply"
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
                {/* 1. Primary: Direct Gmail in Browser */}
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={<Icon name="mail" size={16} />}
                >
                  Open &amp; Send in Gmail
                </Button>

                {/* 2. Secondary: Desktop Email Client */}
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  onClick={handleOpenMailto}
                  icon={<Icon name="externallink" size={14} />}
                >
                  Default Mail App (Outlook)
                </Button>

                {/* 3. Copy Formatted Message */}
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
