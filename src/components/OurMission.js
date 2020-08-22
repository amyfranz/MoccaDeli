import React from "react";
import OurMissionPic from "../Assets/OurMission.jpg";

export default function OurMission() {
  return (
    <div className="ourMission section">
      <div className="writing">
        <h2 className="title">Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src={OurMissionPic} alt="" />
    </div>
  );
}
