import axios from "axios";

const config = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com"
  });

export default config;
