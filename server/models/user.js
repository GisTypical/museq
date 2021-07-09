const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  last_name: String,
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }],
});

module.exports = mongoose.model("User", userSchema);
