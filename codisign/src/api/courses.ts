import * as yup from "yup";

export const courseSchema = yup.object({
  name: yup.string().required("Please name your course"),
  startDate: yup.string().required("Please choose start date of your course"),
  endDate: yup.string().required("Please choose end date of your course"),
  startTime: yup.string().required("Please choose start time of your course"),
  endTime: yup.string().required("Please choose end time of your course"),
  language: yup.string().required("Please choose a language of your course"),
  location: yup.string().required("Please choose a location of your course"),
  trainer: yup
    .string()
    .min(8)
    .max(32)
    .required("Please write the trainer's name"),
  level: yup.string().required("Please choose level of your course"),
  uploadAnImage: yup.string().required("Please upload image of your course"),
});

export type Course = yup.InferType<typeof courseSchema>;
export type CourseWithId = Course & { id: number };

export const getAllCourses = async () => {
  const response = await fetch(`http://localhost:3000/allCourses`);
  if (!response.ok) {
    return [] as CourseWithId[];
  }
  const data = await response.json();
  return data as CourseWithId[];
};

export const getSingleCourse = async (id: string) => {
  const response = await fetch(`http://localhost:3000/allCourses/${id}`);
  if (!response.ok) {
    return {} as CourseWithId;
  }
  const data = await response.json();
  return data as CourseWithId;
};

export const addCourse = async (newCourse: Course) => {
  const response = await fetch(`http://localhost:3000/allCourses`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(newCourse),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data as Course;
};
