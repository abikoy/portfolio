import React from "react";
// import About from "./components/About";
// import Projects from "./components/Projects";
import './NavBar.css';
const NavBar = ({ scrollToSection, refs }) => {
    return (
          <div className="navbar">
            <h1 className="text">Haile Kinfu</h1>

            <div className="links">
          <ul>
                    <li>
                        <button onClick={() => scrollToSection(refs.homeRef)} className="menu">Home</button>
                    </li>
                    {/* <li>
                        <button onClick={() => scrollToSection(refs.aboutRef)} className="menu">About</button>
                    </li> */}
                    <li>
                        <button onClick={() => scrollToSection(refs.skillsRef)} className="menu">Skills</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(refs.projectsRef)} className="menu">Projects</button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection(refs.contactRef)} className="menu">Contact</button>
                    </li>
         </ul>

        

            </div>

    </div>);
}
 
export default NavBar;