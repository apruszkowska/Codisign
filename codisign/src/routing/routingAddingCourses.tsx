import { Link } from "react-router-dom";

export const RoutingLinks = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">CODISIGN</Link>
          </li>
          <li className="register">
            <Link to="/register">REGISTER</Link>
          </li>
          <li className="login">
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
