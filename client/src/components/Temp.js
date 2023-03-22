import Footer from "./Footer";
import Button from "./Button";

import "./styles/Temp.scss";

export default function Temp() {
  return(
    <section className="layout temp-layout">
      <div>
          <Button orangy>Sign Up</Button>
      </div>
      <div><Footer /></div>
    </section>
  );
}