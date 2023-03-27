import React from 'react';
import { useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';

import { logout } from '../helpers/logout';

import './styles/NavigationBar.scss';

const NavigationBar = (props) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(props.setCookieValue);
    navigate('/');
  };

  // Function to return username
  useEffect(() => {
    axios.get('/cookie')
      .then((res) => {
        props.setCookieValue(res.data.cookie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.cookieValue]);

  return (
    <>
      <div className="header coiny">
        <div className="logo">SNAZZY<br />SNACKS</div>
        { props.cookieValue ?
          <div className="login-register">
            <div className="intro">Hello {props.cookieValue}!</div>
            <div className="dropdown">
              <i className="fa-regular fa-user fa-xl dropdown-hover"></i>
              <div className="dropdown-menu">
                <Link to="/account">
                  <button>My Account</button>
                </Link>
                <button className="logout" onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          </div>
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
                Sign Up
              </NavLink>
            </li>
          </ul>
        }
      </div>
      <Outlet />
    </>
  )
}

export default NavigationBar;
