import { PageTitle } from "../components/PageTitle";
import { notes } from "../data";
import SearchIcon from "/search.svg";
import ArrowImg from "/arrow.svg";
import { useState } from "react";

export const Notes = () => {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = notes.filter((note) => {
    if (inputText === "") {
      return note;
    } else {
      return note.title.toLowerCase().includes(inputText);
    }
  });

  return (
    <>
      <header className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
        <PageTitle title="Notes" />
        <div className="relative">
          <img
            className="absolute top-[7px] left-2 md:left-6"
            width={18}
            src={SearchIcon}
            alt="search"
          />
          <input
            value={inputText}
            onChange={inputHandler}
            className={`md:ml-4 bg-transparent outline outline-[3px] outline-transparent border-[2px] border-[#FBBC03] text-[#070035] text-sm pl-8 pr-2 py-1 rounded-xl transition-all placeholder:text-xs placeholder:text-[#94A795] focus:outline focus:outline-[#FBBC03]/20`}
            placeholder="Search notes"
          />
        </div>
      </header>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl overflow-auto">
        {filteredData.map((note) => (
          <div
            key={note.id}
            className={`${
              note?.isBig && "col-span-1 sm:col-span-1 row-span-2 lg:row-span-2"
            } bg-[#F6F5F8] p-4 rounded-xl flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-2xl font-semibold">{note.title}</h2>
              <h3 className="font-semibold text-sm mb-2">{note.title}</h3>
              <p className="text-base whitespace-pre-line">{note?.body}</p>
            </div>
            {note?.more && (
              <button className="w-fit bg-white py-2 px-4 rounded-2xl text-xs font-semibold flex items-center gap-2">
                More details <img width={10} src={ArrowImg} alt="more" />
              </button>
            )}
          </div>
        ))}
      </section>
    </>
  );
};
