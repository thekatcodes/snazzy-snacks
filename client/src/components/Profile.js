import React, { useState } from "react";
import axios from 'axios';

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from './Button';

import "./styles/Profile.scss";

const Profile = (props) => {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [sucMsg, setSucMsg] = useState('');

  // Update Profile Function
  const updateProfile = (event) => {
    event.preventDefault(); 
    try {
      axios.put('/account/profile', {email: email, password: pwd, password2: pwd2})
      .then((res) => {
        if(res.data.update) {
          setSucMsg('Profile updated!');
          setEmail('');
          setPwd('');
          setPwd2('');
        }
      })
      .catch((err) => {
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
        <div className="account-layout">
          <Sidebar 
            cookieValue={props.cookieValue}
            setCookieValue={props.setCookieValue}
          />
          <div className="profile">
            {/* Error message display */}
            <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <p className={sucMsg ? "sucmsg" : "offscreen"}>{sucMsg}</p>
            <div className="profile-title">Update Profile</div>
            <br />
            <form className="form-layout" onSubmit={updateProfile}>
              <label htmlFor="email"/>
              <input 
                type="email" 
                id="email"
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                placeholder="Email"
                required
              />
              <label htmlFor="password"/>
              <input 
                type="password" 
                id="password"
                onChange={(event) => setPwd(event.target.value)}
                value={pwd}
                placeholder="Password"
                required
              />
              <label htmlFor="password2"/>
              <input 
                type="password" 
                id="password2"
                onChange={(event) => setPwd2(event.target.value)}
                value={pwd2}
                placeholder="Confirm Password"
                required
              />
              <Button orangy>Save</Button>
            </form>
          </div>
        </div>
        <div><Footer /></div>
      </section>  
    </>
  )
}

export default Profile;
