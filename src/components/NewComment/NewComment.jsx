import "./newComment.css";

const NewComment = () => {
  return (
    <div className="newComment">
      <h2>Add New Comment</h2>
      <div className="formControl">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="formControl">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="formControl">
        <label>Body</label>
        <textarea></textarea>
      </div>
      <button className="addBtn">Add</button>
    </div>
  );
};

export default NewComment;
