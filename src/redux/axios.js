import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export default instance;
