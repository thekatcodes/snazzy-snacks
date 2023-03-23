import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Sidebar from './Sidebar';
import "./styles/Profile.scss";

const Profile = (props) => {

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Update Profile Function
  const updateProfile = (event) => {
    event.preventDefault(); 
    try {
      axios.put('/account/profile', {firstname: firstname, lastname: lastname, email: email, password: pwd, password2: pwd2})
      .then((res) => {
        if(res.data.update) {
          navigate("/account/");
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
    <>
      <section>
        <Sidebar 
          cookieValue={props.cookieValue}
          setCookieValue={props.setCookieValue}
        />
        {/* Error message display */}
        <div className="profile">
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <div className="title">Update Profile</div>
          <form onSubmit={updateProfile}>
            <label htmlFor="firstname">First Name</label> <br></br>
            <input 
              type="text" 
              id="firstname"
              autoComplete="off"
              onChange={(event) => setFirstname(event.target.value)}
              value={firstname}
              required
            /><br></br><br></br>
            <label htmlFor="lastname">Last Name</label> <br></br>
            <input 
              type="text" 
              id="lastname"
              autoComplete="off"
              onChange={(event) => setLastname(event.target.value)}
              value={lastname}
              required
            /><br></br><br></br>
            <label htmlFor="email">Email</label><br></br>
            <input 
              type="email" 
              id="email"
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            /><br></br><br></br>
            <label htmlFor="password">Password</label><br></br>
            <input 
              type="password" 
              id="password"
              onChange={(event) => setPwd(event.target.value)}
              value={pwd}
              required
            /><br></br><br></br>
            <label htmlFor="password">Confirm Password</label><br></br>
            <input 
              type="password" 
              id="password2"
              onChange={(event) => setPwd2(event.target.value)}
              value={pwd2}
              required
            /><br></br><br></br>
            <button>Update</button>
          </form>
        </div>
      </section>  
    </>
  )
}

export default Profile;
