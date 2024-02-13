import React from "react";
import style from "../Style/Benefits.module.css";

const Benefits = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <hr />
        <p>Benefits</p>
        <hr />
      </div>
      <div className={style.txtImg}>
        <div className={style.txt}>
          <div>1</div>
          <div>2</div>
        </div>
        <div className={style.imgContainer}>
          <img src="/Image/Benefits.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
