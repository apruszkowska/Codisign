import CoursesStyles from "./Courses.module.css";
import { RoutingCourses } from "../routing/routingCourses";
import { ProtectedWrapper } from "../protectedWrapper/ProtectedWrapper";
import { useQuery } from "@tanstack/react-query";
import { Course as CourseType, getAllCourses } from "../api/courses";
import { Link } from "react-router-dom";
import RoutingCoursesStyles from "../routing/RoutingCourses.module.css";
import { useCart } from "react-use-cart";

import { useState } from "react";

export const Courses = () => {
  const { addItem } = useCart();

  const [cart, setCart] = useState([]);

  const handleClick = (course) => {
    const itemWithPrice = { ...course, price: 0 };
    addItem(itemWithPrice);

    setCart([...cart, course]);
  };

  const { data, isLoading, error } = useQuery(["allCourses"], getAllCourses);
  if (error) {
    return <p>Cannot get courses</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    // <ProtectedWrapper>
    <div>
      {/* <RoutingCourses /> */}
      <header className={RoutingCoursesStyles.headerRoutingCourse}>
        <nav className={RoutingCoursesStyles.navRouting}>
          <ul className={RoutingCoursesStyles.ulRouting}>
            <li className={RoutingCoursesStyles.logoRoutingCourse}>
              <Link to="/myCourses">CODISIGN</Link>
            </li>
            <li className={RoutingCoursesStyles.elementRoutingCourse}>
              <Link to="/myCourses">YOUR COURSES ({cart.length})</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className={CoursesStyles.containerCourses}>
        <div>
          <h2 className={CoursesStyles.titleCourses}>ALL COURSES</h2>
        </div>

        <div className={CoursesStyles.containerCoursesBoxes}>
          {data?.map((course) => (
            <div key={course.id} className={CoursesStyles.courseBox}>
              <div>
                <div className={CoursesStyles.courseImg}>
                  <Link to={`/allCourses/${course.id}`}>
                    <div>
                      <img
                        className={CoursesStyles.courseImage}
                        src={course.uploadAnImage}
                      />
                    </div>
                  </Link>
                </div>
                <div></div>
                <div className={CoursesStyles.courseWrap}>{course.name}</div>
                <div className={CoursesStyles.courseWrap}>
                  {course.startDate}
                </div>
                <div className={CoursesStyles.courseWrap}>{course.endDate}</div>
                <div className={CoursesStyles.courseWrap}>
                  {course.startTime}
                </div>
                <div className={CoursesStyles.courseWrap}>{course.endTime}</div>
                <div className={CoursesStyles.courseWrap}>
                  {course.language}
                </div>
                <div className={CoursesStyles.courseWrap}>
                  {course.location}
                </div>
                <div className={CoursesStyles.courseWrap}>{course.trainer}</div>
                <div className={CoursesStyles.courseWrap}>{course.level}</div>
              </div>
              <div className="courseButton">
                <button
                  onClick={() => handleClick(course)}
                  className={CoursesStyles.courseButtonEnroll}
                  type="submit"
                >
                  ENROLL
                </button>
              </div>
            </div>
          ))}
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
    // </ProtectedWrapper>
  );
};
