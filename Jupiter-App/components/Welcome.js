import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div>
      <header className="Welcome-header">
        <link rel="stylesheet" href="./Welcome.css" />
        <img
          alt=""
          className="Welcome-logo"
          src="jupiter-logo-transparent-eyes.png"
        ></img>
        <h2 className="Welcome-tagline">
          Welcome to the <a className="tagline-future">future</a> of investing.
        </h2>
        <a>
          <Link to="/page5" className="LearnMore-link">
            Learn More
          </Link>
        </a>
        <h2>
          <Link to="/page2" className="Join-link">
            Join Jupiter
          </Link>
        </h2>
      </header>
      <body className="Welcome-body">
        <h3 className="member-tag">Already a member?</h3>
        <a>
          <Link to="/page3" className="SignIn-link">
            Sign In
          </Link>
        </a>
      </body>
    </div>
  );
}

export default Welcome;
