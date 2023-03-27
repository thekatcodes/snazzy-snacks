import React, { useState } from "react";
// import classNames from "classnames";

import "./styles/Subscriptions.scss";
// import CheckoutForm from "./CheckoutForm";
// import Button from "./Button";
import SnackPreview from "./SnackPreview";
// import Footer from "./Footer";

import tier1 from "../images/tier1_image.png";
import tier2 from "../images/tier2_image.png";
import tier3 from "../images/tier3_image.png";

function Subscriptions() {
  const [tierInfo, setTierInfo] = useState(0);
  const [preview, setPreview] = useState(false);
  const [opacity, setOpacity] = useState();

  const boxTiers = [
    {
      tier: 1,
      price: 20,
      quantity: 5,
      img: tier1
    },
    {
      tier: 2,
      price: 40,
      quantity: 8,
      img: tier2
    },
    {
      tier: 3,
      price: 60,
      quantity: 12,
      img: tier3
    }
  ];

  const handleClick = (index) => {
    setOpacity(index);
  }

  const tierCards = boxTiers.map((box, i) => {
    return (
      <div 
        className={opacity === i ? "tier-card" : "tier-card halfOP"} 
        id={i} 
        onClick={() => {
          setPreview(true); 
          setTierInfo(box.price);
          handleClick(i);
        }}
      >
        <h2>Tier {box.tier}</h2>
        <img src={box.img} alt="Snack" />
        <p>{box.quantity} full-size snacks<br />from all over the world!</p>
        <h3>{box.price}$/mo</h3>
      </div>
    );
  });

  return (
    <section className="subs-layout layout navbar-padding">
      <h1>Choose Your Tier!</h1>
      <div className="tier-list">
        {tierCards}
      </div>
      {preview && <SnackPreview tier={tierInfo} />}
      {/* <Footer /> */}
      {/* <CheckoutForm /> */}
    </section>
  )
}

export default Subscriptions;
