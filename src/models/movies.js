const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoria: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  rating: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  sinopse: {
    type: String,
    required: true,
  },
  comentarys: {
    type: Array,
    required: true,
  },
});

mongoose.model("Movies", MovieSchema);
