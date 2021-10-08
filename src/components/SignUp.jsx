import React from "react";
import style from "./SignUp.module.css";
function SignUp({ onClick }) {
  return (
    <h4 id={style.signUp}>
      Don't have an account yet, <span onClick={onClick}>Sign up</span>
    </h4>
  );
}

export default SignUp;
