import { createRef, useEffect, useRef, useState } from "react";

export const ToggleFilterContainer = ({
  filtersArray,
  handleClick,
  activeFilterIndex,
}) => {
  const refs = useRef([]);
  const [activeFilterWidth, setActiveFilterWidth] = useState(0);

  const getLeftMargin = () => {
    const arr = [];
    let margin = 0;
    Object.values(refs).forEach((item, i) => arr.push(item.offsetWidth));
    margin = arr.slice(0, activeFilterIndex).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return margin;
  };

  const [leftMargin, setLeftMargin] = useState(getLeftMargin());

  useEffect(() => {
    setActiveFilterWidth(refs[activeFilterIndex].offsetWidth);
    setLeftMargin(getLeftMargin() + 4);
  }, [activeFilterIndex]);

  const changeFilter = (index) => {
    handleClick(index);
  };

  return (
    <div className="flex w-fit bg-[#F6F5F8] text-xs font-semibold p-1 rounded-xl cursor-pointer relative">
      <div
        style={{ width: activeFilterWidth, left: leftMargin + "px" }}
        className="absolute top-1 bottom-1 bg-white shadow-[0_3px_12px_-7px_rgba(0,0,0,0.7)] py-1 px-6 rounded-lg transition-all duration-500"
      />
      {filtersArray.map((filter, i) => (
        <div
          key={i}
          ref={(filter) => (refs[i] = filter)}
          onClick={() => changeFilter(i)}
          className={`${
            activeFilterIndex === i ? "text-[#070035]" : "text-[#A5A3AF]"
          } z-10 py-1 px-6 transition-all duration-500 select-none`}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};
