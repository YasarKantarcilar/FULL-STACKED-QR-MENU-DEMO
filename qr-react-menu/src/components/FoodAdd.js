import React, { useState } from "react";
import axios from "axios";

function FoodAdd() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e) {
    await axios.post(
      "http://localhost:3000/food",
      {
        name: name,
        description: description,
        price: price,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  return (
    <div className="container">
      <div className="row">
        <label htmlFor="name">ISIM</label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="row">
        <label htmlFor="description">ACIKLAMA</label>
        <input
          type="text"
          name="description"
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="price">FIYAT</label>
          <input
            type="text"
            name="price"
            className="form-control w-50"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="button" className="row btn btn-success" onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default FoodAdd;
