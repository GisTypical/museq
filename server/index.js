const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const userRouter = require("./routes/user");
const playlistRouter = require("./routes/playlist");
const songRouter = require("./routes/song");
const albumRouter = require("./routes/album");

mongoose.connect("mongodb://localhost:27017/museq", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => {
  console.log(path.resolve(__dirname, "../frontend/build"));
  console.log(`Listening at port ${PORT}`);
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("static"));

app.use("/api/album", albumRouter);
app.use("/api/playlist", playlistRouter);
app.use("/api/user", userRouter);
app.use("/api/song", songRouter);
