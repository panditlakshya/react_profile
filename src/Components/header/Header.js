import React from "react";
import "./Header.css";

function Header({ show }) {
  console.log(show);
  return (
    <header className={`nav ${show && "sticky"}`}>
      <h1 className="logo">Lakshya</h1>
      <ul>
        <li>
          <a href="/#">Intro</a>
        </li>
        <li>
          <a href="/#">Services</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Blog</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
