import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/alumini">Alumini</Link>
          </li>
          {/* <li><Link to="/location">Location</Link></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
