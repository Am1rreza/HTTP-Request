import http from "./httpService";

function addNewComment(data) {
  const header = {
    headers: {
      Authorization: "SECURE_TOKEN",
    },
  };

  return http.post("/comments", data, header);
}

export default addNewComment;
