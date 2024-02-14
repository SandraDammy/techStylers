import React from "react";
import style from "../Style/Services.module.css";
import service1 from "../../Assets/Image/Our services 1.png";
import service2 from "../../Assets/Image/Our services 2.png";
import service3 from "../../Assets/Image/Our services 3.png";

const Services = () => {
  return (
    <div className={style.container}>
      <h1>Our Services</h1>
      <div className={style.imgContainer}>
        <div className={style.imgServices}>
          <div className={style.img}>
          <img src={service1} alt="" className={style.logo} />
          </div>
          <div>
            <p className={style.title}>Tech Workshop</p>
            <p className={style.desc}>
              Our workshops provide interactive, hands-on learning experiences
              to empower women with the skills and knowledge needed to succeed
              in the tech industry.
            </p>
            <p className={style.readme}>Read More...</p>
          </div>
        </div>
        <div>
          <div>
          <img src={service2} alt="" className={style.logo} />
          </div>
          <div>
            <p className={style.title}>Learning Resources</p>
            <p className={style.desc}>
              Our learning resources provide curated, high-quality content that
              is accessible to all women, regardless of their level of
              experience or background.
            </p>
            <p className={style.readme}>Read More...</p>
          </div>
        </div>
        <div>
          <div>
            <img src={service3} alt="" className={style.logo} />
          </div>
          <div>
            <p className={style.title}>Community Events</p>
            <p className={style.desc}>
              Our community events provide a platform for women to connect,
              share ideas, and learn from each other in a supportive and
              inclusive environment.
            </p>
            <p className={style.readme}>Read More...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
