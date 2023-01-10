import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle";
import { Labels } from "../../components/ui/Labels";
import { PageContent } from "../../components/PageContent";
import { notes, notesLabels } from "../../data";
import SearchIcon from "/search.svg";
import ClearIcon from "/clear.svg";
import ArrowImg from "/arrow.svg";

export const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [newArray, setNewArray] = useState(notes);

  const getFidteredNotesByLabel = (text, array) => {
    const filteredData = array.filter((el) => {
      if (text === "All") return array;
      else return el.labels.trim().toLowerCase().includes(text.toLowerCase());
    });
    setNewArray(filteredData);
    setInputText("");
  };

  const getFidteredNotesByQuery = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    const filteredData = notes.filter((el) => {
      if (lowerCase === "") return notes;
      else
        return (
          el.title.trim().toLowerCase().includes(lowerCase) ||
          el.description.trim().toLowerCase().includes(lowerCase)
        );
    });
    setNewArray(filteredData);
    setInputText(lowerCase);
  };

  const clearInput = () => {
    setInputText("");
    setNewArray(notes);
  };

  return (
    <PageContent>
      <Labels
        bgColor="#F6F5F8"
        textColor="#070035"
        labels={notesLabels}
        onClick={getFidteredNotesByLabel}
        array={notes}
      />
      <div className="flex items-center gap-3 my-4 relative">
        <PageTitle title="Notes" />
        <NotesInput
          clearInput={clearInput}
          inputText={inputText}
          inputHandler={getFidteredNotesByQuery}
        />
      </div>

      <NotesSection>
        {newArray.map((note) => (
          <NoteItem key={note.id} item={note} />
        ))}
      </NotesSection>
    </PageContent>
  );
};

const NotesInput = ({ inputText, inputHandler, clearInput }) => {
  return (
    <div className="relative">
      <img
        className="absolute top-[7px] left-2 md:left-6"
        width={18}
        src={SearchIcon}
        alt="search"
      />
      {inputText && (
        <img
          onClick={clearInput}
          className="absolute top-[8px] left-[175px] md:left-[190px] cursor-pointer"
          width={16}
          src={ClearIcon}
          alt="clear"
        />
      )}
      <input
        value={inputText}
        onChange={inputHandler}
        className={`w-[200px] md:ml-4 bg-transparent outline outline-[3px] outline-transparent border-[2px] border-[#FBBC03] text-[#070035] text-sm pl-8 pr-2 py-1 rounded-xl transition-all placeholder:text-xs placeholder:text-[#94A795] focus:outline focus:outline-[#FBBC03]/20`}
        placeholder="Search notes"
      />
    </div>
  );
};

const NotesSection = ({ children }) => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl overflow-auto pr-1 pb-10">
      {children}
    </section>
  );
};

const NoteItem = ({ item }) => {
  return (
    <div
      className={`bg-[#F6F5F8] p-4 rounded-xl flex flex-col justify-between`}
    >
      <div>
        <h2 className="text-2xl font-semibold">{item.title}</h2>
        <h3 className="font-semibold text-sm mt-1 mb-2 opacity-70">
          {item.subtitle}
        </h3>
        <p className="text-sm whitespace-pre-line">{item?.description}</p>
      </div>
      {item?.path && (
        <NavLink
          className="box w-fit bg-[#7D71FF] text-white py-2 px-4 mt-3 rounded-2xl text-xs font-semibold flex items-center gap-2 outline outline-[3px] outline-transparent transition-all hover:outline-[#7D71FF]/30"
          to={item.path}
        >
          More details
          <img width={12} src={ArrowImg} alt="more" />
        </NavLink>
      )}
    </div>
  );
};
