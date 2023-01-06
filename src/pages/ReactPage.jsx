import { PageTitle } from "../components/PageTitle";

export const ReactPage = () => {
  return (
    <div className="flex justify-between items-center">
      <PageTitle title="React projects" />
      <div className="flex bg-[#F6F5F8] text-[#A5A3AF] text-xs font-semibold py-1 rounded-xl">
        <button className={`bg-transparent rounded-xl py-1 px-6`}>Easy</button>
        <button
          className={`bg-white rounded-xl py-1 px-6 shadow-[0_3px_12px_-7px_rgba(0,0,0,0.7)] text-[#070035]`}
        >
          Normal
        </button>
        <button className={`bg-transparent rounded-xl py-[6px] px-6`}>
          Hard
        </button>
      </div>
    </div>
  );
};
