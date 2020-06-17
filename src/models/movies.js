const mongoose = require("mongoose");
const mongoosepaginate = require("mongoose-paginate");

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
    type: String,
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
  bannerurl: {
    type: String,
    required: true,
  },
  comentarys: {
    type: Array,
    required: true,
  },
});

MovieSchema.plugin(mongoosepaginate);

mongoose.model("Movies", MovieSchema);
