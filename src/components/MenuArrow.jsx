import MenuArrowImg from "/menu-arrow.svg";

export const MenuArrow = ({ isActive, onClick }) => {
  return (
    <button onClick={onClick}>
      <div className={`${isActive && "rotate-180"} w-5 transition`}>
        <img src={MenuArrowImg} alt="menu" />
      </div>
    </button>
  );
};
