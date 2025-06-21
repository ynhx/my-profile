import { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar mobile-only">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
        </div>
        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
      </nav>
      <div className={`sidebar${menuOpen ? " open" : ""} mobile-sidebar`}>
        <ul>
          <li className="category">ABOUT</li>
          <li className={currentPage === "home" ? "active" : ""} onClick={() => { setCurrentPage("home"); setMenuOpen(false); }}>Home</li>
          <li className="category">EXPERIENCE</li>
          <li className={currentPage === "resume" ? "active" : ""} onClick={() => { setCurrentPage("resume"); setMenuOpen(false); }}>Resume</li>
          <li className={currentPage === "education" ? "active" : ""} onClick={() => { setCurrentPage("education"); setMenuOpen(false); }}>Education</li>
          <li className="category">PORTFOLIO</li>
          <li className={currentPage === "projects" ? "active" : ""} onClick={() => { setCurrentPage("projects"); setMenuOpen(false); }}>Projects</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
