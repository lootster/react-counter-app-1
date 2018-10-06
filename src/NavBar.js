import React from "react";

const NavBar = ({ number }) => {
  console.log('Navbar rendered')
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Number of counters:
          <span className="badge badge-pill badge-warning">{number}</span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
