import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { App } from "./App";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Notes } from "./pages/Notes/Notes";
import { About } from "./pages/About";
import { ReactPage } from "./pages/ReactPage";
import { CSSPage } from "./pages/CSSPage";
import { HTMLPage } from "./pages/HTMLPage";
import "./index.css";
import { NotePage_0 } from "./pages/Notes/NotePage_0";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/notes",
        element: <Notes />,
      },
      {
        path: "/react",
        element: <ReactPage />,
      },
      {
        path: "/css",
        element: <CSSPage />,
      },
      {
        path: "/html",
        element: <HTMLPage />,
      },
      {
        path: "/notes/0",
        element: <NotePage_0 />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
