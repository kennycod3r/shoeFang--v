import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Error";
import Journal from "./pages/Journal";
import Checkout from "./pages/Checkout";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "journal/:journalId",
    element: <Journal />,
  },
  {
    path: "checkout/:checkoutId",
    element: <Checkout />,
  },
  {
    path: "*", 
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);