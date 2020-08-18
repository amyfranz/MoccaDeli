import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";

export default function NavIcons() {
  return (
    <div className="navIcons">
      <span>
        <FontAwesomeIcon icon={faInstagram} />
      </span>
      <span>
        <FontAwesomeIcon icon={faFacebookF} />
      </span>
      <span>
        <FontAwesomeIcon icon={faMediumM} />
      </span>
    </div>
  );
}
