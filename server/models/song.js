const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  name: { type: String, required: true },
  artists: String,
  duration: String,
  plays: Number,
  album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
});

module.exports = mongoose.model("Song", songSchema);
