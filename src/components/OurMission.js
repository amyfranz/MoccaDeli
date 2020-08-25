import React from "react";
import OurMissionPic from "../Assets/OurMission.jpg";
import { storyContent } from "../String";

export default function OurMission() {
  return (
    <div className="ourMission section">
      <div className="writing">
        <h2 className="title">{storyContent.missionTitle}</h2>
        <p>{storyContent.mission}</p>
      </div>
      <img src={OurMissionPic} alt="" />
    </div>
  );
}
