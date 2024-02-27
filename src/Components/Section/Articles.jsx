import React from "react";
import Title from "../Common/Title";
import style from "../Style/Article.module.css";
import Button from "../Common/Button";
import { useState } from "react";
import { articleData } from "../Misc/articleData";

const Articles = () => {
  const btnEventSee = () => {
    console.log("Event clicked!");
  };

  const [article, setArticle] = useState("all");
  const [techTrend, setTechTrend] = useState("techTrend");
  const [careerAdvice, setCareerAdvice] = useState("careerAdvice");
  const [successStories, setSuccessStories] = useState("successStories");
  const [articledata, setArticleData] = useState(articleData);

  const handleEvent = (e) => {
    if (e.target.value === "all") {
      setArticle("all");
      setArticleData(articleData);
    } else if (e.target.value === "techTrend") {
      setTechTrend("techTrend");
      const techTrendData = articleData.filter((article) => {
        return article.tag === "Tech Trend";
      });
      setArticleData(techTrendData);
    } else if (e.target.value === "careerAdvice") {
      setCareerAdvice("careerAdvice");
      const careerAdviceData = articleData.filter((article) => {
        return article.tag === "Career Advice";
      });
      setArticleData(careerAdviceData);
    } else if (e.target.value === "successStories") {
      setSuccessStories("successStories");
      const successStoriesData = articleData.filter((article) => {
        return article.tag === "Success Stories";
      });
      setArticleData(successStoriesData);
    } else {
      setArticle("all");
      setArticleData(articleData);
    }
  };

  return (
    <div className={style.container}>
      <Title className={"titlePry"} title={"Latest Articles"} />
      <div className={style.buttonsContainer}>
        <div className={style.buttons}>
          <Button
            className={article === "all" ? "btnActive" : "btnTran"}
            title={"All"}
            btnEventHandler={handleEvent}
            value={"all"}
          />
          <Button
            className={techTrend === "techTrend" ? "btnActive" : "btnTran"}
            title={"Tech Trends"}
            btnEventHandler={handleEvent}
            value={"techTrend"}
          />
          <Button
            className={
              careerAdvice === "careerAdvice" ? "btnActive" : "btnTran"
            }
            title={"Career Advice"}
            btnEventHandler={handleEvent}
            value={"careerAdvice"}
          />
          <Button
            className={
              successStories === "successStories" ? "btnActive" : "btnTran"
            }
            title={"Success Stories"}
            btnEventHandler={handleEvent}
            value={"successStories"}
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
        {articledata.map((article, index) => {
          return (
            <div className={style.article} key={index}>
              <div className={style.articleInfo}>
                <div className={style.articleDetail}>
                <p className={style.articleCategory}>{article.tag}</p>
                <div className={style.dot}></div>
                <p className={style.articleTimeDate}>{article.readTime}</p>
                </div>
                <div className={style.articleTitle}>
                  <p>{article.title}</p>
                </div>
                <div className={style.articleTimeDate}>
                  <p>{article.published}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
