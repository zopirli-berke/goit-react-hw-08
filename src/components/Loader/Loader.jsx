import { GridLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <GridLoader color="#5f85ecff" size={15} />
    </div>
  );
}
