import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from './Footer'

function OrderConfirmation() {
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
        <p>Order number: </p>
        {userData && userData.map((order, index) => (
          <div key={index}>
            <p>Email address: {order.email}</p>
            <p>
              Shipping address: {order.street}, {order.city},{" "}
              {order.province}, {order.country} {order.postal_code}
            </p>
          </div>
        ))}
        <p>Order summary:</p>
      </div>
          <button>View order history</button>
          <Footer />
    </>
  );
}

export default OrderConfirmation;