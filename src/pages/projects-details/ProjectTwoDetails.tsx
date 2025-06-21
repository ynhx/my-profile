import React from "react";
import "./ProjectTwoDetails.css";

interface ProjectTwoDetailsProps {
  goBack: () => void;
}

const ProjectTwoDetails: React.FC<ProjectTwoDetailsProps> = ({ goBack }) => {
  return (
    <div className="project-two-details">
      <h2 className="glow-text">Lecturers' Report System</h2>
      <h3 className="subtitle">A digital solution for managing and generating lecturer reports</h3>
      <div className="project-two-images">
        <img src="https://via.placeholder.com/350x200?text=Screenshot+1" alt="Screenshot 1" />
        <img src="https://via.placeholder.com/350x200?text=Screenshot+2" alt="Screenshot 2" />
      </div>
      <section className="project-two-section">
        <h4>Idea Behind Creating It</h4>
        <p>
          The Lecturers' Report System was designed to streamline the process of creating, managing, and submitting reports for academic staff. The goal was to reduce paperwork, minimize errors, and provide a centralized digital platform for all reporting needs.
        </p>
      </section>
      <section className="project-two-section">
        <h4>Key Features</h4>
        <ul>
          <li>Easy report creation and editing</li>
          <li>Automated calculations and summaries</li>
          <li>Secure login for lecturers and admins</li>
          <li>Export reports as PDF</li>
          <li>Responsive design for desktop and mobile</li>
        </ul>
      </section>
      <section className="project-two-section">
        <h4>Technologies Used</h4>
        <ul>
          <li>React</li>
          <li>Node.js & Express</li>
          <li>MongoDB</li>
          <li>PDF generation libraries</li>
        </ul>
      </section>
      <button className="project-two-back-button" onClick={goBack}>Back to Projects</button>
    </div>
  );
};

export default ProjectTwoDetails; 