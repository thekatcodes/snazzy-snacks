const pool = require("./db/index");

const express = require("express");
const e = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const PORT = 8080;

//used for Stripe
const YOUR_DOMAIN = "http://localhost:3000";
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret =
	"whsec_58df9d8747617bf0d8fe7afc0f4409ebbd4ed8ff53b950be68c3ea236dfa62d5";

app.use(express.urlencoded());

// Retrieve payment data after successful checkout
// DO NOT MOVE THIS app.post("/webhook") AFTER app.use(express.json());
// MUST KEEP AT THE TOP!
// in terminal run: stripe listen --forward-to localhost:8080/webhook
app.post(
	"/webhook",
	express.raw({ type: "application/json" }),
	(request, response) => {
		let event = request.body;
		// Only verify the event if you have an endpoint secret defined.
		// Otherwise use the basic event deserialized with JSON.parse
		if (endpointSecret) {
			// Get the signature sent by Stripe
			const signature = request.headers["stripe-signature"];
			try {
				event = stripe.webhooks.constructEvent(
					request.body,
					signature,
					endpointSecret
				);
			} catch (err) {
				console.log(`⚠️  Webhook signature verification failed.`, err.message);
				return response.sendStatus(400);
			}
		}

		// console.log(event.data.object.customer_details);

		if (event.type === "checkout.session.completed") {
			const session = event.data.object;
			console.log("customer details:", session.customer_details);
            const address = session.customer_details.address;
            console.log(address)

            const street = address.line1 + ', ' + address.line2;
            console.log('street:', street);
            const city = address.city;
            console.log('city:', city);
            const province = address.state;
            console.log('province:', province);
            const postalCode = address.postal_code;
            console.log('postal code:', postalCode);

			const countryCodes = {
				CA: "Canada",
			};
			const country = address.country;
			const countryName = countryCodes[country];
			console.log(countryName); // prints 'Canada'

        }

        //retrieve price id (if price id = 'price id' -> set user subscription tier to that) 
        if (event.type === "payment_intent.succeeded") {
			const session = event.data.object;

		// Return a 200 response to acknowledge receipt of the event
		response.send();
	}
);

// Helper and component specific functions
const { getUsers, updateNewUser } = require("./users");

// Middleware to read req.body
app.use(express.json());
app.use(
	cookieSession({
		name: "cookie",
		keys: ["ae2201ymno3imKSaLa0t", "1i0aomteayS3mL20an2K"],
	})
);
app.use(cookieParser());

// Grabs data from psql to send to front end
app.get("/api", async (req, res) => {
	try {
		const users = await getUsers();
		res.json(users);
	} catch (error) {
		console.log(error);
	}
});

// Receives login details from front end, and checks whether the username & password matches
app.post("/login", async (req, res) => {
	try {
		const users = await getUsers();
		let login = false;
		let email = req.body.email;
		let password = req.body.password;

		let index = 0;

		for (const user of users) {
			if (user.email === email && bcrypt.compareSync(password, user.password)) {
				req.session.cookie = user.first_name;
				console.log("setsessioncookieset", req.session.cookie);
				login = true;
				break;
			}
			index++;
		}

		if (!login) {
			return res
				.status(400)
				.send("Login failed! Please check your username and password.");
		}

		res.json({ login: login, firstname: users[index].first_name });
	} catch (err) {
		console.log(err);
	}
});

// Returning username
app.get("/cookie", async (req, res) => {
	try {
		console.log("Sending back: ", req.session.cookie);
		res.send(req.session.cookie);
	} catch (err) {
		console.log(err);
	}
});

// Receives data from register (axios), and add the information to the database
app.post("/register", async (req, res) => {
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
				return res.status(400).send("Passwords do not match!");
			}

			for (const user of users) {
				if (user.email === email) {
					return res.status(400).send("Email already exists!");
				}
			}

			regis = true;
			req.session.cookie = firstname;
			updateNewUser(firstname, lastname, email, password);
		}

		res.json({ registration: regis, firstname: firstname });
	} catch (err) {
		console.log(err);
	}
});

// Logout button, clears cookies in backend
app.post("/logout", (req, res) => {
	req.session = null;
	res.redirect("/");
});

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
