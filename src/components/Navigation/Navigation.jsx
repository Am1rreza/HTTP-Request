import { NavLink, withRouter } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="activeTab2" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeTab2" to="/new-comment">
            New Comment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
