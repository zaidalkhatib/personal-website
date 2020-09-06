import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        padding: "1rem",
        background: "#5c99d6",
        color: "white",
        fontSize: "1.3rem",
        textAlign: "center",
      }}
    >
      <div>
        <p> &copy; All Rights Reserved. Zaid Alkhatib 2020.</p>

        <a
          style={{color: "black", margin: "4rem"}}
          href="https://www.linkedin.com/in/zaid-alkhatib-1736bb197/"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          style={{color: "black", margin: "4rem"}}
          href="https://github.com/zaidalkhatib/"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
