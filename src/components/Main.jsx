import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";
import { PopupIcon } from "./ui/PopupIcon";

export const Main = () => {
  const [pressed, setPressed] = useState(false);
  const location = useLocation();
  const handleClick = () => setPressed(!pressed);

  useEffect(() => {
    setPressed(false);
  }, [location]);

  return (
    <main className="w-full h-full px-4 md:pl-[85px] py-4 flex flex-col relative">
      <Breadcrumbs />
      <PopupIcon isPressed={pressed} onClick={handleClick} />
      <Outlet />
    </main>
  );
};
