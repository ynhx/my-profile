import { useState, useEffect } from 'react';
import './styles.css';
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from './components/ContactForm';
import { aboutMeText, techStackExplanation } from "./data/content";

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
          <p className="intro-text">{aboutMeText}</p>

          <div className="tech-stack">
            <TechStack />
          </div>
          <p className="tech-stack-explanation">{techStackExplanation}</p>
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