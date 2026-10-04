import './Hero.css';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <h2 className="greeting">Hi, my name is</h2>
        <h1 className="name">Aagam Jain.</h1>
        <h1 className="subtitle">I build things for the web.</h1>
        <p className="description">
          I'm a B.Tech Electronics and Communication Engineering student at IIT (ISM) Dhanbad.
          I specialize in building full-stack applications and solving complex algorithmic problems.
        </p>

        <div className="cta-container">
          <a href="#projects" className="btn btn-primary">
            Check out my projects <ArrowRight size={20} />
          </a>
          <div className="social-links">
            <a href="https://github.com/aagamjn13" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aagam-jain-10226831a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:aagamjn13@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
