import React from "react";
import style from "../Style/Community.module.css";
import image from "../../Assets/Image/About us image.png"

const Community = () => {
  return (
    <div className={style.container}id="community">
      <div className={style.imgContainer}>
        <img src={image} alt="" className={style.logo} />
      </div>
      <div className={style.textContainer}>
        <h1>A Community for Tech-Savy Women </h1>
        <p>
          This community brings women together, to learn, and grow in the tech
          industry. We offer workshops, events, and resources to help women
          advance their careers and achieve their goals.
        </p>
        <div>
          <p className={style.readme}>Read More...</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
