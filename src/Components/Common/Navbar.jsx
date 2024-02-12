import React, { useState } from "react";
import navbar from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/Image/Logo.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
    <nav>
      <div className={navbar.navlogo}>
        <Link to="/">
          <img
            src={logo}
            width="70px"
            alt="TechStylers Logo"
            className={navbar.logo}
          />
        </Link>
      </div>
      <div
        className={open ? navbar.navMenuActive : navbar.navMenu}
      >
        <ul className={navbar.navList}>
          <li className={navbar.navItem}>
            <Link to="/" className={navbar.navLink} >
              Home
            </Link>
          </li>
          <li className={navbar.navItem}>
            <Link to="/about" className={navbar.navLink}>
              About
            </Link>
          </li>
          <li className={navbar.navItem}>
            <Link to="/blog" className={navbar.navLink}>
              Blog
            </Link>
          </li>
          <li className={navbar.navItem}>
            <Link to="/resources" className={navbar.navLink}>
              Resources
            </Link>
          </li>
          <li className={navbar.navItem} >
            <Link to="/event" className={navbar.navLink}>
              Events
            </Link>
          </li>
          <li className={navbar.navItem} >
            <Link to="/gallery" className={navbar.navLink}>
              Gallery
            </Link>
          </li>
          <li className={navbar.navItem}>
            <Link to="/contact" className={navbar.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={navbar.hamburger} onClick={() => setOpen(!open)}>
        {open ? <IoClose /> : <IoMenu />}
      </div>

    </nav>
  </header>
  );
}

export default Navbar;