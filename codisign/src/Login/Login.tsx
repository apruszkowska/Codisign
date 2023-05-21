import { useFormik, FormikProps } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { RoutingLinks } from "../routing/routingLinks";
import AddNewCourseStyles from "../Courses/AddCourse.module.css";
import Axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

const yupSchema = yup.object({
  login: yup.string().required("Login is required"),
  password: yup.string().min(8).max(32).required("Password is required"),
});

type FormValues = yup.InferType<typeof yupSchema>;

const FormInput = ({
  formik,
  accessor,
}: {
  formik: FormikProps<FormValues>;
  accessor: keyof FormValues;
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

export const Login = () => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");

  const formik = useFormik<FormValues>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values: FormValues) => {
      Axios.post("http://localhost:5175/login", {
        login: values.login,
        password: values.password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
        }
        console.log(response.data);
      });
      alert("You are logged in!");
      navigate("/allCourses");
      console.log(values.login, values.password);
    },
  });

  return (
    <div>
      <RoutingLinks />
      <div className="containerLoginForm containerForm">
        <form className="loginForm form" onSubmit={formik.handleSubmit}>
          <label className="loginLabel labelForm" htmlFor="form">
            Login
          </label>
          <div className="loginFormInput formInput">
            <FormInput formik={formik} accessor="login" />
            <FormInput formik={formik} accessor="password" />
          </div>
          <button className="loginButton buttonForm" type="submit">
            Login
          </button>
          <div>{loginStatus}</div>
        </form>
      </div>
    </div>
  );
};
