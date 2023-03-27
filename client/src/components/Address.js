import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from './Button';

import "./styles/Address.scss";

const Address = (props) => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("/order-summary");
				setUserData(response.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
  }, []);

    console.log(userData)
    
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [pCode, setPCode] = useState('');
  const [errMsg, setErrMsg] = useState('');

  // Update Address Function
  const updateAddress = (event) => {
    event.preventDefault();
    try {
      axios.put('/account/address', {street: street, city: city, province: province, pCode: pCode})
      .then((res) => {
        if(res.data.update) {
          setStreet('');        
          setCity('');        
          setProvince('Province');
          setPCode('');
          navigate(0);
        } else {
          setErrMsg('Address update failed.');
        }
        console.log(res);
      })
      .catch((err) => {
        setStreet('');        
        setCity('');        
        setProvince('');
        setPCode('');
        setErrMsg(err.response.data);
      })
    } catch(err) {
      console.log(err);
    }
  }

  let index = null;

  if(props.cookieValue && userData) {
    index = userData.findIndex(user => user.first_name === props.cookieValue);
    if (index === -1) {
      index = null;
    }
  }
    
    if (index !== null) {
        index += 1;
    }

  return (
    <section>
      <Sidebar 
        cookieValue={props.cookieValue}
        setCookieValue={props.setCookieValue}
      />
      <div className="address">
        {/* Error message display */}
        <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
          {index ?
          <>
            <h1>Update Address</h1>
            <div>Current Address</div>
            <div>{userData[index-1].street}</div>
            <div>{userData[index-1].city}, {userData[index-1].province}</div>
            <div>{userData[index-1].postal_code}</div>
            <form className="form-layout" onSubmit={updateAddress}>
            <label htmlFor="street"/>
            <input 
              type="text" 
              id="street"
              autoComplete="off"
              onChange={(event) => setStreet(event.target.value)}
              value={street}
              placeholder="Street"
              required
            />
            <label htmlFor="city"/>
            <input 
              type="text" 
              id="city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
              placeholder="City"
              required
            />
            <label htmlFor="province"/>
            <select 
              id="province" 
              onChange={(event) => setProvince(event.target.value)} 
              value={province} style={province ==='' ? {color: 'gray'} : {color: 'black'}} required>
              <option value="">Province</option>
              <option value="Alberta">AB</option>
              <option value="British Columbia">BC</option>
              <option value="Manitoba">MB</option>
              <option value="New Brunswick">NB</option>
              <option value="Newfoundland and Labrador">NL</option>
              <option value="Northwest Territories">NT</option>
              <option value="Nova Scotia">NS</option>
              <option value="Nunavut">NU</option>
              <option value="Ontario">ON</option>
              <option value="Prince Edward Island">PE</option>
              <option value="Quebec">QC</option>
              <option value="Saskatchewan">SK</option>
              <option value="Yukon">YT</option>
            </select>
            <label htmlFor="postalcode"/>
            <input 
              type="text" 
              id="postalcode"
              onChange={(event) => setPCode(event.target.value)}
              value={pCode}
              placeholder="Postal Code"
              required
            />
            <Button>Save</Button>
          </form>
          </>
          :
          <>
          <div>No order has been made yet.</div>
          {/* Route it to subscriptions? */}
          <Link to="/subscriptions">
            <Button>Get your first box</Button>
          </Link>
        </>
          }

      </div>
      <div><Footer /></div>
    </section>  
  )
}

export default Address;
