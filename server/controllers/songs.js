const fs = require("fs");
const path = require("path");
const Song = require("../models/song");
const createSong = async (req, res) => {
  try {
    const { name, artists, album_id, duration } = req.body;
    const path = req.file.path;
    const song = Song({
      name,
      artists,
      duration,
      path,
      album_id,
    });
    await song.save();
    res.status(200).json({ message: "Post song" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSongs = async (req, res) => {
  console.log(req.session.loggedin);
  if (!req.session.loggedin) {
    return res.status(401).json({ message: "Not logged" });
  }
  try {
    const result = await Song.find().populate("album_id");
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
  }
};

const streamSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    // Verify if theres a range for the audio
    const range = req.headers.range;
    if (!range) {
      res.status(400).json({ message: "No range specified" });
    }

    const audioPath = path.resolve(__dirname, "../", song.path);
    const audioSize = fs.statSync(audioPath).size;

    // Set chunk size and start & end of audio
    // Example: "bytes={start}-" without end
    const CHUNK_SIZE = 10 ** 5; // 100 KB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, audioSize - 1);

    // headers
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${audioSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "audio/mp4",
    };

    res.writeHead(206, headers);

    console.log(audioPath);
    // create audio stream for each chunk
    const audioStream = fs.createReadStream(audioPath, { start, end });

    // Audio stream
    audioStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createSong,
  getSongs,
  streamSong,
};
