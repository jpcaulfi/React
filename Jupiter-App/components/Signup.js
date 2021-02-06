import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Signup() {
  return (
    <div>
      <header className="Welcome-header">
        <link rel="stylesheet" href="./Welcome.css" />
        <img
          alt=""
          className="Welcome-logo"
          src="jupiter-logo-transparent-eyes.png"
        ></img>
        <h2 className="signup-tagline">Join Jupiter</h2>
        <h2>
          <Link to="/page4" className="Join-link">
            Bypass Signup
          </Link>
        </h2>
      </header>
    </div>
  );
}

export default Signup;
