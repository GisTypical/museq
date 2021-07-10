const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");

const userRouter = require("./routes/user");
const playlistRouter = require("./routes/playlist");
const songRouter = require("./routes/song");
const albumRouter = require("./routes/album");

const PASS = process.env.MONGODBPASS;
mongoose.connect(
  `mongodb+srv://gistypical:${PASS}@cluster0.1hgxz.mongodb.net/museq?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("build"));
const SECRET = process.env.SECRET || "qid";
app.use(
  session({
    secret: SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      maxAge: 3600000,
    },
  })
);

app.use("/api/album", albumRouter);
app.use("/api/playlist", playlistRouter);
app.use("/api/user", userRouter);
app.use("/api/song", songRouter);
