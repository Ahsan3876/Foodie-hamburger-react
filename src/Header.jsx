import React, { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggle = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header>
      <div class={`header-content ${openMenu ? "menu-open" : ""} `}>
        <div class="logo">
          <img src="Images/foodie hamburger logo.png" alt="logo" />
        </div>
        <div class="hamburger-menu-container" onClick={toggle}>
          <div class="hamburger-menu">
            <span class="hamburger-icon">&#9776;</span>
          </div>
        </div>

        <nav>
          <span class="close-icon" onClick={toggle}>
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
