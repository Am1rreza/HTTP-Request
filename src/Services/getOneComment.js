import http from "./httpService";

function getOneComment(commentId) {
  return http.get(`/comments/${commentId}`);
}

export default getOneComment;
