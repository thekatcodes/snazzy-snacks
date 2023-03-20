const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const PORT = 8080;

// Helper and component specific functions
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

// console.log(bcrypt.hashSync('123456', 10));
// console.log(bcrypt.hashSync('abcdef', 10));

// Receives login details from front end, and checks whether the username & password matches
app.post("/login", async(req, res) => {
  try {
    const users = await getUsers();
    let login = false;
    let username = req.body.username;
    let password = req.body.password;
    
    for(const user of users) {
      if(user.name === username && bcrypt.compareSync(password, user.password)) {
        login = true;
      }
    }

    if(!login) {
      return res.status(400).send('Login Failed! Please check your username and password.')
    }

    res.json({login: login});
  } catch (err) {
    console.log(err);
  }
});

// Receives data from register (axios), and add the information to the database
app.post('/register', async(req, res) => {
  try {
    const users = await getUsers();
    let regis = false;

    let username = req.body.username;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, 10);

    while (!regis) {
      if (req.body.password !== req.body.password2) {
        return res.status(400).send('Passwords do not match!');
      }
  
      for(const user of users) {
        if(user.name === username || user.email === email) {
          return res.status(400).send('Username or Email already exists!');
        } 
      }

      regis = true;
      updateUsers(username, email, password, '');
    }

    res.json({registration: regis});

  } catch(err) {
    console.log(err);
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
