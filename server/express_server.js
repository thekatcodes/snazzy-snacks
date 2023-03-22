const pool = require("./db/index");
require("dotenv").config();

const stripe = require("stripe")(
	process.env.STRIPE_SECRET_KEY
);

const express = require("express");
const e = require("express");
const app = express();
const PORT = 8080;

const YOUR_DOMAIN = "http://localhost:8080";

app.use(express.json());
app.use(express.urlencoded());

app.get("/api", async (req, res) => {
	try {
		const users = await pool.query(` 
      SELECT *
      FROM users
    `);
		res.json(users.rows);
	} catch (error) {
		console.log(error);
	}
});

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
        // page shows: Cannot GET /order-confirmation

		cancel_url: `${YOUR_DOMAIN}?canceled=true`,
		billing_address_collection: "required",
		shipping_address_collection: {
			allowed_countries: ["CA"],
		},
	});

	// res.json('test');
	// res.json({ id: session.id });
	res.redirect(303, session.url);
});

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
