import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to the <span className={css.accent}>Contact Book</span>
      </h1>
      <p className={css.text}>
        Your personal hub to manage contacts efficiently and securely. Never
        lose a number again.
      </p>
      <p className={css.cta}>
        Please{" "}
        <Link to="/register" className={css.link}>
          Register
        </Link>{" "}
        or{" "}
        <Link to="/login" className={css.link}>
          Login
        </Link>{" "}
        to get started!
      </p>
    </div>
  );
}
