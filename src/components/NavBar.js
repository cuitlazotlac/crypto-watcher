import React from "react";
import logo from "../ressources/images/website_logo.svg";

export const NavBar = () => {
  return (
    <div>
      <header role="banner">
        <img id="logo-main" src={logo} width="200" alt="Logo Thing main logo" />
        <h1 className="app-title">CRYPTO WATCHER</h1>
      </header>
    </div>
  );
};
