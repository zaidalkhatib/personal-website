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
          href="https://media.licdn.com/dms/document/media/D562DAQE0uyqpiSXqlg/profile-treasury-document-pdf-analyzed/0/1689355087030?e=1691625600&v=beta&t=OuVSnalUIErlxYvsLupiQatuON71iyluJEobWESguVI"
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
