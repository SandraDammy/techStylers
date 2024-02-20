import React from "react";
import style from "../Style/landingPage.module.css";
import Button from "../Common/Button";
import hero1 from "../../Assets/Image/Hero Image 1.png";
import hero2 from "../../Assets/Image/Hero Image 2.png";

const LandingPage = () => {
  const btnEventHandler = () => {
    console.log("Event clicked!");
  };
  return (
    <section className={style.container}>
      <div className={style.textContainer}>
        {/* <div className={style.textTitle}> */}
        <h1 className={style.title}>
          Empowering <span>Women</span>
          <br />
          In <span>Tech</span>
        </h1>
        <p className={style.desc}>Breaking Barriers, Building Futures.</p>
        {/* </div> */}
        <div className={style.btnJoin}>
          <Button
            className={"btnPry"}
            title={"Join Now"}
            btnEventHandler={btnEventHandler}
          />
        </div>
        <div className={style.bigTxt}>
          <div>
            <p className={style.big}>520+</p>
            <p className={style.txt}>Members</p>
          </div>
          <div>
            <p className={style.big}>15+</p>
            <p className={style.txt}>Mentors</p>
          </div>
          <div>
            <p className={style.big}>5</p>
            <p className={style.txt}>Events</p>
          </div>
          <div>
            <p className={style.big}>6</p>
            <p className={style.txt}>Workshops</p>
          </div>
          <div>
            <p className={style.big}>1</p>
            <p className={style.txt}>Conference</p>
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <div className={style.heroImg}>
          <img src={hero1} alt="" className={style.logo} />
          <img src={hero2} alt="" className={style.logo} />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
