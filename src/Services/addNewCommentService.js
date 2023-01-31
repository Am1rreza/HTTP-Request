import http from "./httpService";

function addNewComment(data) {
  return http.post("/comments", data);
}

export default addNewComment;
