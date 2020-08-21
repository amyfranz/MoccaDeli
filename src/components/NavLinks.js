import React from "react";

export default function NavLinks({ history, home, toggleNav }) {
  return (
    <nav className="navLinks">
      {home ? (
        <span
          onClick={() => {
            toggleNav();
            history.push("/");
          }}
        >
          Home
        </span>
      ) : null}
      <span
        onClick={() => {
          toggleNav();
          history.push("/products");
        }}
      >
        Products
      </span>
      <span
        onClick={() => {
          toggleNav();
          history.push("/blog");
        }}
      >
        Blog
      </span>
      <span
        onClick={() => {
          toggleNav();
          history.push("/our_story");
        }}
      >
        Our Story
      </span>
      <span
        onClick={() => {
          toggleNav();
          history.push("/contact_us");
        }}
      >
        Contact Us
      </span>
    </nav>
  );
}
