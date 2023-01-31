import axios from "axios";

// Base URL
axios.defaults.baseURL = "https://json-server-vercel-jade-beta.vercel.app/api";

const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export default http;
