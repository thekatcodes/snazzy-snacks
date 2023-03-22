import React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './NavigationBar.css';

const NavigationBar = (props) => {

  const logout = async (event) => {
    event.preventDefault();
    try{
      await axios.post('/logout')
      .then((res) => {
        props.setCookieValue('');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  }

  // Function to return username
  useEffect(() => {
    axios.get('/cookie')
      .then((res) => {
        props.setCookieValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.cookieValue]);

  return (
    <div className="header">
      <div className="logo">Snazzy Snacks</div>
      <div className="login-register">
        { props.cookieValue ?
        <>
          <div className="intro">Hello {props.cookieValue}! Please buy our snacks!</div>
          <button className="logout" onClick={logout}>Log Out</button>
        </>
        :
        <>
          <Link to="/login">
            <button className="login">Log In</button>
          </Link>
          <Link to="/register">
            <button className="register">Register</button>
          </Link>
        </>
        }
      </div>
    </div>
  )
}

export default NavigationBar;
