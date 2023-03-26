import React, { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavigationBar from './components/NavigationBar';
import Landing from "./components/Landing";
import Login from './components/Login';
import Register from './components/Register';
import SnackPreview from './components/SnackPreview';
import Email from "./components/ConfirmationEmail";

// import Profile from './components/Profile';
import Subscriptions from "./components/Subscriptions";
import OrderConfirmation from "./components/OrderConfirmation"

function App() {

  const [cookieValue, setCookieValue] = useState('');

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={
        <NavigationBar
          cookieValue={cookieValue}
          setCookieValue={setCookieValue}
        />
      }>
        {/* <Route path="/" element={
          <Home 
            cookieValue={cookieValue}
          />
        } /> */}
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
      </Route>
      {/* <Route path="/preview" element={
          <SnackPreview
            cookieValue={cookieValue}
            setCookieValue={setCookieValue}
          />
        } /> */}
      <Route path="/email" element={
        <Email
          cookieValue={cookieValue}
          setCookieValue={setCookieValue}
        />
      } />
    </Routes>
  );

}

export default App;
