import { useRef } from "react";

export const Labels = ({
  labels,
  onClick = () => {},
  array,
  bgColor = "#FFEBC9",
  textColor = "#906556",
}) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-2 text-[10px] font-semibold relative">
      {labels.map((label) => (
        <a
          onClick={() => onClick(label, array)}
          key={label}
          // style={{
          //   color: textColor,
          //   backgroundColor: bgColor,
          // }}
          className="px-2 rounded-md transition-all bg-violet-200 hover:bg-violet-300 active:bg-violet-400"
          href="##"
        >
          {label}
        </a>
      ))}
    </div>
  );
};
