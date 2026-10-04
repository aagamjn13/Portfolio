import './Projects.css';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Note Bridge',
      description: 'A full-stack note-sharing platform built with the MERN stack, featuring folder-based organization, file uploads, and controlled note sharing. Includes real-time social interactions such as likes, comments, shares, and follow requests, along with AI-powered note summaries and relevant tags.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Socket.IO', 'JWT', 'Gemini API'],
      github: 'https://github.com/aagamjn13/Note-Bridge',
      live: 'https://note-bridge-aagam.onrender.com/'
    },
    {
      title: 'HectoClash',
      description: 'A real-time multiplayer math duel game featuring live matchmaking, private rooms, and a practice mode for solving number-based challenges. Includes real-time gameplay, dynamic leaderboards, match history, and JWT-based authentication.',
      tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Bootstrap 5'],
      github: 'https://github.com/aagamjn13/HectoClash',
      live: 'https://hectoclash-aagam.onrender.com/'
    },
    {
      title: 'NGO Connect',
      description: 'A full-stack platform connecting NGOs and volunteers through role-based access control and dedicated user dashboards. Streamlines collaboration with NGO profiles, event management, volunteer coordination, and integrated image uploads.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Cloudinary'],
      github: 'https://github.com/aagamjn13/NGO-Connect',
      live: 'https://ngo-connect-aagam.onrender.com/'
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
                <a href={project.live} target="_blank" rel="noreferrer" aria-label="External Link">
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
