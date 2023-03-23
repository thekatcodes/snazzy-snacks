
import React, { useState, useEffect } from "react";
import axios from "axios";

function OrderConfirmation() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
          const response = await axios.get("/api");
          console.log(response.data)
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
        {userData && (
          <>
            <p>Email address: {userData.email}</p>
            <p>
              Shipping address: {userData.street}, {userData.city},{" "}
              {userData.province}, {userData.country} {userData.postal_code}
            </p>
          </>
        )}
        <p>Order summary:</p>
      </div>
      <button>View order history</button>
    </>
  );
}

export default OrderConfirmation;