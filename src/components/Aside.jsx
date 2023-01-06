import { useState } from "react";
import { MenuArrow } from "./MenuArrow";

export const Aside = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <aside
        className={`absolute z-50 top-0 left-0 bottom-0 w-[60px] p-4 flex flex-col items-center gap-4 bg-white border-r border-[#F1F1F1] ${
          nav && "shadow-[5px_2px_7px_1px_rgba(0,0,0,0.02)]"
        }`}
      >
        <MenuArrow isActive={nav} onClick={() => setNav(!nav)} />
        <div className="cursor-pointer w-7 h-7 flex justify-center items-center bg-[#7D71FF] rounded-full text-white text-[12px] ">
          BS
        </div>
        <div className="w-7 h-7 flex justify-center items-center bg-[#7D71FF] rounded-full text-white text-[12px] ">
          BS
        </div>
      </aside>
      {/* MENU */}
      <div
        className={`absolute z-40 top-0 transition-all duration-500 ease-in-out ${
          nav ? "left-[60px]" : "-left-[100%]"
        }  bottom-0 pt-12 px-6 flex flex-col bg-gray-100 border-r border-[#E1F0DB]`}
      >
        <div>555dfdddddddb</div>
        <div>555</div>
        <div>555</div>
      </div>
    </>
  );
};
