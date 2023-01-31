import React, { useState } from "react";
import "./Food.css";

// COMPONENTS
import AdminController from "./AdminController";
import Edit from "./Edit";

function Food(props) {
  const isAdmin = props.isAdmin;
  const [isEditing, setIsEditing] = useState(false);

  function editHandleClick(e) {
    setIsEditing((current) => !current);
  }

  return (
      <div className="Food">
          <span id={props.id}></span>
          <p className="Food-name">Yemek ismi: {props.foodName}</p>
          <p className="Food-description">
            Yemek açıklaması: {props.foodDescription}
          </p>
          {!isEditing && (
            <p className="Food-price">Yemek fiyatı: {props.foodPrice}</p>
          )}
          {isEditing && isAdmin && <Edit foodPrice={props.foodPrice} />}
          {isAdmin && <AdminController />}
          {isAdmin && (
            <button className="Food-edit" onClick={editHandleClick}>
              EDIT
            </button>
          )}
      </div>
  );
}

export default Food;
