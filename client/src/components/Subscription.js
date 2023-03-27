//Future account/subscription component
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from "./Button";

import "./styles/Subscription.scss";

const Subscription = (props) => {

  const navigate = useNavigate();
  
  const [userData, setUserData] = useState(null);

  // Grab user data for boxes
  useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/order-summary");
        setUserData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
  }, []);

  let index = null;

  console.log("This is userData on subscription page: ", userData);
  if (props.cookieValue && userData) {
    index = userData.findIndex(user => user.first_name === props.cookieValue);
    if (index === -1) {
      index = null;
    }
  }

  const cancelSubscription = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to cancel your subscription?')) {
      axios.put("/cancel-subscription")
      .then((res) => {
        console.log("Your subscription is now: ", res.data.subscription);
        navigate(0);
      })
      .catch((err) => {
        console.log("You are about to cancel your subscription (ERR)");
      });
    }
  }

  return (
    <section>
      <div className="account-layout">
        <Sidebar
          cookieValue={props.cookieValue}
          setCookieValue={props.setCookieValue}
        />
        <div className="subscription">
          {index && userData[index].subscribe ? (
            <>
              <div>My Subscription</div>
              <br></br>
              <div className="subs-info">Current Subscription:
                <div className="tier">
                  &nbsp;{userData[index].subscription_tier}
                </div>
              </div>
              <br></br>
              <div className="buttons">
                <Link to="/subscriptions">
                  <Button orangy>Change Tier</Button>
                </Link>
                <Button tomato onClick={cancelSubscription}>Cancel</Button>
              </div>
            </>
          )
          : 
            <>
              <div>You have no active subscription yet.</div>
              {/* Route it to subscriptions? */}
              <Link to="/subscriptions">
                <Button orangy>Get Your First Box</Button>
              </Link>
            </>
          }
        </div>
      </div>
      <div><Footer /></div>
    </section>
  )
}

export default Subscription;
