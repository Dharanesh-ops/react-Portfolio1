import React, { useState, useEffect, useRef } from 'react';
import './SkillsComponent.css'; // We'll add some CSS for the animations

function SkillsComponent() {
  // Initial state with some skills
  const [skills, setSkills] = useState([
    'HTML--60%',
    'React--60%',
    'Javascript--60%',
    'CSS--60%',
    'Bootstrap--60%',
    'Mysql--60%',
    'Python--75%',
    'Django--60%'
  ]);

  // Function to add a new skill
  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  };

  // Ref for the skills section
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div ref={skillsRef} className="skills-section hidden" style={{ backgroundColor: 'powderblue', padding: '20px' }}>
      <h1>Skills</h1>
      <ul className="left-align">
        {skills.map((skill, index) => (
          <li key={index}><b>{skill}</b></li>
        ))}
      </ul>
      <AddSkillForm addSkill={addSkill} />
    </div>
  );
}

function AddSkillForm({ addSkill }) {
  const [newSkill, setNewSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSkill) {
      addSkill(newSkill);
      setNewSkill(''); // Clear the input field after adding the skill
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '10px' }}>
      <input style={{ padding: '4px', marginRight: '4px' }}
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
        placeholder="Add a new skill"
      />
      <button className="container" type="submit" style={{ padding: '4px' }}>Add Skill</button>
    </form>
  );
}

export default SkillsComponent;
