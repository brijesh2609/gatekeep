import React from "react";
import "./index.css";
import HeaderImage from "../../assets/img_header.png";

function Header() {
  return (
    <div className="Container">
      <div>
        <img src={HeaderImage} alt="Header Image" className="Image"></img>
      </div>
      <div className="TextContainer">
        <h1 className="TextTitle">Works like Skincare,</h1>
        <h1 className="TextTitle">Wears like Perfume</h1>
        <br />
        <h2 className="Text">We like to keep things exclusive.</h2>
        <h2 className="Text">Want to be in on the secret?</h2>
      </div>
    </div>
  );
}

export default Header;
