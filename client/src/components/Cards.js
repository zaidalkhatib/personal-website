import React, {useEffect} from "react";
import AOS from "aos";

const Cards = ({
  image,
  liveWebsite,
  githubCode,
  description,
  name,
  language,
}) => {
  useEffect(() => {
    AOS.init();
    window.jQuery(".special.cards  .image").dimmer({
      on: "hover",
    });
  }, []);
  return (
    <div
      style={{
        transition: "1s ease-in",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        overflow: "hidden",
        padding: "2rem  1.3rem ",
      }}
      data-aos="fade-bottom"
      data-aos-duration="1000"
      data-aos-offset="120"
    >
      <div className="ui special cards">
        <div className="card">
          <div className="blurring dimmable image">
            <div className="ui dimmer">
              <div className="content">
                <div className="center">
                  <a href={liveWebsite}>
                    <button className="ui blue inverted button">
                      Live Website
                    </button>
                  </a>

                  <a href={githubCode}>
                    {" "}
                    <button className="ui  blue inverted button">
                      {" "}
                      Github Code{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <img style={{height: "160px"}} src={image} />
          </div>
          <div className="content">
            <a className="header">{name}</a>

            <div className="description">{description}</div>
          </div>
          <div className="extra content">
            <a style={{color: "black"}}>{language}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
