import style from "./NavButton.module.css";

export const NavButton = ({ isActive }) => {
  return (
    <svg
      stroke="#526b5b"
      fill="none"
      className={!isActive ? style.hamb : style.activeHamb}
      viewBox="-10 -10 120 120"
      width="40"
    >
      <path
        className={!isActive ? style.hambLine : style.activeHambLine}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
      ></path>
    </svg>
  );
};
