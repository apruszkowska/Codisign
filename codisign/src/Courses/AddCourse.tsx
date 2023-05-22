import { RoutingAddingLinks } from "../routing/routingAddingCourses";
import CoursesStyles from "./Courses.module.css";
import AddNewCourseStyles from "./AddCourse.module.css";
import { useFormik, FormikProps } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { ProtectedWrapper } from "../protectedWrapper/ProtectedWrapper";

const yupSchema = yup.object({
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

type FormValuesAddCourse = yup.InferType<typeof yupSchema>;

const FormInputAddCourse = ({
  formik,
  accessor,
}: {
  formik: FormikProps<FormValuesAddCourse>;
  accessor: keyof FormValuesAddCourse;
}) => {
  return (
    <div>
      <TextField
        className={AddNewCourseStyles.inputAddCourse}
        error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
        helperText={
          formik.touched[accessor] && formik.errors[accessor]
            ? formik.errors[accessor]
            : null
        }
        id={accessor}
        type={accessor}
        label={accessor}
        name={accessor}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[accessor]}
      />
    </div>
  );
};

export const AddCourse = () => {
  const formikAddCourse = useFormik<FormValuesAddCourse>({
    initialValues: {
      name: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      language: "",
      location: "",
      trainer: "",
      level: "",
      uploadAnImage: "",
    },
    onSubmit: (values: FormValuesAddCourse) => {
      //   addCourse(values).then((data) => {
      //     console.log("success", data);
      //   });
      console.log("success", values);
    },
    validationSchema: yupSchema,
  });
  return (
    <ProtectedWrapper>
      <div>
        <RoutingAddingLinks />
        <section className={CoursesStyles.containerCourses}>
          <h2 className={AddNewCourseStyles.titleAddCourse}>
            Add your course!
          </h2>
          <div className={AddNewCourseStyles.containerAddCourse}>
            <form
              className={AddNewCourseStyles.formAddCourse}
              onSubmit={formikAddCourse.handleSubmit}
            >
              <FormInputAddCourse formik={formikAddCourse} accessor="name" />
              <FormInputAddCourse
                formik={formikAddCourse}
                accessor="startDate"
              />
              <FormInputAddCourse formik={formikAddCourse} accessor="endDate" />
              <FormInputAddCourse
                formik={formikAddCourse}
                accessor="startTime"
              />
              <FormInputAddCourse formik={formikAddCourse} accessor="endTime" />
              <FormInputAddCourse
                formik={formikAddCourse}
                accessor="language"
              />
              <FormInputAddCourse
                formik={formikAddCourse}
                accessor="location"
              />
              <FormInputAddCourse formik={formikAddCourse} accessor="trainer" />
              <FormInputAddCourse formik={formikAddCourse} accessor="level" />
              <FormInputAddCourse
                formik={formikAddCourse}
                accessor="uploadAnImage"
              />
              <button
                className={AddNewCourseStyles.buttonAddCourse}
                type="submit"
              >
                Add course
              </button>
            </form>
          </div>
        </section>
      </div>
    </ProtectedWrapper>
  );
};
