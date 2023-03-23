import React, { useState, useEffect } from "react";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Button from "./Button";

import "./styles/Account.scss";

// Did not add shopping cart, since it required installing dependency - is there an easier way to do this? 
//https://fontawesome.com/icons/cart-shopping?f=sharp&s=regular the link to shopping cart

const Account = (props) => {

  const [orderHistory, setOrderHistory] = useState([]);

  // Function to return username - need to run it because if update profile is updated, it needs to re-render
  useEffect(() => {
    axios.get('/cookie')
      .then((res) => {
        props.setCookieValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.cookieValue]);

  // Logic for grabbing order history from backend - does not work atm
  useEffect(() => {
    axios.get('/api/order_history')
      .then((res) => {
        setOrderHistory(res.data);
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
            <div class="orderby">Order placed by: {props.cookieValue}</div>
            <table>
              <thead>
                <tr>
                  <th>Order n.</th>
                  <th>Product</th>
                  <th>Order Date</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Test</td>
                  <td>Best one</td>
                  <td>Today</td>
                  <td>Tree fiddy</td>
                  <td>
                    {/* Need to add the cart img */}
                    <i class="fa-sharp fa-regular fa-cart-shopping"></i>
                    <a href="/account/subscription">Reorder</a>
                  </td>
                </tr>
                {orderHistory.map((order, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order.product}</td>
                    <td>{order.date}</td>
                    <td>$ {order.price}</td>
                    <td>
                    {/* Need to add the cart img */}
                    <a href="/account/subscription">Reorder</a>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        {/* } */}
      </div>
    </section>  
  )
}

export default Account;
