import css from "./style.module.css";
import { Header } from "../components/Header";
import { useState } from "react";
import { clsx } from "clsx";
import { useAtom, useAtomValue } from "jotai";
import { themeAtom } from "../atoms /theme";
export function App() {
  const light = useAtomValue(themeAtom);

  console.log("tema", light);

  const classList = clsx({
    [css.App]: true,
    [css.light]: light,
  });

  return (
    <div className={classList}>
      <Header />
    </div>
  );
}
