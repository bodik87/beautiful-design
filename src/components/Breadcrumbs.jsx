import { NavLink, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  const lastPath = location.pathname
    .replace(/\//g, " /")
    .replace(/\s/, "")
    .split(" ");
  return (
    <div className="text-xs select-none pb-3">
      {!home && (
        <NavLink className="font-semibold text-[#52505A]" to="/" title="Home">
          Home
        </NavLink>
      )}
      {lastPath.slice(0, -1).map((path) => (
        <NavLink key={path} to={path}>
          {" " +
            path.slice(0, 1) +
            " " +
            path.slice(1, 2).toUpperCase() +
            path.slice(2)}
        </NavLink>
      ))}
    </div>
  );
};
