import "./comments.css";

const Comment = ({ name, email, onClick }) => {
  return (
    <div className="comment" onClick={onClick}>
      <p>
        <span>Name: </span>
        {name}
      </p>
      <p>
        <span>Email: </span>
        {email}
      </p>
    </div>
  );
};

export default Comment;
