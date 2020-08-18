import React, { useState } from "react";
import Logo from "../../components/Logo";
import NavLinks from "../../components/NavLinks";
import NavIcons from "../../components/NavIcons";
import "./Nav.css";
export default function Nav({ history }) {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div>
      <div className={`navBarDesktop`}>
        <Logo history={history} />
        <NavLinks history={history} />
        <NavIcons />
      </div>
      <div className={`navBarMobile`}>
        <Logo
          history={history}
          click={() => {
            setOpenNav(!openNav);
          }}
        />
        <div className={openNav ? "openedNav" : "closedNav"}>
          <NavLinks history={history} home={openNav} />
        </div>
      </div>
    </div>
  );
}
