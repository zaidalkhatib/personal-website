import React from "react";
import noteImage from "./images/note.png";
import blogs from "./images/blogs.png";
import regret from "./images/regret.png";
import todolist from "./images/todolist.png";
import datingapp from "./images/datingapp.png";
import github from "./images/github.png";
import weatherapp from "./images/weather.png";
import pealces from "./images/places.png";
import sziashoes from "./images/sziashoes.png";
import photosSearch from "./images/photosSearch.png";
import translation from "./images/translation.png";
import teen from "./images/teen.png";
import Drum from "./images/Drum.png";
import ContactSaver from "./images/ContactSaver.png";
import "aos/dist/aos.css";
import {Link, Element, animateScroll as scroll} from "react-scroll";

import Cards from "./Cards";
import {useState} from "react";
import Circle from "./Circle";

function Projects() {
  const [show, setShow] = useState(false);

  return (
    <div id="projects">
      <h1
        style={{
          padding: "0 0 2rem 0",
          color: "#5c99d6",
          letterSpacing: 6,
          marginTop: "1rem",
          fontSize: "2.7rem",
          textAlign: "center",
        }}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="120"
      >
        Favorite Projects
      </h1>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
          fontWeight: "700",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
          className="ui special cards "
        >
          <Cards
            name={"Blogs"}
            liveWebsite={"https://yourblogposts.herokuapp.com/"}
            githubCode={"https://github.com/zaidalkhatib/BlogPosts"}
            image={blogs}
            description={
              "This is a blog posts website for everyone post what everwhere they want to post (Bootstrap)."
            }
            language={"NodeJS"}
          />
          <Cards
            name={"GitHub Search"}
            liveWebsite={"https://githib-finder.vercel.app/"}
            githubCode={"https://github.com/zaidalkhatib/github-Searcher"}
            image={github}
            description={
              "This is a React app that gives you the ability to search for github users"
            }
            language={"ReactJS"}
          />

          <Cards
            name={"Contacts Saver"}
            liveWebsite={"https://secure-waters-77249.herokuapp.com/login/"}
            githubCode={"https://github.com/zaidalkhatib/Your-Contact-Saver"}
            description={
              "This is a MERN application.It gives you the abilty to save your contacts."
            }
            image={ContactSaver}
            language={"MERN"}
          />

          {show ? (
            <>
              <Cards
                name={"Weather App"}
                liveWebsite={"https://wather-app.herokuapp.com/"}
                githubCode={"https://github.com/zaidalkhatib/weatherApp"}
                image={weatherapp}
                description={
                  "This website gives you the ability to check the weather in any city in the world."
                }
                language={"NodeJS"}
              />
              <Cards
                name={"I regret"}
                liveWebsite={"https://regret1.herokuapp.com"}
                githubCode={"https://github.com/zaidalkhatib/Iregter"}
                description={
                  "This website lets you post something you regret anonymously"
                }
                image={regret}
                language={"NodeJS"}
              />
              <Cards
                name={"Notey"}
                liveWebsite={"https://notes-sigma.vercel.app/"}
                githubCode={"https://github.com/zaidalkhatib/notes"}
                description={
                  " This website lets you upload your notes online. In this website I am using React."
                }
                image={noteImage}
                language={"ReactJS"}
              />

              <Cards
                liveWebsite={"https://to-do-list-2020-zaid.herokuapp.com/"}
                name={"ToDo List App"}
                githubCode={"https://github.com/zaidalkhatib/toDoList"}
                description={
                  "A to do list app, you can insert what you want to do and plan ahead."
                }
                image={todolist}
                language={"NodeJS"}
              />
              <Cards
                name={"Your Places"}
                description={
                  " This is React website allows the user to post their places and share it ith others."
                }
                liveWebsite={"https://frontend-kohl-three.vercel.app"}
                githubCode={"https://github.com/zaidalkhatib/places-sharing"}
                language={"ReactJS"}
                image={pealces}
              />
              <Cards
                name={"Teen o Zaytoon Restaurant"}
                description={
                  "restaurant called Teen o Zaytoon website , you can order food or see the menu from it."
                }
                liveWebsite={"http://www.teenozaytoon.com"}
                githubCode={"https://github.com/zaidalkhatib/RestaurantWebsite"}
                language={"NodeJS"}
                image={teen}
              />
              <Cards
                name={"SZIA Store"}
                description={
                  " This is shoes store. It has all the features from viewing to checking out."
                }
                liveWebsite={"https://zaidalkhatib.github.io/SIZA-StroeFront"}
                githubCode={"https://github.com/zaidalkhatib/SIZA-StroeFront"}
                language={"NodeJS"}
                image={sziashoes}
              />
              <Cards
                name={"Photos Search"}
                description={
                  "  This website gives you the ability to search for photo. I am using a 3rd party API."
                }
                liveWebsite={"https://photos-search.vercel.app"}
                githubCode={"https://github.com/zaidalkhatib/photos-search/"}
                language={"ReactJS"}
                image={photosSearch}
              />
              <Cards
                name={"Translation & Wiki Search"}
                description={
                  " In this website you can translate languages also search on wikipedia."
                }
                liveWebsite={"https://wiki-translation.vercel.appp"}
                githubCode={"https://github.com/zaidalkhatib/translation"}
                language={"ReactJS"}
                image={translation}
              />
              <Cards
                name={"Love Birds"}
                description={
                  "This is a dating app website, it includes the features of the app and reviews (Bootstrap)."
                }
                liveWebsite={"https://zaidalkhatib.github.io/Love-Birds"}
                githubCode={"https://github.com/zaidalkhatib/Love-Birds"}
                language={"Bootstrap"}
                image={datingapp}
              />
              <Cards
                name={"Drum Play Ground"}
                description={
                  "The Drum Play Ground is a really simple game, basically it is just 6 drum sounds with a nice UI."
                }
                liveWebsite={
                  "https://zaidalkhatib.github.io/The-Drum-Play-Ground"
                }
                githubCode={
                  "https://github.com/zaidalkhatib/The-Drum-Play-Ground"
                }
                language={"JQuery"}
                image={Drum}
              />
            </>
          ) : null}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "100px",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="120"
      >
        <button
          className="ui  secondary submit button"
          onClick={() => {
            setShow(!show);
          }}
        >
          <p style={{letterSpacing: "2px", fontSize: "17px"}}>
            Show {show ? "Less" : "More"}
          </p>
        </button>
      </div>
    </div>
  );
}

export default Projects;
