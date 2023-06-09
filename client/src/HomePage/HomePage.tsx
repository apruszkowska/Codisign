import { Link } from "react-router-dom";
import { RoutingLinks } from "../routing/routingLinks";

export const HomePage = () => {
  return (
    <div>
      <RoutingLinks />
      <section className="mainStartContent">
        <h1 className="titleMainStart">Learn without limits</h1>
        <p className="descriptionMainStart">
          Start, switch, or advance your career with more than 5,400 courses,
          Professional Certificates, and degrees from world-class universities
          and companies.
        </p>

        <p className="linkToCourses">
          <Link to="/allCourses">SEE OUR COURSES NOW</Link>
        </p>
      </section>
    </div>
  );
};
