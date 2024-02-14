import React from "react";

const Articles = () => {
  return (
    <div>
      <p>Latest Articles</p>
      <div>
        <div>
          <button>All</button>
          <button>Tech Trends</button>
          <button>Career Advice</button>
          <button>Success Stories</button>
        </div>
        <div>
          <button>See All</button>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p>Tech Trend</p>
            <p>5 mins read</p>
          </div>
          <div>
            <p>
              Watch Axiom Space’s first all-European mission blast off the
              launchpad
            </p>
          </div>
          <div>
            <p>4 hours ago</p>
          </div>
        </div>
        <div>
          <div>
            <p>Career Advice</p>
            <p>7 mins read</p>
          </div>
          <div>
            <p>
              How to Choose a Tech Career in 2022 – A Career Changer's Guide
            </p>{" "}
          </div>
          <div>
            <p>Jan 22, 2024</p>
          </div>
        </div>
        <div>
          <div>
            <p>Success Stories</p>
            <p>3 mins read</p>
          </div>
          <div>
            <p>Biggest success stories of women in the world of tech</p>{" "}
          </div>
          <div>
            <p>Dec 22, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
