import ReactDom from "react-dom/client";
import Header from "./src/Header.js";
import Home from "./src/Home.js";
import Error from "./src/Error.js";
import RestaurantMenu from "./src/RestaurantMenu.js";
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
        element: <Categories name="HEllo" />,
      },
      { path: "/", element: <Home /> },
      { path: "/collection/:resId", element: <CategoryMenu /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
