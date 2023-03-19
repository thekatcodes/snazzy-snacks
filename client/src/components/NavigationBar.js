import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
  return (
    <div className="header">
      <div className="logo">Snazzy Snacks</div>
      <div className="login-register">
        <button className="login">Log In</button>
        <button className="register">Register</button>
      </div>
    </div>
  )
}

export default NavigationBar
