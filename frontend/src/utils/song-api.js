import axios from "axios";

export const getSongs = async () => {
  const response = await axios.get("/api/song");
  return response.data;
};
