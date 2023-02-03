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
          <NavLink activeClassName="activeTab2" to="/about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeTab2" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeTab2" to="/blogs">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeTab2" to="/post">
            Post
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
