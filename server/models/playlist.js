const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  creator_usr: { type: String, ref: "User", required: true },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
});

module.exports = mongoose.model("Playlist", playlistSchema);
