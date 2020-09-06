const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const key = require("./key");
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/message", (req, res) => {
  console.log(req.body);
  const output = `
  <h1> message </h1>
  <ul>  
    <h3>Name: ${req.body.name}</h3>
    <h3>Email: ${req.body.email}</h3>
    <h3>Subject: ${req.body.subject}</h3>
  </ul>
  <h3>Message</h3>
  <h1>${req.body.contant}</h1>
`;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "teenozaytoon@gmail.com",
      pass: key.password,
    },
  });

  var mailOptions = {
    from: req.body.email,
    to: "zalkhatib@mail.sfsu.edu",
    subject: "You have a new message",
    html: output,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      // res.render(__dirname + "/views/failed.ejs", {msg: "email sent"});
    } else {
      console.log("Email sent: " + info.response);
      // res.render(__dirname + "/views/success.ejs", {msg: "email sent"});
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT, () => {});
