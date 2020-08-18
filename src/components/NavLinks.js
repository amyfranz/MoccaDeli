import React from "react";

export default function NavLinks({ history, home }) {
  return (
    <nav className="navLinks">
      {home ? <span onClick={() => history.push("/")}>Home</span> : null}
      <span onClick={() => history.push("/products")}>Products</span>
      <span onClick={() => history.push("/blog")}>Blog</span>
      <span onClick={() => history.push("/our_story")}>Our Story</span>
      <span onClick={() => history.push("/contact_us")}>Contact Us</span>
    </nav>
  );
}
