const express = require("express");
const router = express.Router();

const { createSong, getSongs } = require("../controllers/songs");

router.post("/", createSong);

router.get("/", getSongs);

module.exports = router;
