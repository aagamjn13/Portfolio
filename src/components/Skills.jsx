import './Skills.css';
import { Code2, Database, Layout, Server, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['C/C++', 'HTML', 'JavaScript']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layout size={24} />,
      skills: ['React.js', 'Express.js', 'Node.js', 'Tailwind CSS', 'EJS']
    },
    {
      title: 'Database & Tools',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'Firebase', 'Git', 'GitHub']
    },
    {
      title: 'Core Concepts',
      icon: <Cpu size={24} />,
      skills: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'Operating Systems (OS)']
    }
  ];

  return (
    <section id="skills" className="section skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
