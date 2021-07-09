import axios from "axios";

export const createUser = (user) => {
  return axios.post("/api/user/signup", user);
};

export const loginUser = (user) => {
  return axios.post("/api/user/login", user);
};
