import React from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import axios from 'axios';
import './styles/NavigationBar.scss';

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
    <>
      <div className="header coiny">
        <div className="logo">SNAZZY<br />SNACKS</div>
        <div className="login-register">
          { props.cookieValue ?
            <>
              <div className="intro">Hello {props.cookieValue}! Please buy our snacks!</div>
              <button className="logout" onClick={logout}>Log Out</button>
            </>
            :
            <ul className="login-register">
              <li>
                <NavLink className="inactive" to="/login">
                  {/* <button >Log In</button> */}
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink className="inactive" to="/register">
                  {/* <button className="register">Sign Up</button> */}
                  Sign Up
                </NavLink>
              </li>
            </ul>
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default NavigationBar;
