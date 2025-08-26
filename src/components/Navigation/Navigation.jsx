import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getLinkClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={getLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
