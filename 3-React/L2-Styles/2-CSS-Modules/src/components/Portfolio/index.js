import React, { useState } from 'react';
import Project from '../Project';
import calcImg from '../../assets/projects/calculator.jpg';
import ledImg from '../../assets/projects/led-wall.jpg';
import pastelImg from '../../assets/projects/pastel-puzzels.jpg';
import surfImg from '../../assets/projects/surf-report.jpg';
import runImg from '../../assets/projects/run-buddy.jpg';
function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'surf-report',
      description: 'MERN Stack',
      link: 'https://github.com',
      repo: 'https://github.com',
      img: surfImg,
    },
    {
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: 'https://github.com',
      repo: 'https://github.com',
      img: pastelImg,
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: 'https://github.com',
      repo: 'https://github.com',
      img: runImg,
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: 'https://github.com',
      repo: 'https://github.com',
      img: ledImg,
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: 'https://github.com',
      repo: 'https://github.com',
      img: calcImg,
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={'project' + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
