import React from "react";
import OurStoryPic from "../Assets/OurStory.jpg";
import { storyContent } from "../String";

export default function OurStory() {
  return (
    <div className="ourStory section">
      <div className="writing">
        <h2 className="title">{storyContent.storyTitle}</h2>
        <p>{storyContent.story}</p>
      </div>
      <img src={OurStoryPic} alt="" />
    </div>
  );
}
