import React from "react";
import { useRouteError } from "react-router-dom";
import ER from "./assets/errorrobot.svg";
import "./index.css";
import { Link } from "react-router-dom";
import CloseButton from "./utility/CloseButton";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div>
        <div className="erobot">
          <img src={ER} alt="Error" className="erobot-img" />
        </div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <b>{error.statusText || error.message}</b>
        </p>
      </div>
      
      <div className="article">
      <Link to="/">
        <CloseButton className={"errorclose"} white={"white"}/>
      </Link>
      </div>
    </div>
  );
}
