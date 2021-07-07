const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  name: String,
  artist: [String],
  duration: String,
  plays: Number,
});

const albumSchema = mongoose.Schema({
  name: String,
  artist: String,
  year: Number,
  songs: [songSchema],
});

module.exports = mongoose.model("Album", albumSchema);
