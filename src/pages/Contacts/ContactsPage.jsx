import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";

import ContactsForm from "../../components/ContactsForm/ContactsForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Loader from "../../components/Loader/Loader";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contacts}>
      <h1 className={css.title}>Your Contacts</h1>
      <ContactsForm />
      <SearchBox />

      {isLoading && !error && <Loader />}

      {error && <p>Oops, something went wrong... Please try again.</p>}

      <ContactList />
    </div>
  );
}
