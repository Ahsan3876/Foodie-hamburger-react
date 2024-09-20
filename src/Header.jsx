import React, { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header>
      <div className={`header-content ${openMenu ? "menu-open" : ""} `}>
        <div className="logo">
          <img src="Images/foodie hamburger logo.png" alt="logo" />
        </div>
        <div className="hamburger-menu-container" onClick={toggle}>
          <div className="hamburger-menu">
            <span className="hamburger-icon">&#9776;</span>
          </div>
        </div>

        <nav className={`${openMenu ? "menu-open" : ""} `}>
          <span className="close-icon" onClick={toggle}>
            &times;
          </span>
          <a href="#top-picks" onClick={toggle}>
            Top picks
          </a>
          <a href="#whopper" onClick={toggle}>
            whopper
          </a>
          <a href="#stunner-menu" onClick={toggle}>
            Stunner Menu
          </a>
          <a href="#New-foodie-collection" onClick={toggle}>
            New Foodie Collection
          </a>
          <a href="#deal" onClick={toggle}>
            Deal of the day
          </a>
        </nav>
      </div>
    </header>
  );
}
