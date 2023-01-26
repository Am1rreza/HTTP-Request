import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    // IIFE
    (async function () {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        console.log(data);

        setComments(data.slice(0, 4));
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  // get data from api

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
            />
          ))
        ) : (
          <h3 style={{ width: "100%", textAlign: "center", margin: "1rem 0" }}>
            Loading...
          </h3>
        )}
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <NewComment />
      </section>
    </main>
  );
};

export default Discussion;
