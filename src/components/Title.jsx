import React from "react";
import style from "./Title.module.css";
function Title() {
  return (
    <div id={style.title}>
      <h1 className={style.mainTitle}>N A S A</h1>
      <h5 className={style.subtitle}>
        The National Aeronautics and Space Administration
      </h5>
    </div>
  );
}

export default Title;
