import { useState } from "react";
import "./newComment.css";

const NewComment = ({ postHandler }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  // Handlers
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <section style={{ paddingTop: "1.5rem" }}>
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
            name="body"
            value={comment.body}
            onChange={changeHandler}
          ></textarea>
        </div>
        <button
          onClick={() => postHandler(comment, setComment)}
          className="addBtn"
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default NewComment;
