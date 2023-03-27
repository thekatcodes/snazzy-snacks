import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/Misc.scss";

const Misc = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="misc-background">
      <div className="misc-box">
        <h1 className="misc-title">Uh oh!</h1>
        <p className="misc-text">It looks like you've stumbled upon an empty snack aisle.</p>
        <p className="misc-text">We're sorry, but the snack you're looking for is out of stock, or it never existed in the first place!</p>
        <p className="misc-text">Don't worry though, we'll guide you back to our main snack selection, where you can find something else to munch on.</p>
      </div>
    </section>
  )
}

export default Misc;
