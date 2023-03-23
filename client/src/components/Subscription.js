//Future account/subscription component
import React, { useState, useEffect } from "react";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from "./Button";

import "./styles/Subscription.scss";

const Subscription = (props) => {

  const [subscription, setSubscription] = useState(0);

  // Logic for grabbing subscription data from backend - does not work atm
  useEffect(() => {
    axios.get('/api/subscription')
      .then((res) => {
        setSubscription(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <section>
      <Sidebar
        cookieValue={props.cookieValue}
        setCookieValue={props.setCookieValue}
      />
      <div className="rename">
        {subscription === 0 ? (
          <>
            <div>No order has been made yet.</div>
            {/* Route it to subscriptions? */}
            <Button>Get your first box</Button>
          </>
        )
        : 
          <>
            <div>My Subscription</div>
            <br></br>
            <div className="info">Current Subscription: Tier {subscription}</div>
            <div className="buttons">
            {/* Route it to subscriptions? */}
            <Button>Change</Button>
            <Button>Cancel</Button>
            </div>
          </>
        }
      </div>
      <div><Footer /></div>
    </section>
  )
}

export default Subscription;
