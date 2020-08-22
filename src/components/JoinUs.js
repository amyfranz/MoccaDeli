import React from "react";
import JoinUsPic from "../Assets/JoinUs.jpg";

export default function JoinUs() {
  return (
    <div className="joinUs section">
      <div className="writing">
        <h2 className="title">Join Us</h2>
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
      <img src={JoinUsPic} alt="" />
    </div>
  );
}
