import CoursesStyles from "./Courses.module.css";
import { RoutingMyCourses } from "../routing/routingMyCourses";
import { Link } from "react-router-dom";
import { ProtectedWrapper } from "../protectedWrapper/ProtectedWrapper";

export const MyCourses = () => {
  return (
    <ProtectedWrapper>
      <div>
        <RoutingMyCourses />
        <section className={CoursesStyles.containerCourses}>
          <div>
            <h2 className={CoursesStyles.titleCourses}>YOUR COURSES</h2>
          </div>
          <div className={CoursesStyles.grid}>
            <div className={CoursesStyles.one}>1</div>
            <div className={CoursesStyles.two}>2</div>
            <div className={CoursesStyles.three}>3</div>
            <div className={CoursesStyles.four}>4</div>
            <div className={CoursesStyles.five}>5</div>
            <div className={CoursesStyles.six}>6</div>
            <div className={CoursesStyles.seven}>7</div>
            <div className={CoursesStyles.eight}>8</div>
          </div>

          <div className="addNewCourse">
            <p className={CoursesStyles.addCourseLink}>
              <Link className={CoursesStyles.addCourseLinkText} to="/addCourse">
                ADD NEW COURSE
              </Link>

              <Link className={CoursesStyles.plusCourseLink} to="/addCourse">
                +
              </Link>
            </p>
          </div>
        </section>
      </div>
    </ProtectedWrapper>
  );
};
