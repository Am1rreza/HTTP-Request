import HomePage from "./pages/HomePage";
import NewCommentPage from "./pages/NewComment";
import NotFoundPage from "./pages/NotFoundPage";
import FullComment from "./components/FullComment/FullComment";

const routes = [
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component: NewCommentPage },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
];

export default routes;
