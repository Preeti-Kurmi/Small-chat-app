const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  fs.readFile('usertext.txt', 'utf8', (err, data) => { // Read from 'usertext.txt' instead of 'usertext'
    if (err) {
      data = "no data"; // Provide a default value if the file doesn't exist
    }
    console.log(data)
    res.send(`${data}
      <form action="/" method="POST">
        <input type="text" id="username" name="username">
       
        <button type="submit">Submit</button>
      </form>
    `);
  });                                                                 // <input type="text" id="message" name="message">
});

app.post('/', (req, res) => {
  const username = req.body.username;
 // const message = req.body.message;
  const contentToWrite = `${username}`; // Add a newline to separate entries

  fs.appendFile('usertext.txt', contentToWrite, (err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});

app.get('/login', (req, res) => {
  res.send(`<form action="/" method="POST">
    <input type="text" id="username" name="username">
    <button type="submit">Login</button>
  </form>`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
