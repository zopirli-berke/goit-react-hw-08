import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { logIn } from "../../redux/auth/operations";
import { useId } from "react";
import css from "./LoginForm.module.css";
import { toast } from "react-hot-toast";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const initialValues = { email: "", password: "" };

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();

      toast.success("Login successful! Welcome back.");
      actions.resetForm();
    } catch (error) {
      toast.error("Login failed. Please check your email and password.");
    }
  };
  return (
    <div className={css.container}>
      <h2 className={css.title}>Login</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            className={css.field}
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />

          <label className={css.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            className={css.field}
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />

          <Button type="submit">Login</Button>
        </Form>
      </Formik>
    </div>
  );
}
