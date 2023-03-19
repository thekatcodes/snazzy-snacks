import { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');

  useEffect(() => {
    axios.get('/register')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  })

  // Registration Form Submission -> Back End
  // How to pass post request login details to backend
  function handleSignUp() {
    axios.post('/register')
      .then(() => {

      })
  }

  return (
    <section>
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
          type="text" 
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

export default Register
