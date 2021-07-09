import React from "react";
import { useQuery } from "react-query";
import { getSongs } from "../utils/song-api";
const Home = () => {
  const { data } = useQuery("songs", getSongs);
  return (
    <div>
      {data && data.data.map((song, i) => <pre id={song._id}>{song.name}</pre>)}
    </div>
  );
};

export default Home;
