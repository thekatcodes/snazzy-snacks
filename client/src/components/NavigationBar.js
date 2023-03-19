import React from 'react';
import './NavigationBar.css';

const NavigationBar = (props) => {
  return (
    <div className="header">
      <div className="logo">Snazzy Snacks</div>
      <div className="login-register">
        <button className="login" onClick={props.setLogin}>Log In</button>
        <button className="register"onClick={props.setRegister}>Register</button>
      </div>
    </div>
  )
}

export default NavigationBar
