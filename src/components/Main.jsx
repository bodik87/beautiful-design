import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { projectCategories } from "../data";
import { AsideIcon } from "./AsideIcon";
import { Breadcrumbs } from "./Breadcrumbs";
import { PopupIcon } from "./ui/PopupIcon";

export const Main = () => {
  const location = useLocation();
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    setPressed(false);
  }, [location]);

  return (
    <main className="w-full h-full px-4 md:pl-[100px] py-4 flex flex-col relative">
      <div
        onClick={() => setPressed(!pressed)}
        className="cursor-pointer box md:hidden absolute top-6 right-6"
      >
        <PopupIcon isPressed={pressed} />
      </div>
      <div
        className={`${
          !pressed && "hidden"
        } flex flex-col md:hidden gap-2 absolute w-fit z-50 top-16 right-6 bg-white shadow-[0_3px_12px_-7px_rgba(0,0,0,0.7)] border border-[#E1F0DB] py-4 rounded-xl transition-all overflow-hidden`}
      >
        {projectCategories.map((category) => (
          <NavLink
            key={category.title}
            title={category.title}
            to={category.path}
          >
            <div className="-ml-4 flex gap-3 items-center bg-transparent py-2 px-8 transition-all hover:bg-[#E1F0DB]">
              <AsideIcon
                icon={category.icon}
                background={category.background}
              />
              <span className="text-sm">{category.title} projects</span>
            </div>
          </NavLink>
        ))}
      </div>
      <Breadcrumbs />
      <Outlet />
    </main>
  );
};
