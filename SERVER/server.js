const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Food = require("./FoodModel");
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1/foods", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
  });
  next();
});

app.post("/food", (req, res) => {
  if (req.body.name !== "" && req.body.price !== "") {
    Food.create(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
      },
      (err, post) => {
        console.log(err, post);
      }
    );
  }
});

app.patch("/food/:id/:price", (req, res) => {
  var user_id = req.params.id;
  Food.findByIdAndUpdate(user_id, { price: req.params.price }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated User : ", docs);
    }
  });
});

app.delete("/food/:id", (req, res) => {
  console.log(req.params.id);
  Food.findOneAndDelete({ _id: req.params.id }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
});

app.get("/food", (req, res) => {
  Food.find((error, food) => {
    if (error) {
      // handle error
    } else {
      res.json(food);
    }
  });
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
