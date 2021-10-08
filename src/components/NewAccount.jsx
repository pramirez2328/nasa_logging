import React from "react";
import style from "./NewAccount.module.css";
function NewAccount() {
  return (
    <div id={style.newAccount}>
      <form id={style.form}>
        <div className={style.inputs}>
          <label htmlFor="newUsername">Enter your username</label>
          <input type="text" id="newUsername" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="newPassword">Enter your password</label>
          <input type="password" id="newPassword" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input type="password" id="newPassword" />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default NewAccount;
