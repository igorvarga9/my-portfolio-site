import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            About
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Blog
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;