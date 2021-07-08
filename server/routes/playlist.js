const express = require("express");
const router = express.Router();

const { playlistCreate, playlistGet } = require("../controllers/playlist");

router.post("/", playlistCreate);

router.get("/:playlist_id", playlistGet);

module.exports = router;
