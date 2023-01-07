import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

export const Main = () => {
  return (
    <main className="w-full pr-3 md:pr-4 pl-[72px] md:pl-[100px] py-4 flex flex-col">
      <Breadcrumbs />
      <Outlet />
    </main>
  );
};
