import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/" style={{margin:"20px"}}>Home</Link>
        <Link to="contents" style={{margin:"20px"}}>Contents</Link>
        <Link to="about"style={{margin:"20px"}}>About Us</Link>
        <Link to="contactus" style={{margin:"20px"}}>Contact Us</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Navigation;
