import React from "react";
import "./Welcome.css";

function Loading() {
  return (
    <div>
      <header className="Loading-header">
        <link rel="stylesheet" href="./Welcome.css" />
        <img
          alt=""
          className="Loading-logo"
          src="jupiter-logo-transparent-eyes.png"
        ></img>
        <h2 className="Loading-tagline">Loading Jupiter...</h2>
      </header>
    </div>
  );
}

export default Loading;
