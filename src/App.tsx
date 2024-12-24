import React from 'react';
import Header from './components/Header'; 
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Contact from './components/Contact';
import './styles/styles.css'; 

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skill">
          <Skill />
        </section>

        <section id="project1">
          <Project1 />
        </section>

        <section id="project2">
          <Project2 />
        </section>

        <section id="project3">
          <Project3 />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
