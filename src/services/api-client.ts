import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "01082fac150c45b59a93e9267d4caaeb",
  },
});
