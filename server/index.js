const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const User = require("./models/user");
const Album = require("./models/album");
const Playlist = require("./models/playlist");

mongoose.connect("mongodb://localhost:27017/museq", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.json({ hola: "hola" });
});

app.post("/album", (req, res) => {
  const exec = async () => {
    const album = new Album({
      name: req.body.name,
      artist: req.body.artist,
      year: req.body.year,
      songs: req.body.songs,
    });
    await album.save();
  };
  exec();
  res.json({ message: "Todo fino mano" });
});
app.post("/playlist", (req, res) => {
  const exec = async () => {
    try {
      const playlist = new Playlist({
        name: req.body.name,
        creator_usr: req.body.creator_usr,
        description: req.body.description,
        songs: req.body.songs,
      });
      await playlist.save();
    } catch (error) {
      console.error(error);
    }
  };
  exec();
  res.json({ message: "Playlist fino mano" });
});

app.get("/playlist", (req, res) => {
  const exec = async () => {
    try {
      const result = await Playlist.findById(req.body.playlist_id).populate(
        "songs"
      );
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
    }
  };
  exec();
});

app.post("/user", (req, res) => {
  const exec = async () => {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      last_name: req.body.last_name,
    });
    await user.save();
  };
  exec();
  res.json({ hola: "hola" });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
