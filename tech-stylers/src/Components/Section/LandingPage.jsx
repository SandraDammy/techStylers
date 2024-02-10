import React from "react";
import "../Style/landingPage.css";

const LandingPage = () => {
  return (
    <section className="container">
      <div className="textContainer">
        <h1 className="title">
          Empowering <span>Women</span> 
          <br/>In <span>Tech</span>
        </h1>
        <p className="desc">Breaking Barriers, Building Futures.</p>
        <div>
          <button className="btn">Join Now</button>
        </div>
        <div className="bigTxt">
          <div>
            <p className="big">520+</p>
            <p className="txt">Members</p>
          </div>
          <div>
            <p className="big">15+</p>
            <p className="txt">Mentors</p>
          </div>
          <div>
            <p className="big">5</p>
            <p className="txt">Workshops</p>
          </div>
          <div>
            <p className="big">6</p>
            <p className="txt">Workshops</p>
          </div>
          <div>
            <p className="big">1</p>
            <p className="txt">Conference</p>
          </div>
        </div>
      </div>
      <div className="imgContainer ">
        <div className="heroImg">
        <img src="/Image/Hero Image 1.png" alt="" className="logo" />
        <img src="/Image/Hero Image 2.png" alt="" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
