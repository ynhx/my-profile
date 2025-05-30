import { useState, useEffect } from "react";
import "./styles.css";
import TechStack from "./components/TechStack";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import content from "./data/content";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";
import Education from "./pages/Education";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const toggleContactForm = () => setShowContactForm(!showContactForm);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="main-title">YINNNNNNNNNN!</h1>
                <h2 className="about-me-title">About Me</h2>
                <p
                  className="intro-text"
                  dangerouslySetInnerHTML={{ __html: content.aboutMeText }}
                ></p>
                <div className="tech-stack">
                  <TechStack />
                </div>
                <p
                  className="tech-stack-explanation"
                  dangerouslySetInnerHTML={{ __html: content.techStackExplanation }}
                ></p>
                <br />
                <p className="prompt">
                  Do check out some of my&nbsp;
                  <span
                    className="projects-link"
                    onClick={() => window.location.hash = "#/projects"}
                  >
                    projects
                  </span>
                  &nbsp;that I have created/am working on using some of these tools.
                </p>
              </>
            }
          />
          <Route path="/projects" element={<Projects goBack={() => window.location.hash = "#/"} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        {showContactForm && <ContactForm onClose={toggleContactForm} />}
        <Footer onContactClick={toggleContactForm} />
      </div>
    </Router>
  );
};

export default App;
