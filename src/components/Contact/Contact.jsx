import css from "./Contact.module.css";
import { HiPhone, HiUser } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactName}>
          <HiUser />
          {contact.name}
        </p>
        <p className={css.contactNumber}>
          <HiPhone />
          {contact.number}
        </p>
      </div>
      <Button onClick={handleDelete} variant="danger" icon={FaTrash} />
    </div>
  );
}
