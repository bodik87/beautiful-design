export const AsideIcon = ({ icon = {}, background = "#7D71FF" }) => {
  return (
    <div
      className="cursor-pointer w-7 h-7 flex justify-center items-center rounded-full"
      style={{ backgroundColor: background }}
    >
      <img width={20} src={icon} alt="icon" />
    </div>
  );
};
