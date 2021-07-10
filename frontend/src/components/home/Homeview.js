import React, { useState, useRef } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { getSongs } from "../../utils/song-api";
import SongComponent from "../common/SongComponent";

const Homeview = () => {
  const [song, setSong] = useState("");
  const audioElem = useRef(null);
  const history = useHistory();
  const { data, isLoading } = useQuery("songs", getSongs, {
    onError: (error) => {
      if (error.request.status === 401) {
        history.push("/");
      }
    },
  });
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  const onClick = async (e) => {
    const id = e.target.parentNode.id;
    setSong(id);
    await audioElem.current.play();
  };

  return (
    <div className="mr-4">
      {data.map((song, i) => (
        <SongComponent
          key={song._id}
          song={song}
          onClick={onClick}
          i={i}
        ></SongComponent>
      ))}
      <audio ref={audioElem} src={`/api/song/stream/${song}`}></audio>
    </div>
  );
};

export default Homeview;
