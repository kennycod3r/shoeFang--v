import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Error";
import ShoeFangTwo from "../pages/shoefangtwo";
import Journal from "../pages/journal";
import Checkout from "../pages/checkout";
import Sale from "../pages/sale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <ShoeFangTwo /> },
      { path: "/journal", element: <Journal /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/sale", element: <Sale /> },
    ],
  },
]);

function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}

export default RouterProviderComponent;
