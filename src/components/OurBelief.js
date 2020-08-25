import React from "react";
import OurBeliefPic from "../Assets/OurBelief.jpg";
import { storyContent } from "../String";

export default function OurBelief() {
  return (
    <div className="ourBelief section">
      <div className="writing">
        <h2 className="title">{storyContent.beliefTitle}</h2>
        <p>{storyContent.belief}</p>
      </div>
      <img src={OurBeliefPic} alt="" />
    </div>
  );
}
