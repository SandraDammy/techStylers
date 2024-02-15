import React from "react";
import Title from "../Common/Title";
import style from "../Style/Article.module.css";
import Button from "../Common/Button";

const Articles = () => {
  const btnEventHandler = () => {
    console.log("Event clicked!");
  };
  const btnEventTech = () => {
    console.log("Event clicked!");
  };
  const btnEventSuccess = () => {
    console.log("Event clicked!");
  };
  const btnEventCareer = () => {
    console.log("Event clicked!");
  };
  const btnEventSee = () => {
    console.log("Event clicked!");
  };
  return (
    <div className={style.container}>
      <Title className={"titlePry"} title={"Latest Articles"} />
      <div className={style.buttonsContainer}>
        <div className={style.buttons}>
          <Button
            className={"btnTran"}
            title={"All"}
            btnEventHandler={btnEventHandler}
          />
          <Button
            className={"btnTran"}
            title={"Tech Trends"}
            btnEventHandler={btnEventTech}
          />
          <Button
            className={"btnTran"}
            title={"Career Advice"}
            btnEventHandler={btnEventCareer}
          />
          <Button
            className={"btnTran"}
            title={"Success Stories"}
            btnEventHandler={btnEventSuccess}
          />
        </div>
        <div className={style.seeAll}>
          <Button
            className={"btnOutline"}
            title={"See All"}
            btnEventHandler={btnEventSee}
          />
        </div>
      </div>
      <div className={style.articleContainer}>
        <div className={style.article}>
          <div className={style.articleInfo}>
            <p className={style.articleCategory}>Tech Trend</p>
            <div className={style.dot}></div>
            <p className={style.articleTimeDate}>5 mins read</p>
          </div>
          <div className={style.articleTitle}>
            <p>
              Watch Axiom Space’s first all-European mission blast off the
              launchpad
            </p>
          </div>
          <div className={style.articleTimeDate}>
            <p>4 hours ago</p>
          </div>
        </div>

        <div className={style.article}>
          <div className={style.articleInfo}>
            <p className={style.articleCategory}>Career Advice</p>
            <div className={style.dot}></div>
            <p className={style.articleTimeDate}>7 mins read</p>
          </div>
          <div className={style.articleTitle}>
            <p>
              How to Choose a Tech Career in 2022 – A Career Changer's Guide
            </p>
          </div>
          <div className={style.articleTimeDate}>
            <p>Jan 22, 2024</p>
          </div>
        </div>

        <div className={style.article}>
          <div className={style.articleInfo}>
            <p className={style.articleCategory}>Success Stories</p>
            <div className={style.dot}></div>
            <p className={style.articleTimeDate}>3 mins read</p>
          </div>
          <div className={style.articleTitle}>
            <p>Biggest success stories of women in the world of tech</p>
          </div>
          <div className={style.articleTimeDate}>
            <p>Dec 22, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
