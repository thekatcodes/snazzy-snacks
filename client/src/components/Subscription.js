//Future account/subscription component
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from "./Button";

import "./styles/Subscription.scss";

const Subscription = (props) => {

  const [userData, setUserData] = useState(null);

  // Grab user data for boxes
  useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/order-summary");
				console.log("Response Data from /subscription: ", response.data);
        setUserData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
  }, []);

  let index = null;

  if (props.cookieValue && userData) {
    index = userData.findIndex(user => user.first_name === props.cookieValue);
  }

  return (
    <section>
      <Sidebar
        cookieValue={props.cookieValue}
        setCookieValue={props.setCookieValue}
      />
      <div className="subscription">
        {index === null ? (
          <>
            <div>No order has been made yet.</div>
            {/* Route it to subscriptions? */}
            <Link to="/subscriptions">
              <Button>Get your first box</Button>
            </Link>
          </>
        )
        : 
          <>
            <div>My Subscription</div>
            <br></br>
            <div>Current Subscription:
              <div className="tier">
                &nbsp;{userData[index].subscription_tier}
              </div>
            </div>
            <div className="buttons">
            <Link to="/subscriptions">
              <Button>Change Tier</Button>
            </Link>
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
