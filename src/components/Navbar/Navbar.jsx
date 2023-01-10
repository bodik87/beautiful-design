import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "/vite.svg";
import SearchIcon from "/search.svg";
import ClearIcon from "/clear.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const location = useLocation();
  const home = location.pathname === "/";

  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const clearInput = () => {
    setValue("");
  };

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  return (
    <header className="">
      <div className="flex justify-between items-center h-[65px] pb-2 px-4 md:rounded-t-xl bg-gradient-to-t from-[#E1F0DB] to-[#E8F6E2] border-t border-[#E4F0DE]">
        <div className="flex items-center justify-center gap-2">
          <img width={20} src={Logo} alt="/" />
          <p className="text-sm font-semibold text-[#526b5b]">BOGDAN SHULIKA</p>
        </div>

        <ul
          className={
            isActive ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
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
            {value && (
              <img
                onClick={clearInput}
                className="absolute top-[7px] right-2 cursor-pointer"
                width={16}
                src={ClearIcon}
                alt="clear"
              />
            )}
            <input
              value={value}
              onChange={handleChange}
              className={`max-w-[200px] ml-4 bg-transparent outline outline-[3px] outline-transparent border border-[#526b5b]/20 text-[#526b5b] text-sm px-8 py-1 rounded-lg transition-all placeholder:text-xs placeholder:text-[#94A795] focus:outline focus:outline-[#bae6a7]/50 ${
                isActive && "hidden"
              }`}
              placeholder="Search projects"
            />
          </div>
        </ul>

        <div
          onClick={() => setIsActive(!isActive)}
          className={isActive ? styles.mobile_btn_active : styles.mobile_btn}
        >
          <svg
            stroke="#526b5b"
            fill="none"
            className={
              !isActive
                ? "block transition-all"
                : "transition-all -translate-y-[3px] translate-x-[2px] rotate-45"
            }
            viewBox="-10 -10 120 120"
            width="40"
          >
            <path
              className={!isActive ? styles.hambLine : styles.activeHambLine}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};
