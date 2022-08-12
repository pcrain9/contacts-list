import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav id="top-nav">
        <div className="top-nav-title-container">
          <Link to="/" id="top-nav-link">
            <h2>Contact List</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
