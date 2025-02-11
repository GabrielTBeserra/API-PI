const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://dbserver:27017/movies", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
