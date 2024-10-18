import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/" >Home</Link>
        <Link to="contents">Contents</Link>
        <Link to="about">About Us</Link>
        <Link to="contactus">Contact Us</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Navigation;
