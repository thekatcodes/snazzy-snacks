import Footer from "./Footer";
import Button from "./Button";

import "./styles/Temp.scss";

export default function Temp() {
  return(
    <section className="layout temp-layout">
      <h1>A Imaginary Nav Bar</h1>
      <div>
          <Button orangy>Sign Up</Button>
      </div>
      <div><Footer /></div>
    </section>
  );
}