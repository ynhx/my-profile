import './techstack.css';

import javaLogo from "../assets/java_logo.png";
import kotlinLogo from "../assets/kotlin_logo.png";
import jsLogo from "../assets/js_logo.png";
import tsLogo from "../assets/ts_logo.png";
import nodeLogo from "../assets/nodejs_logo.png";
import htmlLogo from "../assets/html_logo.png";
import cssLogo from "../assets/css_logo.svg";
import springLogo from "../assets/springboot_logo.png";
import sqlLogo from "../assets/sql_logo.webp";
import mysqlLogo from "../assets/mysql_logo.png";
import gitLogo from "../assets/git_logo.png";
import reactLogo from "../assets/react_logo.png";

const techStack = [
    { name: "Java", logo: javaLogo },
    { name: "Kotlin", logo: kotlinLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "TypeScript", logo: tsLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "SQL", logo: sqlLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "Git", logo: gitLogo },
    { name: "React", logo: reactLogo }
];

const TechStack = () => {

    const duplicatedTechStack = [
        ...techStack, ...techStack, ...techStack, ...techStack,
        ...techStack, ...techStack, ...techStack, ...techStack,
        ...techStack, ...techStack, ...techStack, ...techStack,
        ...techStack, ...techStack, ...techStack, ...techStack
      ];

    return (
        <div>
            <h2 className="tech-stack-title">MY TECH STACK</h2>
            <div className="tech-stack">
                <div className="tech-stack-slider">
                    {duplicatedTechStack.map((tech, index) => (
                        <img
                            key={index}
                            src={tech.logo}
                            alt={tech.name}
                            className="tech-logo"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;