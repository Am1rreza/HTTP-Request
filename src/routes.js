import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewComment";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
];

export default routes;
