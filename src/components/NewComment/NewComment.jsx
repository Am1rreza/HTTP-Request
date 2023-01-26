import "./newComment.css";

const NewComment = () => {
  return (
    <div className="newComment">
      <div className="inputDiv">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="inputDiv">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="inputDiv">
        <label>Body</label>
        <textarea></textarea>
      </div>
    </div>
  );
};

export default NewComment;
