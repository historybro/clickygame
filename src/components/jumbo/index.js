import React from "react";
import "./jumbo.css";

const Jumbo = props => {
  console.log(props);
  return (
    <header className="header">
      <h2>Click on images to earn points</h2>
      <h3>But click an image twice and you'll have to start again!</h3>
      <button className="btn btn-success">PLAY</button>
    </header>
  );
}

export default Jumbo;
