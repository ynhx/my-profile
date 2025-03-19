import React, { useEffect } from 'react';
import './projects.css'
import { projectDescription } from '../data/content'

interface ProjectsProps {
    goBack: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ goBack }) => {

    useEffect(() => {
        document.title = "My Projects | Yin";
    }, []);

    return (
        <div className="projects-container">
            <h2 className="my-projects-title">My Projects</h2>
            <p className="project-title">1. Liverpool FC Mobile App</p>
            <br></br>
            <p className="project-desc">{projectDescription}</p>
            <div className="message">
                <p>More of my projects that I happen to create will be added here.</p>
            </div>
            <button onClick={goBack} className="back-button">
                Home
            </button>
        </div>
    );
};

export default Projects;