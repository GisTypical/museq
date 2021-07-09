const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
  name: { type: String, required: true },
  artists: { type: String, required: true },
  duration: { type: String },
  plays: { type: Number, default: 0 },
  path: { type: String },
  album_id: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
});

module.exports = mongoose.model("Song", songSchema);
