import { Toggle } from "../ui/Toggle/Toggle";
import css from "./style.module.css";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

export function Header() {
  return (
    <>
      <div className={css.themeContainer}>
        <MdOutlineLightMode className={css.lightModeButton} />
        <Toggle />
        <MdOutlineNightlight className={css.darkModeButton} />
      </div>
    </>
  );
}
