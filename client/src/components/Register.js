import { useState } from 'react';
import axios from 'axios';

const Register = (props) => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Registration Function
  const handleSignUp = async (event) => {
    event.preventDefault(); 
    try {
      await axios.post('/register', {username: user, email: email, password: pwd, password2: pwd2})
      .then((res) => {
        if(res.data.registration) {
          props.setCookieValue(user);
          props.setIndex();
        }
      })
      .catch((err) => {
        setUser('');
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
    <section>
      {/* Error message display */}
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username </label> <br></br>
        <input 
          type="text" 
          id="username"
          autoComplete="off"
          onChange={(event) => setUser(event.target.value)}
          value={user}
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
        <button>Register</button>
      </form>
    </section>
  )
}

export default Register;
