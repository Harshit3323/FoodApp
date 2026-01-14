import ReactDom from "react-dom/client";
import Header from "./src/Header.js";
import Home from "./src/Home.js";
import Error from "./src/Error.js";
import ResaturantMenu from "./src/RestaurantMenu.js";
import Categories from "./src/Categories.js";
import CategoryMenu from "./src/CategoryMenu.js";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router";

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
        element: (
          <h1>
            <center>Categories!?</center>
          </h1>
        ),
      },
      { path: "/", element: <Home /> },
      { path: "/collection/:resId", element: <CategoryMenu /> },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
