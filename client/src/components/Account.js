import React, { useState, useEffect } from "react";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Footer from './Footer';

import "./styles/Account.scss";

// Did not add shopping cart, since it required installing dependency - is there an easier way to do this? 
//https://fontawesome.com/icons/cart-shopping?f=sharp&s=regular the link to shopping cart

const Account = (props) => {

  const [orderHistory, setOrderHistory] = useState([]);

  console.log(props.cookieValue);

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

  // Logic for grabbing order history from backend - no backend at the moment
  useEffect(() => {
    axios.get('/api/order_history')
      .then((res) => {
        setOrderHistory(res.data);
      })
      .catch((err) => {
        console.log("It doesn't work right now, so don't worry about it");
      })
  }, []);

  return (
    <section>
      <Sidebar 
        cookieValue={props.cookieValue}
        setCookieValue={props.setCookieValue}
      />
      <div className="account">
        {/* {orderHistory.length === 0 ? (
          <>
            <div>No order has been made yet.</div>
            <Button>Get your first box</Button>
          </>
        ) 
        : */}
          <>
            <div>Order History</div>
            <br></br><br></br>
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
                <tr>
                  <td>Test</td>
                  <td>Best one</td>
                  <td>Today</td>
                  <td>Tree fiddy</td>
                </tr>
                {orderHistory.map((order, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order.product}</td>
                    <td>{order.date}</td>
                    <td>$ {order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        {/* } */}
      </div>
      <div><Footer /></div>
    </section>  
  )
}

export default Account;
