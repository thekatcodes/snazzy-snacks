import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './NavigationBar.css';

const NavigationBar = (props) => {

  // const [cookieValue, setCookieValue] = useState('');

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
          <button className="login" onClick={props.setLogin}>Log In</button>
          <button className="register"onClick={props.setRegister}>Register</button>
        </>
        }
      </div>
    </div>
  )
}

export default NavigationBar;


  // Function to return cookie value... why did I do this
  // const hasCookie = async () => {
  //   try {
  //     const response = await axios.get('/cookie');
  //     const cookieBoolean = response.data.hasCookie;
  //     const cookieValue = response.data.cookie;
  //     return { hasCookie: cookieBoolean, cookie: cookieValue };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // hasCookie().then((res) => {
  //   console.log("CookieBoolean: ", res.hasCookie)
  //   console.log("cookie value: ", res.cookie)  
  // });
