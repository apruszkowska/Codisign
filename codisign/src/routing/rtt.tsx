import { Link } from "react-router-dom";

export const Rtt = () => {
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
        </ul>
      </nav>
    </header>
  );
};
