import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsComponent from './components/SkillsComponent';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';



function App() {
  return (
    <div className="App">
         <nav id="navbar" class="navbar navbar-expand-lg navbar-primary bg-primary">
    <div class="collapse navbar-collapse" id="navbarNav"> 
         <ul class="navbar-nav" id='F'> 
            <li class="nav-item active"> 
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> 
             </li>
             <li class="nav-item "> 
              <a class="nav-link" href="#R">Skills</a>
             </li> 
             <li class="nav-item "> 
              <a class="nav-link" href="#">Certifications</a>
             </li> 
             <li class="nav-item "> 
              <a class="nav-link" href="#">About Us</a>
             </li> 
         </ul>
    </div> 
   </nav>
   
   <div style={{"background-color": "powderblue"}}> 
           <h2 align="center" style={{"color":"violet"}}><em>About Us</em></h2>
           <p style={{"color":"black"}}>Dharanesh Reddy
              I'm an Engineering student pursuing engineering in Electronics and
              Communication Engineering, my favorite branch since childhood,
              I love my branch and my basic fundamentals of engineering are very clear,
              I love to code in python.Iam a Full Stack Web Developer using python
              Iam a perfectionist by nature, its my vital strength, I can do any work within time
             </p>
             



            <div style={{"background-color": "powderblue"}}>
             <h3 style={{"color":"blue"}}>Full Stack Web developer</h3>
             <ul className="yellow-text left-align">
              <li><b>Birthday: June 18 2000</b></li>
              <li><b>Website:Universal News, Autofix services</b></li>
              <li><b>Phone:7672064004</b></li>
              <li><b>Age:23</b></li>
              <li><b>Degree:Bachelor's Degree in ECE</b></li>
              <li><b>Email:dharan35849@gmail.com</b></li>
             </ul>
            </div>
            <header className="App-header" id='R'>
            <SkillsComponent />
          </header>
          <Projects />
          <h1 style={{"color":'yellow'}} align='center'>Summary of the Resume</h1>
          <Resume />
          <h1 style={{"color":"green"}}>Contact Us</h1>
          <ContactForm />
          </div>
        </div>
  
      );
    }

export default App;
