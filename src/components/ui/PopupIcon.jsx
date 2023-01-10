import { NavLink } from "react-router-dom";
import { projectCategories } from "../../data";
import { AsideIcon } from "../AsideIcon";

export const PopupIcon = ({ isPressed, color = "#526b5b", onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="md:hidden box w-8 h-8 fixed top-[60px] right-4 flex flex-col gap-[2px] justify-center items-center rounded-full cursor-pointer"
      >
        <div
          style={{ backgroundColor: color }}
          className="w-[3px] h-[3px] rounded-full"
        ></div>
        <div
          style={{ backgroundColor: color }}
          className="w-[3px] h-[3px] rounded-full"
        ></div>
        <div
          style={{ backgroundColor: color }}
          className="w-[3px] h-[3px] rounded-full"
        ></div>
      </div>
      <div
        className={`${
          !isPressed && "hidden"
        } flex flex-col md:hidden gap-2 absolute w-fit z-50 top-10 right-6 bg-white shadow-[0_3px_12px_-7px_rgba(0,0,0,0.7)] border border-[#E1F0DB] py-4 rounded-xl transition-all overflow-hidden`}
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
    </>
  );
};
