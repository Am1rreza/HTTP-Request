import axios from "axios";
import { useState } from "react";
import "./newComment.css";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  // Handlers
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postHandler = () => {
    axios
      .post("http://localhost:3001/comments", comment)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

    // clearing the state
    setComment({
      name: "",
      email: "",
      content: "",
    });
  };

  return (
    <div className="newComment">
      <h2>Add New Comment</h2>
      <div className="formControl">
        <label>Name</label>
        <input
          name="name"
          value={comment.name}
          onChange={changeHandler}
          type="text"
        />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input
          name="email"
          value={comment.email}
          onChange={changeHandler}
          type="email"
        />
      </div>
      <div className="formControl">
        <label>Body</label>
        <textarea
          name="content"
          value={comment.content}
          onChange={changeHandler}
        ></textarea>
      </div>
      <button onClick={postHandler} className="addBtn">
        Add
      </button>
    </div>
  );
};

export default NewComment;
