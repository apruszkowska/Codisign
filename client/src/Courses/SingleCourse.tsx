import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { Course as CourseType, getSingleCourse } from "../api/courses";
import CoursesStyles from "./Courses.module.css";
import { RoutingCourses } from "../routing/routingCourses";

import { useState } from "react";
import { ProtectedWrapper } from "../protectedWrapper/ProtectedWrapper";

export const SingleCourse = () => {
  const { id } = useParams();

  const {
    data: course,
    isLoading,
    error,
  } = useQuery(
    ["allCourses", id],
    async () => {
      if (id) {
        const response = await getSingleCourse(id);
        return response;
      }
    },
    {
      enabled: !!id,
    }
  );

  if (!course) {
    return <p>No course</p>;
  }

  return (
    <ProtectedWrapper>
      <div>
        <RoutingCourses />
        <div className={CoursesStyles.containerCourses}>
          <div className={CoursesStyles.containerSingleCourse}>
            <div className={CoursesStyles.containerCoursesBoxes}>
              <div className={CoursesStyles.courseBox} key={course.id}>
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
                <div className={CoursesStyles.courseWrap}>{course.endDate}</div>
                <div className={CoursesStyles.courseWrap}>
                  {course.startTime}
                </div>
                <div className={CoursesStyles.courseWrap}>{course.endTime}</div>
                <div className={CoursesStyles.courseWrap}>{course.trainer}</div>
                <div className={CoursesStyles.courseWrap}>
                  {course.language}
                </div>
                <div className={CoursesStyles.courseWrap}>{course.level}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedWrapper>
  );
};
