import React from "react";
import "./Nav.css";
import { Cards } from "./Export";
const Navbar = () => {
  return (
    <>
      <button className="watchnow">
        <span>
          <h5>BATMOVIES</h5>
        </span>
      </button>
      <Cards />
    </>
  );
};
export default Navbar;
