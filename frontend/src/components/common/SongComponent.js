import React from "react";

const SongComponent = ({ song, i, onClick }) => {
  return (
    <div
      className="flex text-center place-items-center bg-violetcard p-3 mt-4 rounded-lg"
      id={song._id}
    >
      <div className="cursor-pointer" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pointer-events-none "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="place-items-start truncate">{i + 1}</div>
      <div className="flex-1 truncate">{song.name}</div>
      <div className="flex-1 truncate">{song.album_id.name}</div>
      <div className="flex-1 truncate">{song.artists}</div>
      <div className="flex-1 truncate">{song.duration}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-hotmagenta"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  );
};

export default SongComponent;
