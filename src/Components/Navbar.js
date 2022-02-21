import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className=" navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ color: "white" }}
      >
        <Link className="navbar-brand mx-5" to="/">
          Navbar
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
