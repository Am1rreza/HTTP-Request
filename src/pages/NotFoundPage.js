import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <>
      <h1>404</h1>
      <h2>Not Found Page !</h2>
      <Link to={"/"}>Back to the Home page ...</Link>
    </>
  );
};

export default NotFoundPage;
