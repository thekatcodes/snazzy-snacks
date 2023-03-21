import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import NavigationBar from './components/NavigationBar';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  // React Router may be the answer

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const [cookieValue, setCookieValue] = useState('');

  const handleIndex = () => {
    setLogin(false);
    setRegister(false);
  }

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
  }

  const handleRegister = () => {
    setRegister(true);
    setLogin(false);
  }

  return (
    <div className="App">
      <NavigationBar
        cookieValue={cookieValue}
        setCookieValue={setCookieValue}
        setIndex={handleIndex}
        setLogin={handleLogin}
        setRegister={handleRegister}
      />
      {login && 
        <Login 
          setCookieValue={setCookieValue}
          setIndex={handleIndex}
          setLogin={handleLogin}
          setRegister={handleRegister}
        />
      }
      {register && 
        <Register
          setCookieValue={setCookieValue} 
          setIndex={handleIndex}
          setRegister={handleRegister}
        /> 
      }
    </div>
  );
}

export default App;
