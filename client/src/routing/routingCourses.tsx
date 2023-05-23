import { Link } from "react-router-dom";
import RoutingCoursesStyles from "./RoutingCourses.module.css";

export const RoutingCourses = () => {
  return (
    <header className={RoutingCoursesStyles.headerRoutingCourse}>
      <nav className={RoutingCoursesStyles.navRouting}>
        <ul className={RoutingCoursesStyles.ulRouting}>
          <li className={RoutingCoursesStyles.logoRoutingCourse}>
            <Link to="/myCourses">CODISIGN</Link>
          </li>
          <li className={RoutingCoursesStyles.elementRoutingCourse}>
            <Link to="/myCourses">YOUR COURSES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
