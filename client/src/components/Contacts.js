import React, {useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
toast.configure();
const Contacts = () => {
  const [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    contant: "",
  });
  const onChangeHandle = (e) => {
    const {name, value} = e.target;
    setMessage((prvValue) => {
      return {...prvValue, [name]: value};
    });
  };
  const notify = () => toast.info("Your Message has been sent successfully!");
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(message);
    if (getUser(message)) {
      notify();
    }

    setMessage({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      contant: "",
    });
  };

  async function getUser(info) {
    try {
      const response = await axios.post("/message", info);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div id="contact">
      <div
        style={{
          padding: "5rem 1rem 1rem 2rem",
          margin: "7rem 0 7rem 0",
          width: "100%",

          transition: "1s",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        id="projects"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="120"
      >
        <h1
          style={{
            padding: "0 0 2rem 0",
            color: "#5c99d6",

            letterSpacing: 6,
            marginTop: "1rem",
            fontSize: "2.7rem",
            textAlign: "center",
          }}
        >
          Get In Touch
        </h1>

        <form
          className="ui form attached fluid segment"
          style={{borderRadius: "0.4rem"}}
          onSubmit={onSubmitHandle}
        >
          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="firstName"
                value={message.firstName}
                required
                onChange={onChangeHandle}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                name="lastName"
                value={message.lastName}
                type="text"
                required
                onChange={onChangeHandle}
              />
            </div>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              placeholder="Email"
              name="email"
              value={message.email}
              type="email"
              required
              onChange={onChangeHandle}
            />
          </div>
          <div className="field">
            <label>Subject</label>
            <input
              type="text"
              required
              placeholder="Subject"
              onChange={onChangeHandle}
              name="subject"
              value={message.subject}
            />
          </div>
          <div className="field">
            <label>Text</label>
            <textarea
              required
              onChange={onChangeHandle}
              style={{resize: "none"}}
              name="contant"
              value={message.contant}
            ></textarea>
          </div>
          <button
            style={{fontSize: "1.3rem"}}
            className="ui fluid blue submit button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
