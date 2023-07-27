import React from "react";
import "./Credentials.css";

const Credentials = () => {
  return (
    <div className="credentials-header">
      <div
        className="credentials"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="120"
      >
        <div className="third-credentials">
          <div>
            <h1>Credentials</h1>
            <hr />
          </div>
          <p>
          Drawing from more than 2 years of Software Engineering expertise, I have honed my skills in navigating cutting-edge technologies and delivering innovative solutions. Embracing new challenges with fervor, I am passionate about continuous growth in this captivating field.
          </p>
        </div>
        <div className="right-credentials">
          <div className="first-credentials">
            <h3>Bachelor’s Degree in Computer Science</h3>
            <p>San Francisco State University – San Francisco, California</p>
            <p>GPA: 3.69 / 4.0 (Graduated in June 2021)</p>
          </div>
          <div className="second-credentials">
            <h2>Active Mentorship</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
