const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data
app.use('/login', (req, res, next) => {
  res.send('<form id="loginForm" action="/" method="POST"  onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)"><input type="text" name="title" id="username"><button type="submit">Login</button></form>');
  

});
app.post('/', (req, res) => {
  // Retrieve the data from the submitted form
  res.send('<form id="loginForm1" action="/product" method="POST" ><input type="text" name="title" id="username1"><button type="submit">Send</button></form>');

  const username1 = req.body.title;
  console.log(username1);
  app.post('/product', (req, res) => {
    const username = req.body.title;
    res.send(`<p>${username1}:${username}</p>`)
    
  
  });
 
  
});






app.listen(80, () => {
  console.log('Server is running on port 80');
});
