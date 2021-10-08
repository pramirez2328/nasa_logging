import React from "react";
import style from "./CancelNewAccount.module.css";
function CancelNewAccount({ onClick }) {
  return (
    <button id={style.cancel} onClick={onClick}>
      CANCEL
    </button>
  );
}

export default CancelNewAccount;
