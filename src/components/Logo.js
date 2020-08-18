import React from "react";

export default function Logo({ history, click = () => history.push("/") }) {
  return (
    <div onClick={click} className="navLogo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
        alt="logo"
      />
    </div>
  );
}
