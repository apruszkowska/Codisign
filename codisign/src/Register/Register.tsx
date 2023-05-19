import { HTMLInputTypeAttribute } from "react";
import * as yup from "yup";
import { useFormik, FormikProps } from "formik";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RoutingLinks } from "../routing/routingLinks";

const yupSchema = yup.object({
  name: yup.string().required("Name jest wymagane"),
  surname: yup.string().required("Surname jest wymagane"),
  email: yup.string().email().required("Email jest wymagane"),
  login: yup.string().required("Login jest wymagane"),
  password: yup.string().min(8).max(32).required("Password jest wymagane"),
  retypePassword: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

type FormValues = yup.InferType<typeof yupSchema>;

const FormInput = ({
  formik,
  accessor,
  type = "text",
}: {
  formik: FormikProps<FormValues>;
  accessor: keyof FormValues;
  type?: HTMLInputTypeAttribute;
}) => {
  return (
    <div>
      <TextField
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

export const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      login: "",
      password: "",
      retypePassword: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values: FormValues) => {
      console.log({ login: values.login, password: values.password });
      alert("thanks for register");
      navigate("/login");
    },
  });
  return (
    <div>
      <RoutingLinks />
      <div className="containerRegisterForm containerForm">
        <form className="registerForm form" onSubmit={formik.handleSubmit}>
          <label className="registerLabel labelForm" htmlFor="form">
            Register
          </label>
          <div className="registerFormInput formInput">
            <FormInput formik={formik} accessor="name" />
            <FormInput formik={formik} accessor="surname" />
            <FormInput formik={formik} accessor="email" />
            <FormInput formik={formik} accessor="login" />
            <FormInput formik={formik} accessor="password" type="password" />
            <FormInput
              formik={formik}
              accessor="retypePassword"
              type="password"
            />
          </div>
          <button className="registerButton buttonForm" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
