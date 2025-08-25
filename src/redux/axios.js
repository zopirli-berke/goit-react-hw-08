import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.go.it.global/",
});

export default instance;
