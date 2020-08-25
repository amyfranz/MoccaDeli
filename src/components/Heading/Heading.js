import React from "react";
import HeadingPic from "../../Assets/HomePageMainPic.jpg";
import "./Heading.css";
import { homeContent } from "../../String";

export default function Heading() {
  return (
    <div className="heading">
      <img src={HeadingPic} alt="" />
      <h1>
        <span className="mainFont">{homeContent.headingMain}</span>
        <span className="cursiveFont">{homeContent.headingSecond}</span>
      </h1>
    </div>
  );
}
