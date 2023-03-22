import React, { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavigationBar from './components/NavigationBar';
// import Landing from "./components/Landing";
import Login from './components/Login';
import Register from './components/Register';

// import Temp from "./components/Temp";
// import Profile from './components/Profile';
import Subscriptions from "./components/Subscriptions";
import OrderConfirmation from "./components/OrderConfirmation"

function App() {

  const [cookieValue, setCookieValue] = useState('');

  return (
    <>
      <NavigationBar
        cookieValue={cookieValue}
        setCookieValue={setCookieValue}
      />
      <Routes>
        <Route path="/" element={
          <Home 
            cookieValue={cookieValue}
          />
        } />
        <Route path="/login" element={
          <Login 
            cookieValue={cookieValue}
            setCookieValue={setCookieValue}
          />
        } />
        <Route path="/register" element={
          <Register
            cookieValue={cookieValue}
            setCookieValue={setCookieValue} 
          /> 
        } />
        {/* <Route path="/profile" element={
          <Profile
            cookieValue={cookieValue}
            setCookieValue={setCookieValue} 
          /> 
        } /> */}
        <Route path="/subscriptions" element={
        <Subscriptions
          cookieValue={cookieValue}
          setCookieValue={setCookieValue}
        />
      } />    
        <Route path="/order-confirmation" element={
        <OrderConfirmation
          cookieValue={cookieValue}
          setCookieValue={setCookieValue}
        />
      } />  
        {/* <Route path="/" element={<Landing />} />
        <Route path="/temp" element={<Temp />} /> */}
      </Routes>
    </>
  );

}

export default App;
