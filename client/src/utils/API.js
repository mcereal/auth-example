import axios from "axios";
const envRoutes = require("../utils/envRoutes")[process.env.NODE_ENV];

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

const BackendAPIs = {
  login: async () => {
    // chooses url on prod vs dev
    const BASEURL = `${envRoutes.login}`;

    try {
      const request = await axios.get(BASEURL, config);
      console.log("REQUEST", request);
      return request;
    } catch (error) {
      console.log(error);
    }
  },
};

export default BackendAPIs;
