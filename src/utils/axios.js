import axios from "axios";

export const appAxios = axios.create({
  baseURL: "http://localhost:3030/api",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
