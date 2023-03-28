import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";

import NavigationBar from './components/NavigationBar';
import Landing from "./components/Landing";
import Login from './components/Login';
import Register from './components/Register';
import SnackPreview from './components/SnackPreview';

import Address from './components/Address';
import Account from './components/Account';
import Profile from './components/Profile';
import Subscription from './components/Subscription';
import Subscriptions from "./components/Subscriptions";
import OrderConfirmation from "./components/OrderConfirmation";
import Misc from './components/Misc';

function App() {

  const navigate = useNavigate();

  const [cookieValue, setCookieValue] = useState('');
  console.log("This is cookie value when page is rendered: ", cookieValue);

  const PrivateRoute = ({ children }) => {
    console.log("This is cookie value inside PrivateRoute: ", cookieValue);
    return cookieValue ? children : navigate("/login")
  }

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
          <PrivateRoute>
            <Subscriptions
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          </PrivateRoute>
        } />
        <Route path="/order-confirmation" element={
          <PrivateRoute>
            <OrderConfirmation
              cookieValue={cookieValue}
              setCookieValue={setCookieValue}
            />
          </PrivateRoute>
        } />  
        <Route path="/account">
          <Route index element={
            <PrivateRoute>
              <Account 
                cookieValue={cookieValue}
                setCookieValue={setCookieValue}
              />
            </PrivateRoute>
          } />
          <Route path="subscription" element={
            <PrivateRoute>
              <Subscription 
                cookieValue={cookieValue}
                setCookieValue={setCookieValue}
              />
            </PrivateRoute>
          } />
          <Route path="profile" element={
            <PrivateRoute>
              <Profile
                cookieValue={cookieValue}
                setCookieValue={setCookieValue}
              />
            </PrivateRoute>
          } />
          <Route path="address" element={
            <PrivateRoute>
              <Address
                cookieValue={cookieValue}
                setCookieValue={setCookieValue}
              />
            </PrivateRoute>
          } />
        </Route>
      </Route>
      <Route path="*" element={
        <Misc />
      }/>
      <Route path="/account/*" element={
        <Misc />
      }/>
      {/* <Route path="/preview" element={
          <SnackPreview
            cookieValue={cookieValue}
            setCookieValue={setCookieValue}
          />
        } /> */}
    </Routes>
  );
}

export default App;
