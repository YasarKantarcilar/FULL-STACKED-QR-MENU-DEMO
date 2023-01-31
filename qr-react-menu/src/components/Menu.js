import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Menu.css";

//COMPONENTS
import Food from "./Food";
import FoodAdd from "./FoodAdd";

function Menu(props) {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/food").then((res) => setFoods(res.data));
  }, []);

  return (
    <div className="Menu">
      {props.isAdmin && <FoodAdd />}
      <div className="Menu-list">
        {foods.map((food) => (
          <Food
            isAdmin={props.isAdmin}
            key={food._id}
            id={food._id}
            foodName={food.name}
            foodDescription={food.description}
            foodPrice={food.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
