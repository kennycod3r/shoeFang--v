import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Buttons from "../../utility/Buttons";
import Colors from "./Colors";
import "./Recommended.css";
import Sponsor from "../Sponsors/Sponsor";

export default function Recommended({
  handleClick,
  query,
  handleInputChange,
  handleChange,
}) {
  return (
    <>
      <Sponsor />
      <div className="recommended-section">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-query">
          <div className="recommended-flex">
            <Buttons value="" title="All" onClickHandler={handleClick} />
            <Buttons value="Nike" title="Nike" onClickHandler={handleClick} />
            <Buttons
              value="Adidas"
              title="Adidas"
              onClickHandler={handleClick}
            />
            <Buttons value="Puma" title="Puma" onClickHandler={handleClick} />
            <Buttons value="Vans" title="Vans" onClickHandler={handleClick} />
          </div>
          <div className="colors">
            <Colors handleChange={handleChange} />
          </div>
          <div className="search-div">
            <SearchInput query={query} handleInputChange={handleInputChange} />
          </div>
        </div>
      </div>
    </>
  );
}
