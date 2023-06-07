import React from "react";
import { useGlobalContext } from "../context";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { setPageId, openSidebar } = useGlobalContext();

  const handleMouse = (e) => {
    if (!e.target.classList.contains("nav-link")) setPageId(null);
  };

  return (
    <nav onMouseOver={handleMouse}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>

      <NavLinks />
    </nav>
  );
};

export default Navbar;
