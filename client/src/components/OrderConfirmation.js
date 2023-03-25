import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import "./styles/confirmation.scss";

export default function OrderConfirmation(props) {
	// console.log(props.cookieValue); // -> first_name
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/order-summary");
				// console.log("order confirmation response:", response.data);
				setUserData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	//replace with pretty loader later
	if (!userData) {
		// return <Loader />;
    return <></>
	}

	console.log(userData[0]); //logs the most recent order

	// handle button click which navigates to /account
	const handleViewOrderHistory = () => {
		window.location.href = "/account";
	};

	if (userData[0].first_name === props.cookieValue) {
	return (
		<div className="c-order-confirmation fade-in-div">
			<h1 className="order-complete">Your order is complete!</h1>
			<div className="details-container">
				<div className="c-order-confirmation__grid">
					<span>
						<h4 className="order-sub-heading">Order number: {userData[0].order_number}</h4>
						{/* <p className="order-text"></p> */}
					</span>
				</div>
				<div className="c-order-confirmation__grid">
					<span>
						<h4 className="order-sub-heading">Email address</h4>
						<p className="order-text">{userData[0].email}</p>
					</span>
				</div>
				<div className="c-order-confirmation__grid">
					<div>
						<h4 className="order-sub-heading">Shipping address</h4>
						<div>
							<p className="order-text">{userData[0].street}</p>
							<p className="order-text">
								{userData[0].city}, {userData[0].province}{" "}
								{userData[0].postal_code}
							</p>
							<p className="order-text">{userData[0].country}</p>
						</div>
					</div>
				</div>
				<div className="c-order-confirmation__grid">
					<div className="c-order-confirmation__total">
						<div className="c-order-confirmation__total-wrapper">
							<h4 className="order-sub-heading">Order summary</h4>
							<div className="c-order-confirmation__label tier-wrapper">
								<p className="order-text">{userData[0].subscription_tier} box</p>
								<div className="c-order-confirmation__value">
									<p className="order-text">{userData[0].price}.00$</p>
								</div>
							</div>
							<div className="c-order-confirmation__label total">
								<p className="order-text total">TOTAL</p>
								<div className="c-order-confirmation__value">
									<p className="order-text total">{userData[0].price}.00$</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h2 className="happy-snacking">HAPPY SNACKING!</h2>
			<div className="button-container">
				<button
					className="button coiny button--orangy"
					onClick={handleViewOrderHistory}
				>
					View order history
				</button>
			</div>
			<Footer />
		</div>
	);
	}
	else {
	    <h1>You do not have access to this page</h1>
	  }
}
