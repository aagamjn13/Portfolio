import './Projects.css';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Note Bridge',
      description: 'A full-stack note-sharing platform with folder-based organization, file uploads, and controlled note sharing. Includes real-time social features like comments, shares, and follow requests to enhance user engagement.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Socket.IO', 'JWT'],
      github: '#'
    },
    {
      title: 'HectoClash',
      description: 'A real-time math duel game with live matchmaking, private rooms, and a practice mode. Features dynamic leaderboards, match history tracking, and a secure JWT-based authentication system.',
      tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Bootstrap 5'],
      github: '#'
    },
    {
      title: 'NGO Connect',
      description: 'A platform with role-based access control for NGOs and volunteers. Streamlines collaboration through NGO profiles, event management, and volunteer dashboards with integrated image uploads.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Cloudinary'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <Folder size={40} className="folder-icon" />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                  <FaGithub size={20} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" aria-label="External Link">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <ul className="project-tech">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
