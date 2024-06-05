// src/Resume.js
import React, { useRef, useEffect, useState } from 'react';
import './Resume.css';

const Resume = () => {
  const resumeRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  return (
    <div ref={resumeRef} className={`resume ${isVisible ? 'animate' : ''}`} style={{"background-color":"powderblue"}}>
      <h1>Muthaluru Dharaneeshwar Reddy</h1>
      <h2>Python Full Stack Web Developer</h2>

      <section>
        <h3>Education</h3>
        <ul>
          <li>
            <h4>TKR College of Engineering and Technology</h4>
            <p>Bachelor of Engineering in ECE</p>
            <p>Overall Percentage : 65%</p>
          </li>
          <li>
            <h4>Sri Chaitanya Junior Kalasala</h4>
            <p>Intermediate in MPC</p>
            <p>Overall Percentage : 91%</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Experience</h3>
        <ul>
          <li>
            <h4>Front End Web Developer at raise.digital</h4>
            <p>Jul 2021 - Aug  2021 - 2 Months</p>
            <p>Responsible for developing and maintaining web applications.</p>
          </li>
          <li>
            <h4>Oxycare Engineer at KRAS</h4>
            <p>Nov 2021- Dec 2021 - 2 Months</p>
            <p>Developed Automatic Oxygen supply kits for Medical Purposes.</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML & CSS</li>
          <li>Bootstrap</li>
          <li>Python</li>
          <li>Django</li>
          <li>Mysql</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
