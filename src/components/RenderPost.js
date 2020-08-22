import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function RenderPost({ post }) {
  var today = new Date(post.pubDate);

  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  var time = today.getHours() + ":" + today.getMinutes();

  var dateTime = time + " " + date;

  return (
    <div className="blogCard">
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        <img src={post.thumbnail} alt="" />
      </a>
      <div className="blogInfo">
        <h2>{post.title}</h2>
        <h4>Writer: {post.author}</h4>
        <h4>Published: {dateTime}</h4>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          Read more <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
