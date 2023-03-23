import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

function OrderConfirmation(props) {
	console.log(props.cookieValue); // -> first_name
	const [userData, setUserData] = useState(null);

	useEffect(() => {
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

	return (
		<>
			<h1>Your order is complete!</h1>
			<div>
				{userData &&
          userData.map((order, index) => {
            
						// Filter orders by first name & cookieValue
            if (order.first_name === props.cookieValue) {

              // In case a user has previous purchases, at new checkout, the data will be filtered to render the highest order number (aka most recent order)
              const maxOrderNumber = Math.max(...userData.map(order => order.order_number));
              const mostRecentOrder = userData.find(order => order.order_number === maxOrderNumber);
              console.log(mostRecentOrder);

							return (
								<div key={index}>
									<p>Order number: {mostRecentOrder.order_number}</p>
									<p>Email address: {mostRecentOrder.email}</p>
									<p>
										Shipping address: {mostRecentOrder.street}, {mostRecentOrder.city},{" "}
										{mostRecentOrder.province}, {mostRecentOrder.country} {mostRecentOrder.postal_code}
									</p>
									<p>Order summary: {mostRecentOrder.price}</p>
								</div>
							);
						}
						// If order doesn't match the if condition, return null
						return null;
					})}
			</div>
			<button>View order history</button>
			<Footer />
		</>
	);
}

export default OrderConfirmation;
