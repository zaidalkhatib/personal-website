const express = require ('express');
const nodemailer = require ('nodemailer');
const bodyParser = require ('body-parser');
const app = express ();

app.use (bodyParser.urlencoded ({extended: false}));
app.use (bodyParser.json ());

// HTTPS redirect middleware
app.use ((req, res, next) => {
  if (req.header ('x-forwarded-proto') !== 'https') {
    res.redirect (`https://${req.header ('host')}${req.url}`);
  } else {
    next ();
  }
});

const PORT = 5000;

app.post ('/message', async (req, res) => {
  console.log (req.body); // Caution: Ensure you're not logging sensitive data in production!

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

  const transporter = nodemailer.createTransport ({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: process.env.RECIVER_EMAIL,
    subject: 'You have a new message',
    html: output,
  };

  try {
    const info = await transporter.sendMail (mailOptions);
    console.log ('Email sent: ' + info.response);
    res.status (200).send ({message: 'Email sent successfully!'});
  } catch (error) {
    console.error ('Error sending email:', error);
    res
      .status (500)
      .send ({message: 'Failed to send the email. Please try again later.'});
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use (express.static ('client/build'));
  const path = require ('path');
  app.get ('*', (req, res) => {
    res.sendFile (path.resolve (__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen (process.env.PORT || PORT, () => {
  console.log (`Server is running on port ${process.env.PORT || PORT}`);
});
