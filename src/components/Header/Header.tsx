import { Toggle } from "../ui/Toggle/Toggle";
import css from "./style.module.css";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export function Header() {
  return (
    <>
      <div className={css.themeContainer}>
        <Toggle />
      </div>
    </>
  );
}
