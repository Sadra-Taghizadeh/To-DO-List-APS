const express = require("express");
const mongoose = require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5500;

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));


app.listen(PORT, () => console.log("server connected"));
