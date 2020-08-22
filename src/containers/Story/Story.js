import React from "react";
import OurStory from "../../components/OurStory";
import OurMission from "../../components/OurMission";
import OurBelief from "../../components/OurBelief";
import JoinUs from "../../components/JoinUs";
import "./Story.css";

export default function Story() {
  return (
    <div className="story">
      <OurStory />
      <OurMission />
      <OurBelief />
      <JoinUs />
    </div>
  );
}
