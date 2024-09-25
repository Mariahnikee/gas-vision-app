import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <>logo</>
        <h2>GasVision</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
