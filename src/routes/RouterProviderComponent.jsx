import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Error";
import ShoeFangTwo from "../pages/ShoeFangTwo";
import Journal from "../pages/Journal";
import Checkout from "../pages/Checkout";
import Sale from "../pages/Sale";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <ShoeFangTwo /> },
      { path: "/journal", element: <Journal /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/Sale", element: <Sale /> },
    ],
  },
]);

function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}

export default RouterProviderComponent;
