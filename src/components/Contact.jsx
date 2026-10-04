import './Contact.css';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-content">
        <p className="contact-text">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal,
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <a href="mailto:aagamjn13@gmail.com" className="btn btn-primary contact-btn">
          Say Hello
        </a>

        <div className="contact-info">
          <div className="info-item">
            <Mail className="info-icon" />
            <span>aagamjn13@gmail.com</span>
          </div>
          <div className="info-item">
            <Phone className="info-icon" />
            <span>+91-9753426424</span>
          </div>
        </div>

        <div className="contact-socials">
          <a href="https://github.com/aagamjn13" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/aagam-jain-10226831a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>Designed & Built by Aagam Jain</p>
      </footer>
    </section>
  );
};

export default Contact;
