import ReactDom from "react-dom/client";
import Header from "./src/Header.js";
import Home from "./src/Home.js";
import Error from "./src/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Suspense, lazy, useEffect, useState } from "react";
import UserInfo from "./src/utils/userInfo.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
const RestaurantMenu = lazy(() => import("./src/RestaurantMenu.js"));
const CategoryMenu = lazy(() => import("./src/CategoryMenu.js"));
const About = lazy(() => import("./src/AboutMenu.js"));
const Cart = lazy(() => import("./src/Cart.js"));
const App = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    setCurrentUser("Harshit");
  }, []);
  return (
    <>
      <Provider store={appStore}>
        <UserInfo value={{ name: currentUser, setCurrentUser }}>
          <Header />
          <Outlet />
        </UserInfo>
      </Provider>
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
      {
        path: "/cart",
        element: (
          <Suspense>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
