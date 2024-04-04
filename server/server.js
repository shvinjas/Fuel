const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./db/db");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myMongo");
// mongoose.connect("mongodb://mongo-db/myMongo");
app.get("/getUsers", async (request, response) => {
  try {
    const users = await UserModel.find();
    response.json(users);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});
const port =7000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
