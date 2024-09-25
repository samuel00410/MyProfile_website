"use client";
import React from "react";
import { Link } from "react-scroll";

const NavLink = ({ href, title, closeNavbar }) => {
  return (
    <Link
      onClick={closeNavbar}
      activeClass="active_nav"
      to={href}
      spy={true}
      smooth={true}
      offset={-90}
      duration={800}
      className="block py-2 pl-3 pr-4 sm:text-xl text-[#ADB7BE] hover:text-white cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default NavLink;
