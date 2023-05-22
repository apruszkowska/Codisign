import { Link } from "react-router-dom";
import RoutingCoursesStyles from "./RoutingCourses.module.css";

export const RoutingAddingLinks = () => {
  return (
    <header className={RoutingCoursesStyles.headerRoutingCourse}>
      <nav>
        <ul>
          <li className={RoutingCoursesStyles.logoRoutingCourse}>
            <Link to="/myCourses">CODISIGN</Link>
          </li>
          <li className={RoutingCoursesStyles.elementAddRoutingCourse}>
            <Link to="/myCourses">YOUR COURSES</Link>
          </li>
          <li className={RoutingCoursesStyles.elementAddRoutingCourse}>
            <Link to="/allCourses">ALL COURSES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
