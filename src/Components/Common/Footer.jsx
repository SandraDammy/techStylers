import React from "react";
import footer from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={footer.container}>
        <div className={footer.navigation}>
            <div className={footer.navChild}>
            <h6>
                Services
            </h6>
            <p>
                <Link to="/tech-workshop" className={footer.link}>
                    Tech Workshop
                </Link>
            </p>
            <p>
                <Link to="/learning-resources" className={footer.link}>
                    Learning Resources
                </Link>
            </p>
            <p>
                <Link to="/community" className={footer.link}>
                    Community Events
                </Link>
            </p>
            </div>
            <div className={footer.navChild}>
                <h6>
                    Information
                </h6>
                <p>
                    <Link to="/tech-trends" className={footer.link}>
                        Tech Trends
                    </Link>
                </p>
                <p>
                    <Link
                        to="/career-advice"
                        className={footer.link}                    
                    >
                        Career Advice
                    </Link>
                </p>
                <p>
                    <Link to="/success-stories" className={footer.link}>
                        Success Stories
                    </Link>
                </p>
            </div>

            <div className={footer.navChild}>
                <h6>
                    Company
                </h6>
                <p>
                    <Link to="/about" className={footer.link}>
                        About Us
                    </Link>
                </p>
                <p>
                    <Link to="/services" className={footer.link}>
                        Services
                    </Link>
                </p>
                <p>
                    <Link to="/event" className={footer.link}>
                        Events
                    </Link>
                </p>
                <p>
                    <Link to="/resources" className={footer.link}>
                        Resources
                    </Link>
                </p>
                <p>
                    <Link to="/contact" className={footer.link}>
                        Contact
                    </Link>
                </p>
            </div>
            <div className={footer.navChild}>
                <div className={footer.searchContainer}>
                    <h6>
                        Subscribe
                    </h6>
                    <input type="search" name="subscribe" id="subscribe" placeholder="Email address" className={footer.searchBar} />
                </div>
            </div>
           
        </div>
      </div>
    </footer>
  );
};

export default Footer;
