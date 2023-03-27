// Communications with backend should be done with Axios
// Check react router
// CSS Libraries: Bootstrap, Material UI - UI Library

import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import Button from "./Button";
import Footer from "./Footer";

import "./styles/Login-Registration.scss";

const Login = (props) => {

  const navigate = useNavigate();

  // If cookie exist, it automatically redirects to homepage - blocks access to login page once logged in
  useEffect(() => {
    if(props.cookieValue) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  }, [props.cookieValue, navigate])

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Login Function
  const handleLogin = (event) => {
    event.preventDefault();
    try {
      axios.post('/login', {email: email, password: pwd})
      .then((res) => {
        if(res.data.login) {
          console.log("Response received: ", res);
          console.log("This is the name from backend: ", res.data.firstname)
            props.setCookieValue(res.data.firstname);
        //**TO UPDATE** currently navigating to /subscriptions (tier choosing) on successful login. TO DO LATER: implement a direct route to My Account if the user has an active subscription */
          navigate("/subscriptions");
        }
      })
      .catch((err) => {
        setEmail('');
        setPwd('');
        setErrMsg(err.response.data);
      });
    } catch (err) {
      console.log(err);
    } 
  }

  return (
    <section className="login-layout layout navbar-padding">
      {/* Error message display */}
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Log In</h1>
      <form className="form-layout" onSubmit={handleLogin}>
        <label htmlFor="email" />
        <input 
          type="email" 
          id="email"
          autoComplete="off"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="Email"
          required
        />
        <label htmlFor="password" />
        <input 
          type="password" 
          id="password"
          onChange={(event) => setPwd(event.target.value)}
          value={pwd}
          placeholder="Password"
          required
        />
        <Button orangy>Log In</Button>
      </form>
      <br />
      <p className="register-link">
        Don't have an account yet? Sign up&nbsp;
        <Link to="/register">here</Link>
      </p>
      <div><Footer /></div>
    </section>
  )
}

export default Login;
