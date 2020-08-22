import React, { useState, useEffect, useCallback } from "react";
import RenderPost from "../../components/RenderPost";
import "./Blog.css";

export default function Blog() {
  let [blogs, setBlogs] = useState([]);
  const fetchData = useCallback(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40amy.franz&api_key=oiw6ifwbh9i2u9rr9s6j0ahz9uazmhwmrvdm2oms"
    )
      .then((response) => response.json())
      .then((result) => {
        setBlogs(result.items);
      })
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const showPosts = blogs.map((blog, index) => (
    <RenderPost post={blog} key={index} />
  ));
  return (
    <div className="blog">
      <h2 className="title">Our Blogs</h2>
      <div className="blogs">{showPosts}</div>
    </div>
  );
}
