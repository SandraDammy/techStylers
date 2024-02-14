import React from "react";
import style from "../Style/Benefits.module.css";
import benefits from "../../Assets/Image/Benefits.png"

const Benefits = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.hr}></div>
        <p>Benefits</p>
        <div className={style.hr}> </div>
      </div>
      <div className={style.txtImg}>
        <div className={style.txt}>
          <div>
            <ul>
              <li>Diverse and inclusive Community</li>
              <li>Networking and Community Events</li>
              <li>Access to Cutting-Edge Resources</li>
              <li>Mentorship and Support</li>
              <li>Advancement in Tech Careers</li>
            </ul>
</div>
          <div>
            <ul>
              <li>Increased Confidence and Skills</li>
              <li>Networking Opportunities</li>
              <li>Building Lifelong Connections</li>
              <li>Professional Development Workshops</li>
              </ul>
          </div>
        </div>
        <div className={style.imgContainer}>
          <img src={benefits} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
