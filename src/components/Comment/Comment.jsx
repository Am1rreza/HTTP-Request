import "./comments.css";

const Comment = ({ name, email, body }) => {
  return (
    <div className="comment">
      <p>
        <span>Name: </span>{name}
      </p>
      <p>
        <span>Email: </span>{email}
      </p>
    </div>
  );
};

export default Comment;
