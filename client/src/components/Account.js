import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from "./Button";

import "./styles/Account.scss";

const Account = (props) => {

  const navigate = useNavigate();

  if(!props.cookieValue) {
    console.log("This is the cookie value: ", props.cookieValue);
    navigate('/login');
  }

  const [userData, setUserData] = useState(null);

  // Function to return username - need to run it because if update profile is updated, it needs to re-render
  useEffect(() => {
    axios.get('/cookie')
      .then((res) => {
        props.setCookieValue(res.data.cookie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.cookieValue]);

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

  let filteredUser = [];

  if(props.cookieValue && userData) {
    filteredUser = userData.filter(user => user.first_name === props.cookieValue);
  }

  return (
    <section>
      <div className="account-layout">
        <Sidebar 
          cookieValue={props.cookieValue}
          setCookieValue={props.setCookieValue}
        />
        <div className="account fade-in-div">
          {filteredUser.length === 0 ? (
            <>
              <div>No order has been made yet.</div>
              <Link to="/subscriptions">
                <Button orangy>Get Your First Box</Button>
              </Link>
            </>
          ) 
          :
            <>
              <div>Order History</div>
              <br />
              <div className="orderby">Order placed by: {props.cookieValue}</div>
              <table>
                <thead>
                  <tr>
                    <th>Order n.</th>
                    <th>Product</th>
                    <th>Order Date</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUser.map((order) => (
                    <tr>
                      <td>{order.order_number}</td>
                      <td>{order.subscription_tier}</td>
                      <td>{order.order_date.substring(0, 10)}</td>
                      <td>${order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          }
        </div>
      </div>
      <div><Footer /></div>
    </section>  
  )
}

export default Account;
