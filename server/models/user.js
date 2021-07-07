const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  last_name: String,
  username: String,
});

module.exports = mongoose.model("User", userSchema);
