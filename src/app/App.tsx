import css from "./style.module.css";
import { Header } from "../components/Header";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { clsx } from "clsx";
export function App() {
  const [light, setLight] = useState(false);

  const classList = clsx({
    [css.App]: true,
    [css.light]: light,
  });

  return (
    <div className={classList}>
      <Header />
      <MdOutlineLightMode  className={css.lightModeButton} />
      <MdOutlineNightlight className={css.darkModeButton} />
      <button onClick={() => setLight(!light)}>theme</button>
    </div>
  );
}
