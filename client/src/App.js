import React, { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavigationBar from './components/NavigationBar';
import Landing from "./components/Landing";
import Login from './components/Login';
import Register from './components/Register';

import Account from './components/Account';
import Subscription from './components/Subscription';
import Profile from './components/Profile';
import RENAME from './components/RENAME';

import Temp from "./components/Temp";

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
        <Route path="/account">
          <Route index element={
            <Account 
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          } />
          {/* rename to this  */}
          <Route path="subscription" element={
            <Subscription 
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          } />
          <Route path="rename" element={
            <RENAME 
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
        </Route>    
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/temp" element={
          <Temp 
          />
        } />
      </Routes>
    </>
  );

}

export default App;
