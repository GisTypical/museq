const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
  name: String,
  creator_usr: { type: String, ref: "User" },
  description: String,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album.songs" }],
});

module.exports = mongoose.model("Playlist", playlistSchema);
