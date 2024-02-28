import React from "react";
import style from "../Style/Community.module.css";
import image from "../../Assets/Image/About us image.png"
import { useState, useEffect, useRef } from "react";

const Community = () => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const current = containerRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.8 } // Optional: Observe when 80% of the element is visible
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsActive(true);
  //   }, 200); 
  // }, [])
  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.imgContainer}>
        <img src={image} alt="" className={`${style.logo} ${isActive ? style.active : ''}`} />
      </div>
      <div className={style.textContainer}>
        <h1 className={isActive ? style.active : ''}>A Community for Tech-Savy Women </h1>
        <p className={isActive ? style.active : ''}>
          This community brings women together, to learn, and grow in the tech
          industry. We offer workshops, events, and resources to help women
          advance their careers and achieve their goals.
        </p>
        <div className={style.readme}>
          <p className={`${isActive ? style.active : ''}`}>Read More...</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
