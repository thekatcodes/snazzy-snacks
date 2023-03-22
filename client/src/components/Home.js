import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Home;
