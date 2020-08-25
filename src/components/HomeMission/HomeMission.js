import React from "react";
import "./HomeMission.css";
import { homeContent } from "../../String";

export default function HomeMission() {
  return (
    <div className="homeMission">
      <h2>{homeContent.missionTitle}</h2>
      <p>{homeContent.mission}</p>
    </div>
  );
}
