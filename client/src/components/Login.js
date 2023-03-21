// Communications with backend should be done with Axios
// Check react router
// CSS Libraries: Bootstrap, Material UI - UI Library

import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Login Function
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/login', {email: email, password: pwd})
      .then((res) => {
        if(res.data.login) {
          console.log("Response received: ", res);
          // console.log("cookie was set to: ", res.data.cookie);
          console.log("This is the name from backend: ", res.data.firstname)

          props.setCookieValue(res.data.firstname);

          props.setIndex();
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
    <section>
      {/* Error message display */}
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
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
        <button>Log In</button>
      </form>
      <p>
        Don't have an account yet? Sign up&nbsp;
        <a href="javascript:void(0);" onClick={props.setRegister}>here</a>  
      </p>
    </section>
  )
}

export default Login
