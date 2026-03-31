import ReactDom from "react-dom/client";
import Header from "./src/component/Header.js";
import Home from "./src/component/Home.js";
import Error from "./src/component/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Suspense, lazy, useEffect, useState } from "react";
import UserInfo from "./src/utils/userInfo.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
const RestaurantMenu = lazy(() => import("./src/component/RestaurantMenu.js"));
const CategoryMenu = lazy(() => import("./src/component/CategoryMenu.js"));
const About = lazy(() => import("./src/component/AboutMenu.js"));
const Cart = lazy(() => import("./src/component/Cart.js"));
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
