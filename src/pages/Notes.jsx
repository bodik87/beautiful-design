import { PageTitle } from "../components/PageTitle";
import SearchIcon from "/search.svg";

export const Notes = () => {
  return (
    <>
      <header className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <PageTitle title="Notes" />
        <div className="relative">
          <img
            className="absolute top-[7px] left-2 md:left-6"
            width={18}
            src={SearchIcon}
            alt="search"
          />
          <input
            className={`md:ml-4 bg-transparent outline outline-[3px] outline-transparent border-[2px] border-[#FBBC03] text-[#070035] text-sm pl-8 pr-2 py-1 rounded-xl transition-all placeholder:text-xs placeholder:text-[#94A795] focus:outline focus:outline-[#FBBC03]/20`}
            placeholder="Search notes"
          />
        </div>
      </header>
      <section className="bg-[#e0e3de] w-full p-5"></section>
    </>
  );
};
