import './Achievements.css';
import { Trophy, Code, Target, Award } from 'lucide-react';

const Achievements = () => {
  const achievementsList = [
    {
      icon: <Award size={32} />,
      title: 'JEE Advanced Rank 5123',
      subtitle: '99.44 Percentile in JEE Main',
      description: 'Secured a top rank among 1.4 million candidates in India\'s most competitive engineering entrance examinations.'
    },
    {
      icon: <Trophy size={32} />,
      title: 'Global Rank 209',
      subtitle: 'CodeChef Starters 244',
      description: 'Achieved a top global ranking, highlighting strong competitive programming proficiency and algorithmic problem-solving skills under time constraints.'
    },
    {
      icon: <Target size={32} />,
      title: 'Competitive Ratings',
      subtitle: 'Codeforces & CodeChef',
      description: 'Achieved a maximum Codeforces rating of 1357 (Pupil) and a CodeChef rating of 1631 (3 Star).'
    },
    {
      icon: <Code size={32} />,
      title: '600+ Problems Solved',
      subtitle: 'Across Major Platforms',
      description: 'Consistently practiced and solved over 600 complex algorithmic problems on Codeforces, CodeChef, LeetCode, and AtCoder.'
    }
  ];

  return (
    <section id="achievements" className="section achievements">
      <h2 className="section-title">Achievements</h2>
      
      <div className="achievements-container">
        {achievementsList.map((item, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">
              {item.icon}
            </div>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
