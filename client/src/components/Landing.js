import Button from "./Button";

import "./styles/Landing.scss";
import candy from "../icons/candy.png";
import snack from "../icons/snack.png";

export default function Landing() {
  return (
    <section className="landing-background layout">
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
        <Button>GET SNACKING!</Button>
      </div>
      <div className="landing-img">
        <img src={candy} alt="Candy" />
        <img className="landing-snack" src={snack} alt="Snack" />
      </div>
    </section>
  );
}