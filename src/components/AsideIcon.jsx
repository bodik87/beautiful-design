export const AsideIcon = ({ icon = {}, background = "#7D71FF" }) => {
  return (
    <button
      className={`w-8 h-8 flex justify-center outline outline-[3px] outline-transparent items-center rounded-full transition-all hover:outline-[#E0E3DE]`}
      style={{ backgroundColor: background }}
    >
      <img width={22} src={icon} alt="icon" />
    </button>
  );
};
