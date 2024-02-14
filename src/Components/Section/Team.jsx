import React from "react";
import team1 from "../../Assets/Image/Our Team 1.png";
import team2 from "../../Assets/Image/Our Team 2.png";
import style from "../Style/Team.module.css"
const Team = () => {
  return (
    <div className={style.teamContainer}>
  <div className={style.teamHeading}>
    <h1>Our Team</h1>
    <p>Meet Our Tech Experts: The Driving Force Behind Techstylers’ Success</p>
  </div>
  <div className={style.teamMembers}>
    <div className={style.teamMember}>
      <div className={style.teamMemberImage}>
        <img src={team1} alt="" />
      </div>
      <div className={style.teamMemberInfo}>
        <p className={style.name}>Olajumoke Toriola</p>
        <p className={style.title}>Co-Founder, Techstylers</p>
        <p className={style.description}>
          Olajumoke founded Techstylers with the vision of creating a community
          where women could learn and connect in tech. She has over a decade of
          experience in the industry and is passionate about driving change.
        </p>
      </div>
    </div>
    <div className={style.teamMember}>
      <div className={style.teamMemberImage}>
        <img src={team2} alt="" />
      </div>
      <div className={style.teamMemberInfo}>
        <p className={style.name}>Foyin Olajide-Bello</p>
        <p className={style.title}>Co-Founder, Techstylers</p>
        <p className={style.description}>
          Foyin founded Techstylers with the vision of creating a community
          where women could learn and connect in tech. She has over a decade of
          experiece in the industry and is passionate about driving change.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Team;
