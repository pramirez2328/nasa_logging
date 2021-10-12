import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";
import Form from "./components/Form";
import Specification from "./components/Specification";
import SignUp from "./components/SignUp";
import NewAccount from "./components/NewAccount";
import CancelNewAccount from "./components/CancelNewAccount";
import ConfirmationError from "./components/ConfirmationError";

function App() {
  const [newSignUp, setNewSignUp] = useState(false);
  const prevUsers = JSON.parse(localStorage.getItem("users"));
  const [newUsers, setNewUsers] = useState([...prevUsers] || []);
  const [permisionGranted, setpermisionGranted] = useState(false);
  const [confirmError, setConfirmError] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    const username = e.target.username;
    const password = e.target.password;
    const usernameValidation = newUsers.some(
      (i) => i.username === username.value
    );
    const passwordValidation = newUsers.some(
      (i) => i.password === password.value
    );

    username.value = "";
    password.value = "";

    if (usernameValidation && passwordValidation) {
      setpermisionGranted(true);
    }
  };

  const handleSignUp = () => {
    setNewSignUp(true);
  };

  const handleEmptyInputs = (
    name,
    email,
    username,
    newPassword,
    confirmPassword
  ) => {
    let allInputs = 0;

    let nameTag = document.querySelector(".invalidName");
    if (name.value === "") {
      nameTag.textContent = "  - Enter your name!";
    } else {
      allInputs++;
      nameTag.textContent = "";
    }

    let emailTag = document.querySelector(".invalidEmail");
    if (email.value === "") {
      emailTag.textContent = "  - Enter your email!";
    } else {
      allInputs++;
      emailTag.textContent = "";
    }

    let usernameTag = document.querySelector(".invalidUsername");
    if (username.value === "") {
      usernameTag.textContent = "  - Enter your username!";
    } else {
      allInputs++;
      usernameTag.textContent = "";
    }

    let passwordTag = document.querySelector(".invalidPassword");
    if (newPassword.value === "") {
      passwordTag.textContent = "  - Enter a password!";
    } else {
      allInputs++;
      passwordTag.textContent = "";
    }

    let confirmTag = document.querySelector(".invalidConfirmPassword");
    if (confirmPassword.value === "") {
      confirmTag.textContent = "  - confirm your password!";
    } else {
      allInputs++;
      confirmTag.textContent = "";
    }

    return allInputs;
  };

  const handleNewUser = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let email = e.target.email;
    let username = e.target.newUsername;
    let newPassword = e.target.newPassword;
    let confirmPassword = e.target.confirmPassword;
    let newUser = {};

    const allInputs = handleEmptyInputs(
      name,
      email,
      username,
      newPassword,
      confirmPassword
    );

    if (allInputs === 5) {
      if (newPassword.value === confirmPassword.value) {
        newUser = {
          name: name.value,
          email: email.value,
          username: username.value,
          password: confirmPassword.value,
        };

        name.value = "";
        email.value = "";
        username.value = "";
        newPassword.value = "";
        confirmPassword.value = "";

        setNewUsers((prev) => {
          return [...prev, newUser];
        });

        setNewSignUp(false);
      } else {
        setConfirmError(true);
        console.log(confirmError);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(newUsers));
  }, [newUsers]);

  const handleCancelSubcription = () => {
    setNewSignUp(false);
  };

  const permision = <h1 id="permision">...PERMISION GRANTED!</h1>;
  let styleError = confirmError ? { opacity: "0.2", zIndex: "1" } : {};

  const handleReturn = () => {
    setConfirmError(false);
  };

  console.log(confirmError);

  if (newSignUp) {
    return (
      <div className="App" style={styleError}>
        <Card>
          <Title />
          <hr />
          <NewAccount onSubmit={handleNewUser} />
          <CancelNewAccount onClick={handleCancelSubcription} />
        </Card>

        {confirmError
          ? reactDom.createPortal(
              <ConfirmationError clear={handleReturn} />,
              document.getElementById("confirm_root")
            )
          : null}
      </div>
    );
  } else {
    return (
      <div className="App">
        {!permisionGranted ? (
          <Card>
            <Title />
            <hr />
            <Form onSubmit={handleLogIn} />
            <SignUp onClick={handleSignUp} />
            <Specification />
          </Card>
        ) : (
          <Card>{permision}</Card>
        )}
      </div>
    );
  }
}

export default App;
