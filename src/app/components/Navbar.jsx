"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

const navLinks = [
  {
    title: "首頁",
    path: "#home",
  },
  {
    title: "關於我",
    path: "#about",
  },
  {
    title: "我的專案",
    path: "#project",
  },
  {
    title: "聯絡我",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container flex-wrap justify-between items-center mx-auto px-4 py-2 lg:py-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-white text-2xl md:text-5xl font-semibold"
        >
          LOGO
        </Link>
        {/* 下拉選單按鈕 (平板以上不顯示) */}
        <div className="mobile-menu block md:hidden">
          {!isNavbarOpen ? (
            <button
              onClick={() => setIsNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white border rounded border-slate-200 hover:border-white"
            >
              <IoMenuSharp className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsNavbarOpen(false)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white border rounded border-slate-200 hover:border-white"
            >
              <IoMdClose className="w-5 h-5" />
            </button>
          )}
        </div>
        {/* 選單 */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  <NavLink href={navLink.path} title={navLink.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* 下拉選單 (平板以上不顯示) */}
      {isNavbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
