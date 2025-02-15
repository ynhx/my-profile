import React, { useEffect } from 'react';
import './projects.css'

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
            <p className="project-desc">This is my first solo project
                that I am currently working on. I have
                created a Liverpool FC fan page on
                <a href="https://www.facebook.com/eolupdates" target="_blank" rel="noopener noreferrer"> Facebook </a>
                which has seen some
                success growing into 22,000+ followers and I am proud of the milestone.
                It also has a
                <a href="https://www.facebook.com/groups/enormityoflfc" target="_blank" rel="noopener noreferrer"> group </a>
                with it that carries 33,000+ members currently.
                So seeing that as it is, inspired my new idea for a project and
                I am going to create a mobile app for it, all about Liverpool.
                <br></br>
                <br></br>
                It's an exciting project for me and due to familiarity with the
                Android ecosystem, Java, Kotling and stuff,
                I have decided to just start with an
                Android application before anything else. After I'm successful in creation
                of that then I'm going to focus on producing an iOS application for it too
                which is probably going to be waaaaay later. (That's if I don't get drawn
                into another project after I finish this, but we'll see).
                <br></br>
                <br></br>
                The idea behind this application is to give my followers and Liverpool
                fans in general an independent platform of all things Liverpool.
                This app is going to have everything, and everything about Liverpool,
                going all the way back to its history down to latest updates from a minute
                ago. My idea is to have it all in there and to give myself more solo
                experience here, and to have something I am proud of.
            </p>
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