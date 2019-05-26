import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function Nav() {
  return (
    <nav>
      <ul>
        <Home />
        <About />
        <Contact />
      </ul>
    </nav>
  );
}

export default Nav;
