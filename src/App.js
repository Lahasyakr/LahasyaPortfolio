import React, { useEffect, useState } from 'react';
import './App.css';
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import WorkExperience from './components/WorkExperience';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="app">
      <aside className="sidebar">
        <img className="profile-image" src="lahasyaprofile.jpeg" alt="Profile" />
        <h1 className="name">Lahasya K Rajanna</h1>

        <h6>Software Engineer, Boston, MA | University of Massachusetts | Ex-Marlabs | Ex-Infosys</h6>

        <p align="left">
          <a href="mailto:lahasyakr.07@gmail.com" target="blank"><img align="center" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="lahasyak,r.07" height="25" width="35" /></a>
          <a href="https://twitter.com/lahasyakr" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="lahasyakr" height="30" width="40" /></a>
          <a href="https://www.linkedin.com/in/lahasyarajanna/
"target="blank"><img align="center" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" alt="lahasya k r" height="30" width="40" /></a>
          <a href="https://instagram.com/lahasyak.r" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="lahasyak,r" height="30" width="40" /></a>
          <a href="https://www.leetcode.com/lahasya" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="lahasya" height="30" width="40" /></a>
        </p>




        <nav className="navigation">
          <a className={activeSection === 'about' ? 'active' : ''} href="#about">
            About
          </a>
          <a className={activeSection === 'skills' ? 'active' : ''} href="#skills">
            Skills
          </a>
          <a className={activeSection === 'projects' ? 'active' : ''} href="#projects">
            Projects
          </a>
          <a className={activeSection === 'work-experience' ? 'active' : ''} href="#work-experience">
            Work Experience
          </a>
        </nav>
      </aside>

      <main className="content">
        <About />
        <Skills />
        <Projects />
        <WorkExperience />




      </main>
    </div>
  );
};

export default App;
