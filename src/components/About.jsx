import './About.css';
import { BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! My name is Aagam Jain, and I am passionate about competitive coding, problem-solving, and web development. 
            I love tackling algorithmic challenges and possess strong skills in Data Structures and Algorithms (DSA), which I 
            frequently apply in competitive programming platforms and real-world projects.
          </p>
          <p>
            My journey into software development started with a curiosity about how things work on the internet, which quickly
            evolved into building full-stack applications. Fast-forward to today, and I've had the privilege of building 
            dynamic web platforms, real-time multiplayer games, and complex management systems.
          </p>
          <p>
            When I'm not at the computer, you can find me participating in competitive sports like badminton, playing checkers, 
            or engaging in my university's Fintech and Photography clubs.
          </p>
        </div>

        <div className="about-education">
          <div className="edu-card">
            <div className="edu-icon">
              <GraduationCap size={32} />
            </div>
            <div className="edu-details">
              <h3>Indian Institute of Technology (ISM), Dhanbad</h3>
              <h4>B.Tech in Electronics and Communication Engineering</h4>
              <p className="edu-date">July 2024 - May 2028</p>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-icon">
              <BookOpen size={32} />
            </div>
            <div className="edu-details">
              <h3>Relevant Coursework</h3>
              <ul className="coursework-list">
                <li>Introduction to C Programming</li>
                <li>Introduction to Algorithms</li>
                <li>Object-Oriented Programming using JAVA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
