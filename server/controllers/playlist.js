const Playlist = require("../models/playlist");

const playlistCreate = async (req, res) => {
  try {
    const playlist = new Playlist({
      name: req.body.name,
      creator_usr: req.body.creator_usr,
      description: req.body.description,
      songs: req.body.songs,
    });
    await playlist.save();
    res.status(200).json({ message: "Playlist created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const playlistGet = async (req, res) => {
  try {
    const result = await Playlist.findById(req.params.playlist_id).populate(
      "songs"
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  playlistCreate,
  playlistGet,
};
