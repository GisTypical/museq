const User = require("../models/user");
const crypto = require("crypto");

const signup = async (req, res) => {
  try {
    const { name, last_name, username, password } = req.body;

    // Check if username exists
    const result = await User.countDocuments({ username: username }).exec();
    if (result)
      return res.status(409).json({ message: "Username already exists" });

    let hashedPass;
    if (password) {
      hashedPass = crypto.createHash("sha256").update(password).digest("hex");
    }
    const user = new User({
      name: name,
      last_name: last_name,
      username: username,
      password: hashedPass,
    });
    await user.save();
    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    if (req.session.loggedin) {
      return res
        .status(200)
        .json({ message: "Login successful", username: req.session.username });
    }
    const { username, password } = req.body;

    let hashedPass;
    if (password)
      hashedPass = crypto.createHash("sha256").update(password).digest("hex");

    const response = await User.findOne({
      username: username,
      password: hashedPass,
    }).exec();

    if (!response) {
      return res.status(401).json({ message: "Wrong credentials" });
    }

    req.session.loggedin = true;
    req.session.username = username;
    res
      .status(200)
      .json({ message: "Login successful", username: req.session.username });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  signup,
  login,
};
