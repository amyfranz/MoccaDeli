import React from "react";
import JoinUsPic from "../Assets/JoinUs.jpg";
import { storyContent } from "../String";

export default function JoinUs() {
  return (
    <div className="joinUs section">
      <div className="writing">
        <h2 className="title">{storyContent.joinTitle}</h2>
        <p>{storyContent.join}</p>
      </div>
      <img src={JoinUsPic} alt="" />
    </div>
  );
}
