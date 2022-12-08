
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const tinyLogo = require("./HomePage-Images/HIW/db-logo.png");
  return (
    <nav className="navigationHeader">
      {/* Icon is clickable and when you click it will redirect you to the homepage */}
      <Link to="/" className="appName">
        Drinking Buddies <img src={tinyLogo} alt="tiny drink logo"></img>
      </Link>

      {/* navigation bar header */}
      <div className="menu" >
        <ul>
          <li>
            <Link className = "linksStyle" to="/">Home</Link>
          </li>
         
          <li>
            <Link className = "linksStyle" to="/quiz"> Quiz </Link>
          </li>
          <li>
              <Link className = "linksStyle" to="/list"> Browse</Link>
          </li>
          <li>
            <Link className = "linksStyle" to="/places"> Places Near Me </Link>
          </li>
          <li>
            <Link className = "linksStyle" to="/bac"> BAC Calculator </Link>
          </li>
          <li>
            <Link className = "linksStyle" to="/faq"> FAQ </Link>
          </li>
          <li>
            <Link className = "linksStyle" to="/help"> Help Center</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

