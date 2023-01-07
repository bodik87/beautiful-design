import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavButton } from "./NavButton";
import Logo from "/vite.svg";
import SearchIcon from "/search.svg";
import style from "./Navbar.module.css";

export const Navbar = () => {
  const location = useLocation();
  const home = location.pathname === "/";

  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [location]);

  return (
    <header className="">
      <div className="flex justify-between items-center h-[65px] pb-2 px-4 rounded-t-xl bg-gradient-to-t from-[#E1F0DB] to-[#E8F6E2] border-t border-[#E4F0DE]">
        <div className="flex items-center justify-center gap-2">
          <img width={20} src={Logo} alt="/" />
          <p className="text-sm font-semibold text-[#526b5b]">BOGDAN SHULIKA</p>
        </div>

        <ul
          className={nav ? [style.menu, style.active].join(" ") : [style.menu]}
        >
          {!home && (
            <li className="text-[#ed1c24]">
              <NavLink title="Home" to="/">
                Home
              </NavLink>
            </li>
          )}
          <li>
            <NavLink title="Projects" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink title="Notes" to="/notes">
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink title="About" to="/about">
              About
            </NavLink>
          </li>
          <div className="relative">
            <img
              className="absolute top-[6px] left-6"
              width={18}
              src={SearchIcon}
              alt="search"
            />
            <input
              className={`ml-4 bg-transparent outline outline-[3px] outline-transparent border border-[#526b5b]/20 text-[#526b5b] text-sm pl-8 pr-2 py-1 rounded-lg transition-all placeholder:text-xs placeholder:text-[#94A795] focus:outline focus:outline-[#bae6a7]/50 ${
                nav && "hidden"
              }`}
              placeholder="Search projects"
            />
          </div>
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className={nav ? style.mobile_btn_active : style.mobile_btn}
        >
          <NavButton isActive={nav} />
        </div>
      </div>
    </header>
  );
};
