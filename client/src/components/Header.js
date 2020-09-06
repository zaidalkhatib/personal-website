import React from "react";
import "./header.css";

import resume from "./images/Zaid-Alkhatib-Resume.pdf";
import NavBar from "./NavBar";
import {Link, animateScroll as scroll} from "react-scroll";
import Circle from "./Circle";

const Header = () => {
  return (
    <div className="body1">
      <header className="header1">
        <NavBar />

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Zaid Alkhatib</span>
            <span className="heading-primary--sub"> Developer</span>
          </h1>
          {/* 
          <a
            href={resume}
            download
            className="btn second btn--white btn--animated"
          >
            Resume
          </a> */}

          <Link
            href="#projects"
            className="btn"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="btn"
          >
            <Circle apps="React" number="28" />
          </Link>
          <Link
            href="#projects"
            className="btn"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Circle apps="Node" number="18" />
          </Link>
          <Link
            href="#projects"
            className="btn"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Circle apps="Java" number="15" />
          </Link>
          <div className="icon">
            <Link
              style={{color: "white"}}
              className="fas fa-arrow-down icon-large"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            ></Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
