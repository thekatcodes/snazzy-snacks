import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import NavigationBar from './components/NavigationBar';
import { useState } from 'react';

function App() {
  
  // FUTURE LOGIC - create an object with all the states, and make a function that turns everything but selected false so it renders only one page at a time

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

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
        setIndex={handleIndex}
        setLogin={handleLogin}
        setRegister={handleRegister}
      />
      {login && 
        <Login 
          setIndex={handleIndex}
          setLogin={handleLogin}
          setRegister={handleRegister}
        />
      }
      {register && 
        <Register 
          setIndex={handleIndex}
          setRegister={handleRegister}
        /> 
      }
    </div>
  );
}

export default App;
