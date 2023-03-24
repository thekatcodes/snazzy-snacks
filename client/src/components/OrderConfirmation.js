import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

export default function OrderConfirmation(props) {
  console.log('TESTSETES');
	console.log(props.cookieValue); // -> first_name
	const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log('USE EFFECT')

		async function fetchData() {
			try {
				const response = await axios.get("/order-summary");
				console.log("order confirmation response:", response.data);
				setUserData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
  }, []);
  
  if (!userData) {
    return <div>Loading...</div>;
  }

  console.log(userData[0]);

   // handle button click
   const handleViewOrderHistory = () => {
    window.location.href = "/account"; // navigate to new URL
   };
  
	// if (userData[0].first_name === props.cookieValue) {
		return (
			<div className="c-order-confirmation">
				<h1>Your order is complete!</h1>
				<div>
          <div className="c-order-confirmation__grid">
            <span>
            <h4>Order number: </h4>
            <p>{userData[0].order_number}</p>
            </span>
					</div>
          <div className="c-order-confirmation__grid">
            <span>
						<h4>Email address</h4>
						<p>{userData[0].email}</p>
            </span>
					</div>
					<div className="c-order-confirmation__grid">
						<h4>Shipping address</h4>
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

				<button onClick={handleViewOrderHistory}>View order history</button>
				<Footer />
			</div>
		);
	// }
	// else {
	//     <h1>You do not have access to this page</h1>
	//   }
}
