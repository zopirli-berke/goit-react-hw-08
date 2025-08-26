import css from "./Button.module.css";
import clsx from "clsx";

export default function Button({
  selected = false,
  type = "button",
  variant = "primary",
  icon: IconComponent = null,
  children,
  ...otherProps
}) {
  return (
    <button
      className={clsx(css.btn, css[variant], !children && css.iconOnly)}
      type={type}
      {...otherProps}
    >
      {IconComponent && <IconComponent size={16} />}
      {children}
    </button>
  );
}
