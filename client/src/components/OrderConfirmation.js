import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

export default function OrderConfirmation(props) {
	console.log(props.cookieValue); // -> first_name
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/order-summary");
				console.log("order confirmation response:", response.data[0]);
				setUserData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	console.log(userData[0]);
	if (userData[0].first_name === props.cookieValue) {
		return (
			<div className="c-order-confirmation">
				<h1>Your order is complete!</h1>
				<div>
					<div className="c-order-confirmation__grid">
						<p>Order number: {userData[0].order_number}</p>
					</div>
					<div className="c-order-confirmation__grid">
						<h6>Email address</h6>
						<p>{userData[0].email}</p>
					</div>
					<div className="c-order-confirmation__grid">
						<h6>Shipping address</h6>
						<p>{userData[0].street}</p>
						<p>
							{userData[0].city}, {userData[0].province}{" "}
							{userData[0].postal_code}
						</p>
						<p>{userData[0].country}</p>
					</div>
					<div className="c-order-confirmation__grid">
						<div className="c-order-confirmation__total">
							<div className="c-order-confirmation__total-wrapper">
								<div className="c-order-confirmation__label">
									<p>{userData[0].subscription_tier} box</p>
								</div>
								<div className="c-order-confirmation__value">
									<p>{userData[0].price}</p>
								</div>
							</div>
							<div className="c-order-confirmation__total-wrapper">
								<div className="c-order-confirmation__label">
									<p>TOTAL</p>
								</div>
								<div className="c-order-confirmation__value">
									<p>{userData[0].price}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<button>View order history</button>
				<Footer />
			</div>
		);
	}
	// else {
	//   //   <h1>You do not have access rights to this page</h1>;
	//   // }
}
