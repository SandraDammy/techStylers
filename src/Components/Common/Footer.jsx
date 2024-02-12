import React from "react";
import style from "../Style/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.navigation}>
            <div className={style.navChild}>
            <h6>
                Services
            </h6>
            <p>
                <Link to="/tech-workshop" className={style.link}>
                    Tech Workshop
                </Link>
            </p>
            <p>
                <Link to="/learning-resources" className={style.link}>
                    Learning Resources
                </Link>
            </p>
            <p>
                <Link to="/community" className={style.link}>
                    Community Events
                </Link>
            </p>
            </div>
            <div className={style.navChild}>
                <h6>
                    Information
                </h6>
                <p>
                    <Link to="/tech-trends" className={style.link}>
                        Tech Trends
                    </Link>
                </p>
                <p>
                    <Link
                        to="/career-advice"
                        className={style.link}                    
                    >
                        Career Advice
                    </Link>
                </p>
                <p>
                    <Link to="/success-stories" className={style.link}>
                        Success Stories
                    </Link>
                </p>
            </div>

            <div className={style.navChild}>
                <h6>
                    Company
                </h6>
                <p>
                    <Link to="/about" className={style.link}>
                        About Us
                    </Link>
                </p>
                <p>
                    <Link to="/services" className={style.link}>
                        Services
                    </Link>
                </p>
                <p>
                    <Link to="/event" className={style.link}>
                        Events
                    </Link>
                </p>
                <p>
                    <Link to="/resources" className={style.link}>
                        Resources
                    </Link>
                </p>
                <p>
                    <Link to="/contact" className={style.link}>
                        Contact
                    </Link>
                </p>
            </div>
            <div className={style.navChild}>
                <div className={style.searchContainer}>
                    <h6>
                        Subscribe
                    </h6>
                    <input type="search" name="subscribe" id="subscribe" placeholder="Email address" className={style.searchBar} />
                </div>
            </div>
           
        </div>
      </div>
    </footer>
  );
};

export default Footer;
