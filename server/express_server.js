const express = require("express");
const app = express();
// const bcrypt = require("bcryptjs");
// const cookieSession = require('cookie-session');  
const PORT = 8080;

const { getUsers, updateUsers } = require('./users');

// Middleware to read req.body
app.use(express.json());

// Grabs data from psql to send to front end
app.get("/api", async(req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) { 
    console.log(error);
  }
});

// Receives login details from front end, and checks whether the username & password matches
app.post("/login", async(req, res) => {
  try {
    const users = await getUsers();
    let login = { login: false };
    
    for(const user of users) {
      if(user.name == req.body.username && user.password == req.body.password) {
        login = true;
      }
    }

    console.log("Username: ", req.body.username);
    console.log("Password: ", req.body.password);

    if(!login.login) {
      return res.status(400).send('Login Failed! Please check your username and password.')
    }

    res.json(login);
  } catch (err) {
    console.log(err);
  }
});

// Receives data from register (axios), and add the information to the database
app.post('/register', async(req, res) => {
  try {
    const users = await getUsers();
    const regis = {registration: false };

    while (!regis.registration) {
      if (req.body.password !== req.body.password2) {
        return res.status(400).send('Passwords do not match!');
      }
  
      for(const user of users) {
        if(user.name === req.body.username || user.email === req.body.email) {
          return res.status(400).send('Username or Email already exists!');
        } 
      }

      regis.registration = true;
      updateUsers(req.body.username, req.body.email, req.body.password, '');
    }

    res.json(regis);

  } catch(err) {
    console.log(err);
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
