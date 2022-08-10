import React from "react";
import { Link } from "react-router-dom";
import VisaLogo from "../resources/visa-logo.png";

function Header() {
  return (
    <div>
      <nav id="top-nav">
        <Link to="/">
          <img id="visa-image" src={VisaLogo} alt="null" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
