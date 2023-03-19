import './App.css';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import { useState } from 'react';

function App() {
  
  const [ loginComplete, setLoginComplete ] = useState(false);

  const handleLogin = () => {
    setLoginComplete(true);
  }

  return (
    <div className="App">
      <NavigationBar />
      {!loginComplete && 
        <Login 
          setLoginComplete={handleLogin}
        />
      }
      {/* {loginComplete &&

      } */}
    </div>
  );
}

export default App;
