import React from "react";
import "./Welcome.css";

function Landing() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Good Morning, Sir.";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Pleasant Afternoon, Sir.";
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = "Good Evening, Sir.";
  } else {
    timeOfDay = "Burning the midnight oil, Sir?";
  }
  return (
    <div>
      <header className="Welcome-header">
        <link rel="stylesheet" href="./Welcome.css" />
        <img
          alt=""
          className="Landing-logo"
          src="jupiter-logo-transparent-eyes.png"
        ></img>
        <h2 className="Landing-tagline">This is the landing page.</h2>
        <h2 className="Current Date">{timeOfDay}</h2>
      </header>
    </div>
  );
}

export default Landing;
