import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./pages/RestaurantMenu";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

// const parent = React.createElement("div",{id: "parent"}, [
//     React.createElement("div",{id: "child", key: 1},
//         React.createElement("h1",{},"Im an h1 tag inside React")
//     ),
//     React.createElement("div",{id: "child2", key: 2},
//         React.createElement("h1",{},"Im an h1 tag inside React")
//     )
// ]
// );

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
