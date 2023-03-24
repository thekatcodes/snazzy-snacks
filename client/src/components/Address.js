import React, { useState } from "react";
import axios from 'axios'; 

import Sidebar from './Sidebar';
import Footer from './Footer';
import Button from './Button';

import "./styles/Address.scss";

const Address = (props) => {

  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('Province');
  const [pCode, setPCode] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [sucMsg, setSucMsg] = useState('');

  // Update Address Function
  const updateAddress = (event) => {
    event.preventDefault();
    try {
      console.log("This is the street value: ", street);
      axios.put('/account/address', {street: street, city: city, province: province, pCode: pCode})
      .then((res) => {
        if(res.data.update) {
          setSucMsg('Address updated!');
          setStreet('');        
          setCity('');        
          setProvince('Province');
          setPCode('');
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

  return (
    <section>
      <Sidebar 
        cookieValue={props.cookieValue}
        setCookieValue={props.setCookieValue}
      />
      <div className="address">
        {/* Error message display */}
        <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
        <p className={sucMsg ? "sucmsg" : "offscreen"}>{sucMsg}</p>
          <h1>Update Address</h1>
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
            <select id="province" onChange={(event) => setProvince(event.target.value)} value={province} required>
              <option className="dropdown" value="">Province</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Northwest Territories">Northwest Territories</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Nunavut">Nunavut</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
              <option value="Yukon">Yukon</option>
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
      </div>
      <div><Footer /></div>
    </section>  
  )
}

export default Address;
