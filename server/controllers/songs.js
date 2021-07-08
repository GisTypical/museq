const Song = require("../models/song");

const createSong = async (req, res) => {
  res.status(200).json({ message: "Post song" });
};

const getSongs = async (req, res) => {
  try {
    const result = await Song.find();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createSong,
  getSongs,
};
