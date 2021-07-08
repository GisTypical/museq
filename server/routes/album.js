const express = require("express");
const router = express.Router();

const { createAlbum } = require("../controllers/album");

router.post("/", createAlbum);

module.exports = router;
