import axios from "axios";
export const getSongs = () => {
  return axios.get("/api/song");
};
