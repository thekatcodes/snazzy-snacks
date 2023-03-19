const express = require("express");
const app = express();
const PORT = 8080;

const { getUsers } = require('./users');

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

// Receives login details from front end, and checks whether the username & id matches
app.post("/login", async(req, res) => {
  try {
    const users = await getUsers();
    let login = false;
    
    for(const user of users) {
      if(user.name == req.body.username && user.password == req.body.password) {
        login = true;
      }
    }

    res.json({ login: login });
  } catch (err) {
    console.log(err);
  }
});



// Receives data from register (axios), and add the information to the database
app.post('/register', (req, res) => {
  console.log(req);
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
