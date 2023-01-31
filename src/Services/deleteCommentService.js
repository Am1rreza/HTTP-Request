import http from "./httpService";

function deleteComment(commentId) {
  return http.delete(`/comments/${commentId}`);
}

export default deleteComment;
