import React from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Credential from "./components/Credentials";
function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <Header />
        </div>
        <div>
          <Projects />
        </div>

        <div>
          <Credential />
        </div>
        <div>
          <Contacts />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
