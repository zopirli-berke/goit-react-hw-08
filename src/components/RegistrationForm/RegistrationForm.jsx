import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { register } from "../../redux/auth/operations";
import { useId } from "react";
import css from "./RegistrationForm.module.css";
import { toast } from "react-hot-toast";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success("Registration successful!");
      actions.resetForm();
    } catch (error) {
      const errorMessage =
        error.message || "An error occurred. Please try again.";

      if (errorMessage.includes("Email in use")) {
        toast.error("This email is already registered.");
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Register</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegistrationSchema}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            className={css.field}
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
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
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </div>
  );
}
