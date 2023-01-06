import { Outlet } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

export const Main = () => {
  return (
    <main className="pr-4 pl-[100px] py-4 flex flex-col">
      <Breadcrumbs />
      <Outlet />
    </main>
  );
};
