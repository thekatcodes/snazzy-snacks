// Communications with backend should be done with Axios
// Check react router
// CSS Libraries: Bootstrap, Material UI - UI Library

import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Grabbing the backend data
  const [backendData, setBackendData] = useState([{}]);
  
  // This is temporary for seeing if login is successful - DELETE LATER
  const [success, setSuccess] = useState(false);

  // For when component loads - happens only ONCE
  useEffect(() => {
    
    axios.get('/api')
      .then(response => {
        setBackendData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // For when there is an error - when user changes username or password, it refreshes and set the error message to blank
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  // Login Function
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      for(const data of backendData) {
        if(data.name == user && data.password == pwd) {
          setSuccess((prev) => !prev);  
          console.log(success, "This is in the if statement");
          return success;
        }
      }
      setUser('');
      setPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status == 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status == 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      } 
    } 
  }

  return (
    <>
      { success ? (
        // Currently, if login is successful, login screen below is NOT rendered (this is within ternary operator)
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            {/* Placeholder to home link */}
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : ( 
        <section>
          {/* Error message display */}
          <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username"
              autoComplete="off"
              onChange={(event) => setUser(event.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password"
              onChange={(event) => setPwd(event.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?<br />
            <span className="line">
              {/* Placeholder link - react router link to be inputted later */}
              <a href="#">Sign Up</a>  
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default Login
