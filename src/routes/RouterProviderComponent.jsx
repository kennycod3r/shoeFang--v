import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ShoeFang from "../pages/shoefang";
import Journal from "../pages/journal-page";
import Sale from "../pages/sale-page";
import Checkout from "../pages/check-out";
import ErrorPage from "../pages/error-page";
import Shop from "../pages/shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      { path: "/", element: <ShoeFang /> },
      { path: "/journal-page", element: <Journal /> },
      { path: "/check-out", element: <Checkout /> },
      { path: "/sale-page", element: <Sale /> }, 
      { path: "/shop", element: <Shop /> },
    ],
  },
]);
function RouterProviderComponent() {
  return <RouterProvider router={router} />;
}

export default RouterProviderComponent;
