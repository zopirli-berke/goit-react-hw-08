import css from "./ContactsForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import Button from "../Button/Button";

const phoneRegExp = /^[0-9-]+$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

export default function ContactsForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { name: values.name, number: values.number };

    dispatch(addContact(newContact));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field type="text" name="name" className={css.field} id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.formLabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          className={css.field}
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
}
