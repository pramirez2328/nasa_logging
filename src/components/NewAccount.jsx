import React from "react";
import style from "./NewAccount.module.css";
function NewAccount({ onSubmit }) {
  return (
    <div id={style.newAccount}>
      <form id={style.form} onSubmit={onSubmit}>
        <div className={style.inputs}>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="newUsername">New username</label>
          <input type="text" id="newUsername" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="newPassword">New password</label>
          <input type="text" id="newPassword" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input type="text" id="confirmPassword" />
        </div>
        <button type="submit" id={style.button}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default NewAccount;
