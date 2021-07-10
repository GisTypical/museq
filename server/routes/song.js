const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
var storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

const { createSong, getSongs, streamSong } = require("../controllers/songs");

router.post("/", upload.single("song_file"), createSong);

router.get("/", getSongs);

router.get("/stream/:id", streamSong);

module.exports = router;
