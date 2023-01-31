import React, { useState } from "react";
import axios from "axios";
import "./Edit.css";

function Edit(props) {
  const [value, setValue] = useState("");

  function submitHandleClick(e) {
    e.preventDefault()
    axios.patch(
      `http://localhost:3000/food/${e.target.parentNode.parentNode.firstChild.id}/${value}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="Edit">
      <label htmlFor="name">FIYAT</label>
      <input
        type="text"
        name="name"
        id="name"
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={props.foodPrice}
      />
      <button onClick={submitHandleClick}>SUBMIT</button>
    </div>
  );
}

export default Edit;
