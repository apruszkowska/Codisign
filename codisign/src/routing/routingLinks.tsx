import { Link } from "react-router-dom";

export const RoutingLinks = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">CODISIGN</Link>
          </li>
          <li>
            <Link to="/register">REGISTER</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
