import React from "react";

const NavItems = () => {
  return (
    <div className="collapse navbar-collapse" id="mynav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown me-4">
          <a
            className="nav-link dropdown-toggle text-white nav-item-text"
            data-bs-toggle="dropdown"
            href="/"
            role="button"
            aria-expanded="false"
          >
            Menu
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/favorites">
                Favorites
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
