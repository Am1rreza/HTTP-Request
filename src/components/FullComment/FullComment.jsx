import { useEffect, useState } from "react";
import getAllComments from "../../Services/getAllCommentsService";
import "./fullComment.css";
import getOneComment from "../../Services/getOneComment";
import deleteComment from "../../Services/deleteCommentService";

const FullComment = ({ commentId, setCommentId, setComments }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      (async function () {
        try {
          const { data } = await getOneComment(commentId);

          setComment(data);
        } catch (error) {}
      })();
    }
  }, [commentId]);

  // Styles
  const h3Styles = {
    textAlign: "center",
    margin: "1rem 0",
    padding: "15px",
    color: "#444",
    backgroundColor: "#efefef",
    borderRadius: "5px",
  };

  // Handlers
  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);

      const { data } = await getAllComments();

      setComments(data);
      setComment(null);
      setCommentId(null);
    } catch (error) {
      console.log(error);
    }
  };

  // Conditional rendering
  let commentDetail = <h3 style={h3Styles}>Please select a comment !</h3>;

  if (commentId) commentDetail = <h3 style={h3Styles}>Loading...</h3>;

  if (comment)
    commentDetail = (
      <div className="fullComment">
        <p>
          <span>Name: </span>
          {comment.name}
        </p>
        <p>
          <span>Email: </span>
          {comment.email}
        </p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler} className="deleteBtn">
          Delete
        </button>
      </div>
    );

  return commentDetail;
};

export default FullComment;
