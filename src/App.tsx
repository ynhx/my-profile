import { useState, useEffect } from 'react';
import './styles.css';
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from './components/ContactForm';
import content from "./data/content";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Education from './components/Education';

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
    } else if (currentPage === "resume") {
      document.title = "Resume | Yin";
    } else if (currentPage === "education") {
      document.title = "Education | Yin";
    }
  }, [currentPage]);

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "home" ? (
        <>
          <h1 className="main-title">YINNNNNNNNNN!</h1>
          <h2 className="about-me-title">About Me</h2>
          <p className="intro-text" dangerouslySetInnerHTML={{ __html:content.aboutMeText }}></p>

          <div className="tech-stack">
            <TechStack />
          </div>
          <p className="tech-stack-explanation" dangerouslySetInnerHTML={{__html:content.techStackExplanation}}></p>
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
      ) : currentPage === "projects" ? (
        <Projects goBack={() => setCurrentPage("home")} />
      ) : currentPage === "resume" ? (
        <Resume />
      ) : currentPage === "education" ? (
        <Education />
      ) : null}
      {showContactForm && (
        <ContactForm onClose={toggleContactForm} />
      )}
      <Footer onContactClick={toggleContactForm} />
    </div>
  );
};

export default App;