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
        <a
          href="https://www.google.co.uk/maps/@51.4834763,-0.0117241,14z"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </span>
      <span>
        <a
          href="https://www.google.co.uk/maps/@51.4834763,-0.0117241,14z"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </span>
      <span>
        <a
          href="https://www.google.co.uk/maps/@51.4834763,-0.0117241,14z"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </span>
    </div>
  );
}
