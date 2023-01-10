import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="absolute z-40 md:top-[80px] md:left-3 md:right-3 md:bottom-3 flex bg-white rounded-t-xl md:rounded-xl shadow-[0_-5px_7px_-3px_rgba(0,0,0,0.02)] overflow-hidden inset-0 top-[55px]">
        <Aside />
        <Main />
      </div>
    </>
  );
};
