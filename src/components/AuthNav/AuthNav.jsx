import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const getLinkClass = ({ isActive }) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
  };
  return (
    <div className={css.nav}>
      <NavLink to="/register" className={getLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getLinkClass}>
        Login
      </NavLink>
    </div>
  );
}
