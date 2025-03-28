import { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
      <nav className="navbar">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
        </div>
        <div className={`sidebar ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className="category">ABOUT</li>
            <li onClick={() => { setCurrentPage("home"); setMenuOpen(false); }}>Home</li>

            <li className="category">EXPERIENCE</li>
            <li onClick={() => { setCurrentPage("resume"); setMenuOpen(false); }}>Resume</li>
            <li onClick={() => { setCurrentPage("education"); setMenuOpen(false); }}>Education</li>
            <li className="category">PORTFOLIO</li>
            <li onClick={() => { setCurrentPage("projects"); setMenuOpen(false); }}>Projects</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
