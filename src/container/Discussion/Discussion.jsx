import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // Styles
  const h3Styles = { width: "100%", textAlign: "center", margin: "1rem 0" };

  useEffect(() => {
    // IIFE
    (async function () {
      try {
        const { data } = await axios.get(
          "https://json-server-vercel-jade-beta.vercel.app/api/comments"
        );

        setComments(data);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  // Handlers
  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const postHandler = (comment, setComment) => {
    axios
      .post(
        "https://json-server-vercel-jade-beta.vercel.app/api/comments",
        comment
      )
      .then(() =>
        axios.get(
          "https://json-server-vercel-jade-beta.vercel.app/api/comments"
        )
      )
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));

    // clearing the state
    setComment({
      name: "",
      email: "",
      body: "",
    });
  };

  // Conditional rendering
  const renderComments = () => {
    let renderedComment = <h3 style={h3Styles}>Loading...</h3>;

    if (comments) {
      return (renderedComment = comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
          onClick={() => selectCommentHandler(comment.id)}
        />
      )));
    }

    return renderedComment;
  };

  return (
    <main>
      <section className="commentBox">{renderComments()}</section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment postHandler={postHandler} />
      </section>
    </main>
  );
};

export default Discussion;
