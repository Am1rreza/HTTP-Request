import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // IIFE
    (async function () {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );

        setComments(data.slice(0, 4));
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  // Handlers
  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  return (
    <main>
      <section className="commentBox">
        {comments ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
              onClick={() => selectCommentHandler(comment.id)}
            />
          ))
        ) : (
          <h3 style={{ width: "100%", textAlign: "center", margin: "1rem 0" }}>
            Loading...
          </h3>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
