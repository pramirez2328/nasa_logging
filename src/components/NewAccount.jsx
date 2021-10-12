import React from "react";
import style from "./NewAccount.module.css";
function NewAccount({
  onSubmit,
  nameRef,
  emailRef,
  usernameRef,
  newPasswordRef,
  confirmPasswordRef,
}) {
  const invalid = { fontSize: "0.5em", color: "red" };

  return (
    <div id={style.newAccount}>
      <form id={style.form} onSubmit={onSubmit}>
        <div className={style.inputs}>
          <label htmlFor="name">
            Full name
            <span className="invalidName" style={invalid} ref={nameRef}></span>
          </label>
          <input type="text" id="name" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="email">
            Email{" "}
            <span
              className="invalidEmail"
              style={invalid}
              ref={emailRef}
            ></span>
          </label>
          <input type="email" id="email" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="newUsername">
            New username
            <span
              className="invalidUsername"
              style={invalid}
              ref={usernameRef}
            ></span>
          </label>
          <input type="text" id="newUsername" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="newPassword">
            New password
            <span
              className="invalidPassword"
              style={invalid}
              ref={newPasswordRef}
            ></span>
          </label>
          <input type="text" id="newPassword" />
        </div>
        <div className={style.inputs}>
          <label htmlFor="confirmPassword">
            Confirm your password
            <span
              className="invalidConfirmPassword"
              style={invalid}
              ref={confirmPasswordRef}
            ></span>
          </label>
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
