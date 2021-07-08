const Album = require("../models/album");

const createAlbum = async (req, res) => {
  const album = new Album({
    name: req.body.name,
    artist: req.body.artist,
    year: req.body.year,
  });
  res.json({ message: "Todo fino mano" });
  await album.save();
};

module.exports = {
  createAlbum,
};
