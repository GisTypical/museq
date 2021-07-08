const User = require("../models/user");

const signup = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      last_name: req.body.last_name,
    });
    await user.save();
    res.status(200).json({ message: "Successfully registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error has ocurred" });
  }
};

module.exports = {
  signup,
};
