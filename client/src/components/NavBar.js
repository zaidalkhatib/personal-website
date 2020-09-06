import React from "react";
import "./NavBar.css";
import {Link, animateScroll as scroll} from "react-scroll";
import resume from "./images/Zaid-Alkhatib-Resume.pdf";
const NavBar = () => {
  return (
    <div>
      <ul className="nav-Bar-List">
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav-bar-element"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav-bar-element"
        >
          Contact
        </Link>

        <a href={resume} download className="nav-bar-element">
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/zaid-alkhatib-1736bb197/"
          className="nav-bar-element mediaIcon"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/zaidalkhatib/"
          className="nav-bar-element mediaIcon"
        >
          <i class="fab fa-github"></i>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
