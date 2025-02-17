import { useState, useEffect } from 'react';
import './styles.css';
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from './components/ContactForm';

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showContactForm, setShowContactForm] = useState(false); // State to manage contact form visibility

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm); // Toggle the contact form
  };

  useEffect(() => {
    if (currentPage === "home") {
      document.title = "Main page | Yin";
    } else if (currentPage === "projects") {
      document.title = "My Projects | Yin";
    }
  }, [currentPage]);

  return (
    <div className="app-container">
      {currentPage === "home" ? (
        <>
          <h1 className="main-title">YINNNNNNNNNN!</h1>
          <h2 className="about-me-title">About Me</h2>
          <p className="intro-text">
            Hi! I am Yin. I am currently a Computer Science student. I am soooooo close to
            graduating though, my school just needs me to complete an internship that runs
            for at least six month in order for me to be able to fulfill my graduation
            requirements.
            <br></br>
            <br></br>
            So while in the search for that, I am currently putting my
            focus in growing my portfolio, learning new skills, new programming
            languages, connecting with other programmers and basically trying to do
            things that are going to help me advance in my career since I never focused
            much on this stuff while I was in school and just got consumed fully in it
            and now trying to fill in those gaps. (I take full responsibility!)
            <br></br>
            <br></br>
            This is my newly made personal website and below you can find the things I
            know so far, my expertise and things I am currently focused on.
          </p>

          <div className="tech-stack">
            <TechStack />
          </div>
          <p className="tech-stack-explanation">
            Some of these, I learned at school, with Java being my main focus at school
            and others I self-taught. As you can already guess, Java is my strong
            suit and also my favorite currently.
          </p>
          <br></br>
          <p className="prompt">
            Do check out some of my&nbsp;
            <span className="projects-link" onClick={() => setCurrentPage("projects")}>
              projects
            </span>
            &nbsp;that I have created/am working on
            using some of these tools.
          </p>
        </>
      ) : (
        <Projects goBack={() => setCurrentPage("home")} />
      )}
      {showContactForm && (
        <ContactForm onClose={toggleContactForm} />
      )}
      <Footer onContactClick={toggleContactForm} />
    </div>
  );
};

export default App;