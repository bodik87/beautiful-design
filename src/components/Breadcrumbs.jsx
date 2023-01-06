import { NavLink, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  return (
    <div className="h-6 text-xs">
      {!home && (
        <NavLink to="/" title="Home">
          <span className="font-semibold text-[#52505A]">Home</span>
        </NavLink>
      )}{" "}
      {!home && "/"}{" "}
      <span className="text-gray-400">
        {location.pathname.slice(1, 2).toUpperCase() +
          location.pathname.slice(2)}
      </span>
    </div>
  );
};
