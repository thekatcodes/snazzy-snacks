import React from "react";
import "./styles/Sidebar.scss";
import "./styles/Button.scss";

import axios from 'axios';

const Sidebar = (props) => {

  // Copied from navigationbar - Make this reusable later?
  const logout = async (event) => {
    event.preventDefault();
    try{
      await axios.post('/logout')
      .then((res) => {
        props.setCookieValue('');
      })
      .catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  }

  const path = window.location.pathname;
  console.log(path === '/account');
  return (
    <>
      <section className="sidebar">
        <div className="sidebar-title">My Account</div>
        <a href="/account" className={`sidebar-row link ${path === '/account' ? 'active' : ''}`}>Orders</a>
        <a href="/account/subscription" className={`sidebar-row link ${path === '/account/subscription' ? 'active' : ''}`}>Subscription</a>
        <a href="/account/profile" className={`sidebar-row link ${path === '/account/profile' ? 'active' : ''}`}>Update Profile</a>
        <a href="#" onClick={logout} className="sidebar-row link">Log Out</a>
    </section>
    </>
  )
}

export default Sidebar;
