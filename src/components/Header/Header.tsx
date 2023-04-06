import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Toggle } from "../ui/Toggle/Toggle";
import css from "./style.module.css";
import { themeAtom } from "../../atoms /theme";

export function Header() {
  const light = useAtomValue(themeAtom);
  const setLight = useSetAtom(themeAtom);
  console.log(light);

  return (
    <>
      <div className={css.themeContainer}>
        <Toggle />
      </div>
    </>
  );
}
