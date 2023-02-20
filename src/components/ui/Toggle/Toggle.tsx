import { HTMLAttributes } from "react";
import css from "./style.module.css";
interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
  optionalCss?: string;
}
export function Toggle({ optionalCss }: ToggleProps) {
  return (
    <div className={css.toggleContainer}>
      <input className={css.toggle} type="checkbox" />
    </div>
  );
}
