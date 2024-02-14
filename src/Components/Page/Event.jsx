import React from "react";
import style from "../Style/Resources.module.css";
import imgEvent from "../../Assets/Image/Events image.png";
import blog from "../Style/About.module.css";
import blog1 from "../Style/Blog.module.css";
import aboutImage from "../../Assets/Image/About us image.png";
import Button from "../Common/Button";

const Event = () => {
  const btnRegister = () => {
    console.log("Event clicked!");
  };
  const btnEventHandler = () => {
    console.log("Event clicked!");
  };
  return (
    <div className={style.container}>
      <div className={style.eventRegister}>
        <h1>Tech Elevate: <br/>Empowering Innovation <br/>with Techstylers</h1>
        <div className={style.eventBtn}>
          <Button
            className={"btnPry"}
            title={"Register"}
            btnEventHandler={btnRegister}
          />
          <Button
            className={"btnTran"}
            title={"See more"}
            btnEventHandler={btnEventHandler}
          />
        </div>
        <p>24th-26th Jan 2024</p>
        <p>Unilag</p>
      </div>
      <div className={style.postEvent}>
        <div className={style.eventPost}>
          <div className={style.pastEvent}>
            <p>Past Events</p>
            <p>Upcoming Events</p>
          </div>
          <div>
            <p>February</p>
          </div>
        </div>
        <div className={style.gridContainer}>
          <div className={style.card}>
            <div className={style.imgResources}>
              <img src={imgEvent} alt="Event Img" className={style.img} />
            </div>
            <div className={style.txtContainer}>
              <div className={style.txtEvent}>
                <h1>Microsoft 365</h1>
                <p>Oct 12, 2023 at 12:pm</p>
              </div>
              <div className={style.eventTxt}>
                <p>
                  Members can connect with professionals who share similar
                  interests in Microsoft 365.
                </p>
                <a href="#" className={style.seeMoreLink}>
                  See more details...
                </a>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.imgResources}>
              <img src={imgEvent} alt="Event Img" className={style.img} />
            </div>
            <div className={style.txtContainer}>
              <div className={style.txtEvent}>
                <h1>Microsoft 365</h1>
                <p>Oct 12, 2023 at 12:pm</p>
              </div>
              <div className={style.eventTxt}>
                <p>
                  Members can connect with professionals who share similar
                  interests in Microsoft 365.
                </p>
                <a href="#" className={style.seeMoreLink}>
                  See more details...
                </a>
              </div>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.imgResources}>
              <img src={imgEvent} alt="Event Img" className={style.img} />
            </div>
            <div className={style.txtContainer}>
              <div className={style.txtEvent}>
                <h1>Microsoft 365</h1>
                <p>Oct 12, 2023 at 12:pm</p>
              </div>
              <div className={style.eventTxt}>
                <p>
                  Members can connect with professionals who share similar
                  interests in Microsoft 365.
                </p>
                <a href="#" className={style.seeMoreLink}>
                  See more details...
                </a>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Event;
