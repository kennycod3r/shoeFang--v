import App from './App.jsx';
import './index.css';
import * as React from "react";
import ErrorPage from './Error';
//import Root from "./routes/root";
import Journal from './pages/Journal.jsx';
//import Contact from './routes/Contact';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "Journal/:JournalId",
    element: <Journal />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);