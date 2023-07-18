import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout, Menu, Avatar } from 'antd';
import {
  MailOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
  MailFilled,
} from '@ant-design/icons';

import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight
        ) {
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
      <Layout style={{ backgroundColor: "white" }}>
        <Sider className="sidebar"
          breakpoint="lg"
          style={{
            backgroundColor: "#bdc3c7",
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            alignItems: "center"
          }}
          collapsedWidth="0"
          width={280}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}>
          <div align="center" className="profile-image" style={{ align: "center !important" }}>
            <Avatar src="lahasyaprofile.jpeg" alt="Profile" size={120} />
          </div>
          <h1 align="center" className="name">Lahasya K Rajanna</h1>
          <p align="center">
            <small>Software Engineer, Boston, MA </small>
            <br />
            <small>University of Massachusetts | Ex-Marlabs | Ex-Infosys</small>
          </p>

          <p align="center">
            <a href="mailto:lahasyakr.07@gmail.com" target="blank" title='Email'>
              <MailFilled className="icon" twoToneColor="#000000" style={{ fontSize: 25, color: "black" }} />
            </a>
            <a href="https://twitter.com/lahasyakr" target="blank" title='Twitter'>
              <TwitterOutlined className="icon" style={{ fontSize: 25, color: "#00acee" }} />
            </a>
            <a href="https://www.linkedin.com/in/lahasyarajanna/" target="blank" title='LinkedIn'>
              <LinkedinOutlined className="icon" style={{ fontSize: 25, color: "#0A66C2" }} />
            </a>
            <a href="https://instagram.com/lahasyak.r" target="blank" title='Instagram '>
              <InstagramOutlined className="icon" style={{ fontSize: 25, color: "#bc2a8d" }} />
            </a>
            <a href="https://lahasyakr.github.io/Lahasyakr/" target="blank" title='GitHub' >
              <GithubOutlined className="icon" style={{ fontSize: 25, color: "black" }} />
            </a>
          </p>

          <Menu
            className="navigation"
            style={{ backgroundColor: "#bdc3c7", alignItems: "center" }}
            mode="inline"
            selectable={false}

          >
            <Menu.Item key="about">
              <a className={activeSection === 'about' ? 'active' : ''} href="#about">About</a>
            </Menu.Item>
            <Menu.Item key="skills">
              <a className={activeSection === 'skills' ? 'active' : ''} href="#skills">Skills</a>
            </Menu.Item>
            <Menu.Item key="projects">
              <a className={activeSection === 'projects' ? 'active' : ''} href="#projects">Projects</a>
            </Menu.Item>
            <Menu.Item key="work-experience">
              <a className={activeSection === 'work-experience' ? 'active' : ''} href="#work-experience">Work Experience</a>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
      </div>


    </div>
  );
};

export default App;
