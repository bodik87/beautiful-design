import React from "react";
import { PageTitle } from "../../components/PageTitle";
import { notes } from "../../data";

export const NotePage_0 = () => {
  return (
    <div className="mt-6">
      <PageTitle title={notes[0].title} />

      <Subtitle subtitle="Робота з зображеннями:" />
      {notes[0].links_pictures.map((link) => (
        <MyLink link={link} />
      ))}

      <Subtitle subtitle="Сайти з іконками:" />
    </div>
  );
};

const Subtitle = ({ subtitle }) => {
  return (
    <h3 className="w-fit mt-6 mb-4 text-xl border-l-4 border-[#2ECC71] bg-[#E1F0DB] px-4 py-2 rounded-xl font-semibold">
      {subtitle}
    </h3>
  );
};

const MyLink = ({ link }) => {
  return (
    <div key={link.id}>
      <a
        className="block my-2 text-lg font-semibold text-[#ed1c24] transition-all hover:text-[#070035]"
        href={link.url}
      >
        {link.title}
      </a>
      <p className="mt-1">{link.decription}</p>
    </div>
  );
};
