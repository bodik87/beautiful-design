import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { projectCategories } from "../data";
import { AsideIcon } from "./AsideIcon";
import { MenuArrow } from "./MenuArrow";

export const Aside = () => {
  const location = useLocation();
  const visible =
    location.pathname === "/react" ||
    location.pathname === "/css" ||
    location.pathname === "/html";
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [location]);

  return (
    <>
      <aside
        className={`absolute z-50 top-0 left-0 bottom-0 w-[60px] p-4 flex flex-col items-center gap-4 bg-white border-r border-[#F1F1F1] ${
          nav && "shadow-[5px_2px_7px_1px_rgba(0,0,0,0.02)]"
        }`}
      >
        {projectCategories.map((category) => (
          <NavLink
            key={category.title}
            title={category.title}
            to={category.path}
          >
            <AsideIcon icon={category.icon} background={category.background} />
          </NavLink>
        ))}
        {visible && <MenuArrow isActive={nav} onClick={() => setNav(!nav)} />}
      </aside>
      {/* MENU */}
      <div
        className={`absolute z-40 top-0 transition-all ${
          nav ? "left-[60px]" : "-left-[100%]"
        }  bottom-0 p-6 flex flex-col bg-gray-100 border-r border-[#E1F0DB]`}
      >
        <button className="flex items-center gap-3 bg-[#cdc4e7] py-2 pl-2 pr-8 rounded-xl text-left">
          <div className="w-[40px] h-[40px] bg-[#7D71FF] rounded-md ml-1"></div>
          <div>
            <p className="text-base font-semibold">Title of work</p>
            <p className="text-sm ">Short description</p>
          </div>
        </button>
      </div>
    </>
  );
};
