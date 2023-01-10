import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="absolute z-40 top-[80px] left-3 right-3 bottom-3 flex bg-white rounded-xl shadow-[0_-5px_7px_-3px_rgba(0,0,0,0.02)] overflow-hidden ">
        <Aside />
        <Main />
      </div>
    </>
  );
};
