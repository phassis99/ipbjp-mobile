import "./hamburguer-menu.component.scss";

import React, { useState } from "react";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="side-nav">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars text-lg"></i>
      </button>
      {menuOpen && (
        <nav className="menu">
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

// https://codepen.io/maximakymenko/pen/aboWJpX

export default HamburgerMenu;
