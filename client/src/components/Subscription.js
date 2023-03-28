//Future account/subscription component
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; 
import Swal from 'sweetalert2';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from "./Button";

import { createModal, showSuccessMessage } from "../helpers/createModal";
import sadCatUrl from "../images/sadcat.jpg";

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

  // Identifying the location of the current user using index
  let index = null;

  if (props.cookieValue && userData) {
    index = userData.findIndex(user => user.first_name === props.cookieValue);
    if (index === -1) {
      index = null;
    }
  }
  if (index !== null) {
    index += 1;
  }
  
  const cancelSubscription = (event) => {
    event.preventDefault();

    createModal({
      title: 'Mistakes happen.',
      text: "But it's okay, we got you! Just click on the 'Take me back' button :)",
      icon: 'warning',
      confirmButtonText: 'No, I want to cancel',
      cancelButtonText: 'Take me back!',
      confirmButtonColor: '#ff8a28'
    }).then(() => {
      return createModal({
        title: 'Wha... What?',
        text: "Wait, you're leaving? Is this just a sugar-deprived delusion?",
        icon: 'warning',
        confirmButtonText: 'I still want to cancel.',
        cancelButtonText: "You're right, I was just hangry.",
      });
    }).then(() => {
      return createModal({
        text: " Please stay, we will miss you :( ",
        imageUrl: sadCatUrl,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Custom image',
        confirmButtonText: 'Cancel',
        cancelButtonText: ':D ',
      });
    }).then(() => {
      return axios.put("/cancel-subscription");
    }).then(() => {
      navigate(0);
    }).catch(() => {
      showSuccessMessage();
    });
  }

  return (
    <section>
      <Sidebar
        cookieValue={props.cookieValue}
        setCookieValue={props.setCookieValue}
      />
      <div className="subscription">
        {index && userData[index-1].subscribe ? (
          <>
            <div>My Subscription</div>
            <br></br>
            <div>Current Subscription:
              <div className="tier">
                &nbsp;{userData[index-1].subscription_tier}
              </div>
            </div>
            <div className="buttons">
            <Link to="/subscriptions">
              <Button>Change Tier</Button>
            </Link>
            <Button onClick={cancelSubscription}>Cancel</Button>
            </div>
          </>
        )
        : 
          <>
            <div>No order has been made yet.</div>
            {/* Route it to subscriptions? */}
            <Link to="/subscriptions">
              <Button>Get your first box</Button>
            </Link>
          </>
        }
      </div>
      <div><Footer /></div>
    </section>
  )
}

export default Subscription;
