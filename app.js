import ReactDom from "react-dom/client";
import Header from "./src/Header.js";
import Home from "./src/Home.js";
import Error from "./src/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Suspense, lazy } from "react";
const RestaurantMenu = lazy(() => import("./src/RestaurantMenu.js"));
const CategoryMenu = lazy(() => import("./src/CategoryMenu.js"));
const About = lazy(() => import("./src/AboutMenu.js"));
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/categories",
        element: <About />,
      },
      { path: "/", element: <Home /> },
      {
        path: "/collection/:resId",
        element: (
          <Suspense>
            <CategoryMenu />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense>
            {" "}
            <RestaurantMenu />{" "}
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
