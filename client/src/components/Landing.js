import { Link } from "react-router-dom";

import Button from "./Button";

import "./styles/Landing.scss";
import candy from "../images/candy.png";
import snack from "../images/snack.png";

export default function Landing() {

  return (
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
        <Link to="/temp">
          <Button>GET SNACKING!</Button>
        </Link>
      </div>
      <div className="landing-img">
        <img src={candy} alt="Candy" />
        <img className="landing-snack" src={snack} alt="Snack" />
      </div>
    </section>
  );
}