import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Comment from "./Comment/Comment";
import "./comments.css";
import getAllComments from "../../Services/getAllCommentsService";
import addNewComment from "../../Services/addNewCommentService";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);
  // Styles
  const h3Styles = { width: "100%", textAlign: "center", margin: "1rem 0" };

  useEffect(() => {
    // IIFE
    (async function () {
      try {
        const { data } = await getAllComments();

        setComments(data);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  // Handlers
  const postHandler = async (comment, setComment) => {
    try {
      await addNewComment(comment);

      const { data } = await getAllComments();

      setComments(data);
    } catch (error) {}

    // clearing the state
    setComment({
      name: "",
      email: "",
      body: "",
    });
  };

  // Conditional rendering
  const renderComments = () => {
    let renderValue = <h3 style={h3Styles}>Loading...</h3>;

    if (error) {
      renderValue = <h3 style={h3Styles}>Fetching data faild !</h3>;
      toast.error("There is an error");
    }

    if (comments && !error) {
      return (renderValue = comments.map((comment) => (
        <Link to={`/comment/${comment.id}`} key={comment.id}>
          <Comment
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </Link>
      )));
    }

    return renderValue;
  };

  return <section className="commentBox">{renderComments()}</section>;
};

export default Comments;
