import React from "react";
import "./Education.css";

const Education: React.FC = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <p>My educational background so far</p>
      <ul>
        <li>
          <strong className="glow-text">University of Venda</strong>
          <ul>
            <li className="course">Mining and Environmental Geology</li>
            <li className="period">2020 - 2020</li>
          </ul>
        </li>
        <li>
          <strong className="glow-text">Tshwane University of Technology</strong>
          <ul>
            <li className="course">Computer Science</li>
            <li className="period">2021 - 2025</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Education;
