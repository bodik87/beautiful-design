import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { Labels } from "../../components/ui/Labels";
import { notes } from "../../data";

export const NotePage_0 = () => {
  const subtitles = ["Робота з зображеннями", "Сайти з іконками", "JSON"];
  return (
    <>
      <Labels labels={subtitles} />
      <div className="overflow-auto pr-4 ">
        <PageTitle title={notes[0].title} />

        <div className="columns-1 md:columns-2 lg:columns-3 mt-4 gap-10">
          <div className="break-inside-avoid">
            <Subtitle subtitle={subtitles[0]} />
            {notes[0].links_pictures.map((link) => (
              <MyLink key={link.id} link={link} />
            ))}
          </div>

          <div className="break-inside-avoid">
            <Subtitle subtitle={subtitles[1]} />
            {notes[0].links_icons.map((link) => (
              <MyLink key={link.id} link={link} />
            ))}
          </div>

          <div className="break-inside-avoid">
            <Subtitle subtitle={subtitles[2]} />
            {notes[0].links_json.map((link) => (
              <MyLink key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Subtitle = ({ subtitle }) => {
  return (
    <h3 className="w-fit mb-4 text-xl border-l-4 border-[#2ECC71] bg-[#E1F0DB] px-4 py-2 rounded-xl font-semibold">
      {subtitle}
    </h3>
  );
};

const MyLink = ({ link }) => {
  return (
    <div key={link.id} className="">
      <a
        className="w-fit block mt-2 text-lg font-semibold text-[#070035] transition-all hover:text-[#ed1c24]"
        href={link.url}
      >
        {link.title}
      </a>
      <p className="pb-4">{link.decription}</p>
    </div>
  );
};
