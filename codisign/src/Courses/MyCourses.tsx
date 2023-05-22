import CoursesStyles from "./Courses.module.css";
import { RoutingMyCourses } from "../routing/routingMyCourses";
import { Link } from "react-router-dom";
import { ProtectedWrapper } from "../protectedWrapper/ProtectedWrapper";
import { useCart } from "react-use-cart";

export const MyCourses = () => {
  const { isEmpty, items, removeItem } = useCart();
  if (isEmpty)
    return (
      <div>
        <RoutingMyCourses />
        <section className={CoursesStyles.containerCourses}>
          <div>
            <h2 className={CoursesStyles.titleCourses}>YOUR COURSES</h2>
            <p>You have no courses!</p>
          </div>
        </section>
      </div>
    );

  return (
    // <ProtectedWrapper>
    <div>
      <RoutingMyCourses />
      <section className={CoursesStyles.containerCourses}>
        <div>
          <h2 className={CoursesStyles.titleCourses}>YOUR COURSES</h2>
        </div>

        <div className={CoursesStyles.containerCoursesBoxes}>
          {items.map((course) => {
            return (
              <div className={CoursesStyles.courseBox} key={course.id}>
                <div>
                  <div className={CoursesStyles.courseImg}>
                    <img
                      className={CoursesStyles.courseImage}
                      src={course.uploadAnImage}
                      alt=""
                      width="200"
                      height="200"
                    />
                  </div>
                  <div className={CoursesStyles.courseWrap}>{course.name}</div>
                  <div className={CoursesStyles.courseWrap}>
                    {course.startDate}
                  </div>
                  <div className={CoursesStyles.courseWrap}>
                    {course.endDate}
                  </div>
                  <div className={CoursesStyles.courseWrap}>
                    {course.startTime}
                  </div>
                  <div className={CoursesStyles.courseWrap}>
                    {course.endTime}
                  </div>
                  <div className={CoursesStyles.courseWrap}>
                    {course.trainer}
                  </div>
                  <div className={CoursesStyles.courseWrap}>
                    {course.language}
                  </div>
                  <div className={CoursesStyles.courseWrap}>{course.level}</div>
                </div>
                <button onClick={() => removeItem(course.id)}>Quit</button>
              </div>
            );
          })}
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
    //  </ProtectedWrapper>
  );
};
