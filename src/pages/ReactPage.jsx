import { useState } from "react";
import { PageTitle } from "../components/PageTitle";

export const ReactPage = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  const handleClick = (i) => setActiveFilter(i);
  const filters = ["Easy", "All", "Hard"];

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
        <PageTitle title="React projects" />
        <div className="flex w-fit bg-[#F6F5F8] text-[#A5A3AF] text-xs font-semibold p-1 rounded-xl">
          {filters.map((filter, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`${
                activeFilter === i &&
                "bg-white shadow-[0_3px_12px_-7px_rgba(0,0,0,0.7)] text-[#070035]"
              } rounded-lg py-1 px-6 transition-all duration-500`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>
      <section className="bg-[#F6F5F8] w-full p-5 rounded-xl flex-grow"></section>
    </>
  );
};
