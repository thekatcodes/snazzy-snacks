import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Button from "./Button";
import Footer from "./Footer";

import "./styles/Login-Registration.scss";

const Register = (props) => {

  const navigate = useNavigate();

  // If cookie exist, it automatically redirects to homepage - blocks access to register page once logged in
  useEffect(() => {
    if(props.cookieValue) {
      console.log("Hello");
      navigate("/");
    } else {
      navigate("/register");
    }
  }, [props.cookieValue, navigate])

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Registration Function
  const handleSignUp = (event) => {
    event.preventDefault(); 
    try {
      axios.post('/register', {firstname: firstname, lastname: lastname, email: email, password: pwd, password2: pwd2})
      .then((res) => {
        if(res.data.registration) {
          props.setCookieValue(res.data.firstname);
          navigate("/subscriptions");
        }
      })
      .catch((err) => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPwd('');
        setPwd2('');
        setErrMsg(err.response.data);
      });
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <section className="login-layout layout">
      {/* Error message display */}
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Create An Account</h1>
      <form className="form-layout" onSubmit={handleSignUp}>
        <label htmlFor="firstname" />
        <input 
          type="text" 
          id="firstname"
          autoComplete="off"
          onChange={(event) => setFirstname(event.target.value)}
          value={firstname}
          placeholder="First Name"
          required
        />
        <label htmlFor="lastname" />
        <input 
          type="text" 
          id="lastname"
          autoComplete="off"
          onChange={(event) => setLastname(event.target.value)}
          value={lastname}
          placeholder="Last Name"
          required
        />
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
        <label htmlFor="password" />
        <input 
          type="password" 
          id="password2"
          onChange={(event) => setPwd2(event.target.value)}
          value={pwd2}
          placeholder="Confirm Password"
          required
        />
        <Button orangy>Sign Up</Button>
      </form>
      <div><Footer /></div>
    </section>
  )
}

export default Register;
