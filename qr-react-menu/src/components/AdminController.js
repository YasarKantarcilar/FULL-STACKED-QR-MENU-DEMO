import React from "react";
import axios from "axios";
import "./AdminController.css";

function AdminController() {
  function deleteHandleClick(e) {
    e.preventDefault()
    e.target.parentNode.parentNode.remove()
    axios.delete(
      `http://localhost:3000/food/${e.target.parentNode.parentNode.firstChild.id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        },
      }
    );
  }

  return (
    <div className="AdminController">
      <button onClick={deleteHandleClick}>DELETE</button>
    </div>
  );
}

export default AdminController;
