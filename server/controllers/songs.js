const Song = require("../models/song");

const createSong = async (req, res) => {
  try {
    const { name, artists, album_id } = req.body;
    const song = Song({
      name,
      artists,
      album_id,
    });
    await song.save();
    res.status(200).json({ message: "Post song" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSongs = async (req, res) => {
  try {
    const result = await Song.find().populate("album_id");
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createSong,
  getSongs,
};
