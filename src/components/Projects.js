import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projectData = [
    {
      id: 1,
      title: 'Universal News',
      description: 'Its a news website prepared using HTML, CSS and Bootstrap',
      Github: 'https://github.com/Dharanesh-ops/Universal-News',
      LinkedIn:'https://www.linkedin.com/in/muthaluru-dharaneeshwar-reddy-a973581ba/'
     
    },
    {
      id: 2,
      title: 'Autofix Car Services',
      description: 'Its a car services website prepared using HTML,CSS,Bootstrap and Javascript',
      Github:'https://github.com/Dharanesh-ops/Autofix-Car-services',
      LinkedIn:'https://www.linkedin.com/in/muthaluru-dharaneeshwar-reddy-a973581ba/'

    }
  ];

  return (
    <section id="projects" ref={ref}>
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.Github}</p>
            <p>{project.LinkedIn}</p>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
