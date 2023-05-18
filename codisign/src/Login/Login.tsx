import { useFormik, FormikProps } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";

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
  const formik = useFormik<FormValues>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values: FormValues) => {
      console.log(values.login, values.password);
    },
  });

  return (
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
      </form>
    </div>
  );
};
