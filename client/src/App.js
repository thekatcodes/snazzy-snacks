import React, { useState } from "react";
import "./App.css";
import CheckoutForm from "./components/CheckoutForm";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavigationBar from './components/NavigationBar';
import Login from "./components/Login";
import Register from './components/Register';
// import Profile from './components/Profile';

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
    </Routes>
    </>
  );
}

export default App;
