// Communications with backend should be done with Axios
// Check react router
// CSS Libraries: Bootstrap, Material UI - UI Library

import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  
  // This is temporary for seeing if login is successful
  const [success, setSuccess] = useState(false);

  // For when there is an error - when user changes username or password, it refreshes and set the error message to blank
  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  // Login Function
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/login', {username: user, password: pwd})
      .then((res) => {
        setSuccess(res.data.login);
        setUser('');
        setPwd('');
      })
      .catch((err) => {
        console.log(err)
      })
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      } 
    } 
  }

  // Register Link -> Front End (INCOMPLETE)
  function handleSignUp() {
    axios.get('/register')
      .then(() => {
        console.log("clicked on register");
        
      })
      .catch(error => {
      console.log(error);
    })
  };

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
          <h1>Log In</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username: </label>
            <br>
            </br>
            <input 
              type="text" 
              id="username"
              autoComplete="off"
              onChange={(event) => setUser(event.target.value)}
              value={user}
              required
            />
            <br>
            </br>
            <br>
            </br>
            <label htmlFor="password">Password</label>
            <br>
            </br>
            <input 
              type="password" 
              id="password"
              onChange={(event) => setPwd(event.target.value)}
              value={pwd}
              required
            />
            <br></br>
            <br></br>
            <button>Log In</button>
          </form>
          <p>
            Don't have an account yet? Sign up&nbsp;
            <a href="/register" onClick={handleSignUp}>here</a>  
          </p>
        </section>
      )}
    </>
  )
}

export default Login
