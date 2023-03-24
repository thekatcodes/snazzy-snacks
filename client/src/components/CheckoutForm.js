import React, { useState, useEffect } from "react";
// import tier1 from '../images/tier1_image.png';
import Button from "./Button";

const ProductDisplay = () => (
    <section>
      {/* <div className="product">
        <img
          src={tier1}
          alt="Tier 1"
        />
        <div className="description">
        <h3>Tier 1</h3>
        <h5>$20.00</h5>
        </div>
      </div> */}
        <form action="/create-checkout-session" method="POST">
            <input type="hidden" name="priceId" value="price_1MncSlGdWagE6Ui8ya3zUfDR" />
            <Button orangy type="submit">
            Continue
            </Button>
        </form>
    </section>
  );
  
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  
  export default function App() {
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("success")) {
        setMessage("Order placed! You will receive an email confirmation.");
      }
  
      if (query.get("canceled")) {
        setMessage(
          "Order canceled -- continue to shop around and checkout when you're ready."
        );
      }
    }, []);
  
    return message ? (
      <Message message={message} />
    ) : (
      <ProductDisplay />
    );
  }