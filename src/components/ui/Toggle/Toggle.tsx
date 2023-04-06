import { HTMLAttributes } from "react";
import css from "./style.module.css";
import { useAtomValue, useSetAtom } from "jotai";
import { themeAtom } from "../../../atoms /theme";

interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
  optionalCss?: string;
}
export function Toggle({ optionalCss }: ToggleProps) {
  const light = useAtomValue(themeAtom);
  const setLight = useSetAtom(themeAtom);

  return (
    <div className={css.toggleContainer}>
      <input
        onClick={() => setLight(!light)}
        className={css.toggle}
        type="checkbox"
      />
    </div>
  );
}
