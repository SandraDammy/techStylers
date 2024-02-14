import React from "react";
import style from "../Style/Article.module.css"

const Articles = () => {
  return (
    <div className={style.cotainer}>
      <h1 className={style.h1}>Latest Articles</h1>
      <div className={style.buttonsContainer}>
        <div className={style.buttons}>
          <button>All</button>
          <button>Tech Trends</button>
          <button>Career Advice</button>
          <button>Success Stories</button>
        </div>
        <div className={style.seeAll}>
          <button>See All</button>
        </div>
      </div>
      <div className={style.articleContainer}>
      <div className={style.article}>
  <div className={style.articleInfo}>
    <p className={style.articleCategory}>Tech Trend</p>
    <div className={style.dot}></div>
    <p className={style.articleReadTime}>5 mins read</p>
  </div>
  <div className={style.articleTitle}>
    <p>
      Watch Axiom Space’s first all-European mission blast off the launchpad
    </p>
  </div>
  <div className={style.articleDate}>
    <p>4 hours ago</p>
  </div>
</div>

<div className={style.article}>
  <div className={style.articleInfo}>
    <p className={style.articleCategory}>Career Advice</p>
    <div className={style.dot}></div>
    <p className={style.articleReadTime}>7 mins read</p>
  </div>
  <div className={style.articleTitle}>
    <p>
      How to Choose a Tech Career in 2022 – A Career Changer's Guide
    </p>
  </div>
  <div className={style.articleDate}>
    <p>Jan 22, 2024</p>
  </div>
</div>

<div className={style.article}>
  <div className={style.articleInfo}>
    <p className={style.articleCategory}>Success Stories</p>
    <div className={style.dot}></div>
    <p className={style.articleReadTime}>3 mins read</p>
  </div>
  <div className={style.articleTitle}>
    <p>Biggest success stories of women in the world of tech</p>
  </div>
  <div className={style.articleDate}>
    <p>Dec 22, 2023</p>
  </div>
</div>
</div>
    </div>
  );
};

export default Articles;
