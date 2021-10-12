import React from "react";
import style from "./ConfirmationError.module.css";
function ConfirmationError({ clear }) {
  return (
    <div id={style.confirmationError} onClick={clear}>
      <h4>
        "Passwords do not match... <br /> Please confirm the same password to
        proceed!"
      </h4>
    </div>
  );
}

export default ConfirmationError;
