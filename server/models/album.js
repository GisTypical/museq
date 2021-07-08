const mongoose = require("mongoose");

const albumSchema = mongoose.Schema({
  name: String,
  artist: String,
  year: Number,
});

module.exports = mongoose.model("Album", albumSchema);
