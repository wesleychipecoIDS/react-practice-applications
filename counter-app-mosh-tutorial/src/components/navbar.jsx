import React, { Component } from "react";

// Stateless functional component
// Have to pass props as an argument
// destructuring objects. Use curly braces and take just what you want from the object
const Navbar = ({ totalCount }) => {
  console.log("Navbar - rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Count:{" "}
        <span className="badge badge-pill badge-secondary">{totalCount}</span>
      </a>
    </nav>
  );
};

export default Navbar;
