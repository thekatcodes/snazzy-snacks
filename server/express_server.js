const pool = require("./db/index");

const express = require("express");
const e = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser'); 
const PORT = 8080;

//used for Stripe
const YOUR_DOMAIN = "http://localhost:3000";
require("dotenv").config();
const stripe = require("stripe")(
	process.env.STRIPE_SECRET_KEY
);

app.use(express.json());
app.use(express.urlencoded());

// Helper and component specific functions
const { getUsers, updateNewUser } = require('./users');

// Middleware to read req.body
app.use(express.json());
app.use(cookieSession({
  name: 'cookie',
  keys: ['ae2201ymno3imKSaLa0t', '1i0aomteayS3mL20an2K']
}));
app.use(cookieParser());

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
    let login = false;
    let email = req.body.email;
    let password = req.body.password;
    
    let index = 0;

    for(const user of users) {
      if(user.email === email && bcrypt.compareSync(password, user.password)) {
        req.session.cookie = user.first_name;
        console.log("setsessioncookieset", req.session.cookie);
        login = true;
        break;
      }
      index++;
    }

    if(!login) {
      return res.status(400).send('Login failed! Please check your username and password.');
    }
    
    res.json({ login: login, firstname: users[index].first_name});
  } catch (err) {
    console.log(err);
  }
});

// Returning username
app.get('/cookie', async(req, res) => {
  try {
    console.log("Sending back: ", req.session.cookie);
    res.send(req.session.cookie);
  } catch (err) {
    console.log(err);
  }
})

// Receives data from register (axios), and add the information to the database
app.post('/register', async(req, res) => {
  try {
    const users = await getUsers();
    let regis = false;
    
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, 10);
    
    console.log("This is first name: ", firstname);
    console.log("This is last name: ", lastname);

    while (!regis) {
      if (req.body.password !== req.body.password2) {
        return res.status(400).send('Passwords do not match!');
      }
      
      for(const user of users) {
        if(user.email === email) {
          return res.status(400).send('Email already exists!');
        } 
      }
      
      regis = true;
      req.session.cookie = firstname;
      updateNewUser(firstname, lastname, email, password);
    }
    
    res.json({ registration: regis, firstname: firstname });
    
  } catch(err) {
    console.log(err);
  }
})

// Logout button, clears cookies in backend
app.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
})


//Render Stripe integrated checkout page
app.post("/create-checkout-session", async (req, res) => {
	console.log("test");
	console.log(req.body);
	const { priceId } = req.body;

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
		mode: "subscription",
        success_url: `${YOUR_DOMAIN}/order-confirmation`,
        
        //^^^ redirects to http://localhost:8080/order-confirmation 
        // TO DO: CREATE order-confirmation router path + component

		cancel_url: `${YOUR_DOMAIN}/subscriptions`,
		billing_address_collection: "required",
		shipping_address_collection: {
			allowed_countries: ["CA"],
		},
	});

	// res.json('test');
	// res.json({ id: session.id });
	res.redirect(303, session.url);
});

// Retrieve payment data after successful checkout
// app.post("/webhooks/stripe", async (req, res) => {
//     const event = req.body;
    
//     if (event.type === "checkout.session.completed") {
//       const session = event.data.object;
//       // Here, you can retrieve the payment data from the `session` object
//       console.log(session);
//     }
    
//     res.sendStatus(200);
//   });


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

// Checking if cookies exist (REFERENCE FOR LATER)
// app.get("/cookie", async(req, res) => {
//   try {
//     console.log("request received from frontend");
//     console.log("Cookies value: ", req.cookies.cookie);
//     console.log("Cookie unencrypted: ", req.session.cookie);
//     const cookie = req.cookies.cookie ? req.cookies.cookie : '' ;
//     const hasCookie =  req.cookies.cookie ? true : false;
//     res.json({ cookie, hasCookie });
//   } catch (err) {
//     console.log(err);
//   }
// })
