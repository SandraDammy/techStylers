import React from "react";
import "../Style/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <a href="/">
          <img src="/Image/Logo.png" alt="" className="logo" />
        </a>
      </div>
      <div className="navLink">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/event">Events</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
