import ReactDom from "react-dom/client";
import Header from "./src/Header.js";
import Home from "./src/Home.js";
import Error from "./src/Error.js";
import Categories from "./src/Categories.js";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useRouteError,
} from "react-router";
import { Component } from "lucide-react";

var count = 0;
const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
