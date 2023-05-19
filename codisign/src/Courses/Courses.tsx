import CoursesStyles from "./Courses.module.css";

export const Courses = () => {
  return (
    <section className={CoursesStyles.containerCourses}>
      <div>
        <h2>ALL COURSES</h2>
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
    </section>
  );
};
