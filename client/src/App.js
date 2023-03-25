import React, { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import NavigationBar from './components/NavigationBar';
import Landing from "./components/Landing";
import Login from './components/Login';
import Register from './components/Register';

import Address from './components/Address';
import Account from './components/Account';
import Profile from './components/Profile';
import Subscription from './components/Subscription';
import Subscriptions from "./components/Subscriptions";
import OrderConfirmation from "./components/OrderConfirmation"

function App() {

  const [cookieValue, setCookieValue] = useState('');

  return (
    <Routes>
      <Route path="/" element={
        <Landing 
          cookieValue={cookieValue}
          setCookieValue={setCookieValue}
        />
      } />
      <Route element={
        <NavigationBar
          cookieValue={cookieValue}
          setCookieValue={setCookieValue}
        />
      }>
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
        <Route path="/account">
          <Route index element={
            <Account 
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          } />
          <Route path="subscription" element={
            <Subscription 
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          } />
          <Route path="profile" element={
            <Profile
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          } />
          <Route path="address" element={
            <Address
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          } />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
