import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeNavbar }) => {
  return (
    <ul className="mobile-menu md:hidden flex flex-col py-4 items-center">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink
              closeNavbar={closeNavbar}
              href={link.path}
              title={link.title}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
