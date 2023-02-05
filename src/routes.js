import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NewComment from "./pages/NewComment/NewComment";
import FullComment from "./pages/FullComment/FullComment";

const routes = [
  { path: "/comment/:id", component: FullComment },
  { path: "/new-comment", component: NewComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFoundPage },
];

export default routes;
