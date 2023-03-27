import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Button from "./Button";
import About from './About';

import "./styles/Landing.scss";
import candy from "../images/candy.png";
import snack from "../images/snack.png";
import chips from "../images/crisps.png";
import snack2 from "../images/snack2.png";

export default function Landing(props) {

  // Function to retrieve cookie
  useEffect(() => {
    axios.get('/cookie')
      .then((res) => {
        props.setCookieValue(res.data.cookie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.cookieValue]);

    return (
      <>
    <section className="landing-background landing-layout layout">
      <div className="coiny">
        <h1>SNAZZY SNACKS</h1>
      </div>
      <div>
        <h3>Upgrade your snacking game with pizazz-packed treats.<br />Every month at your doorstep!</h3>
      </div>
      <div>
        <h5>*starting at 20$/mo</h5>
      </div>
      <div>
        {props.cookieValue ? 
          <Link to="/account">
            <Button>GET SNACKING!</Button>
          </Link>
        :
          <Link to="/login">
            <Button>GET SNACKING!</Button>
          </Link>
        }
        
      </div>
      <div className="landing-img">
        <img src={candy} alt="Candy" />
        <img className="landing-snack" src={snack} alt="Snack" />
      </div>
      <img className="landing-chip" src={chips} alt="Chips" />
      <img className="landing-bar" src={snack2} alt="Snack" />
      </section>
      <section>
              <About />
      </section>
      </>
  );
}
