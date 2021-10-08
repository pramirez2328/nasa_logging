import React from "react";
import style from "./Form.module.css";
function Form({ onSubmit }) {
  return (
    <form id={style.form} onSubmit={onSubmit}>
      <div className={style.inputs}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={style.inputs}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit" id={style.button}>
        SUBMIT
      </button>
    </form>
  );
}

export default Form;
