import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { useGo } from "../hooks/useGo";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const { goHome } = useGo();

  useEffect(() => {
    setTimeout(() => {
      goHome();
    }, 5000);
  }, []);

  return (
    <div id="error-page" className="flex flex-col gap-4 items-center">
      <h1 className="font-extrabold text-2xl">Oops!</h1>
      <p className="font-extrabold text-gray-600">
        Sorry, an unexpected error has occurred.
      </p>
      <p>You will be redirected to the home page in 5 seconds.</p>
      <p className="font-semibold text-gray-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
