import React from "react";
import HeadingPic from "../../Assets/HomePageMainPic.jpg";
import "./Heading.css";

export default function Heading() {
  return (
    <div className="heading">
      <img src={HeadingPic} alt="" />
      <h1>
        <span className="mainFont">Mocca's</span>
        <span className="cursiveFont">Cafe</span>
      </h1>
    </div>
  );
}
