import http from "./httpService";

function getAllComments() {
  return http.get("/comments");
}

export default getAllComments;
