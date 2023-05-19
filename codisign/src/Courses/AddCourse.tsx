import { RoutingAddingLinks } from "../routing/routingAddingCourses";
import CoursesStyles from "./Courses.module.css";

export const AddCourse = () => {
  return (
    <div>
      <RoutingAddingLinks />
      <section className={CoursesStyles.containerCourses}>
        <div></div>
      </section>
    </div>
  );
};
