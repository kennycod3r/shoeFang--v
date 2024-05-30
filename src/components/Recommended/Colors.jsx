import Input from "../../utility/Input";
import React from "react";

export default function Colors({ handleChange }) {
  return (
    <div className="color-grid">
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test3" />
        <span className="checkmark all"></span>
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        name="test3"
        color="#2c2929f7"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        name="test3"
        color="#005fc7c2"
      />
      <Input
        handleChange={handleChange}
        value="red"
        name="test3"
        color="#e22a2af5"
      />
      <Input
        handleChange={handleChange}
        value="green"
        name="test3"
        color="#008064db"
      />

      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          name="test3"
          value="white"
        />
        <span className="checkmark white"></span>
      </label>
    </div>
  );
}
