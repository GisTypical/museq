const Album = require("../models/album");

const createAlbum = async (req, res) => {
  try {
    const album = new Album({
      name: req.body.name,
      artist: req.body.artist,
      year: req.body.year,
    });
    await album.save();
    res.status(201).json({ message: "Album created" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createAlbum,
};
