const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  name: String,
  artists: String,
});
