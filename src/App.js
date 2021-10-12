import React, { useState, useEffect, useRef } from "react";
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
  const [newUsers, setNewUsers] = useState(prevUsers || []);
  const [permisionGranted, setpermisionGranted] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

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
    } else {
      alert("Username or password are incorrect! \n please try again");
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

    if (name.value === "") {
      nameRef.current.innerText = "  - Enter your name!";
    } else {
      allInputs++;
      nameRef.current.innerText = "";
    }

    if (email.value === "") {
      emailRef.current.innerText = "  - Enter your email!";
    } else {
      allInputs++;
      emailRef.current.innerText = "";
    }

    if (username.value === "") {
      usernameRef.current.innerText = "  - Enter your username!";
    } else {
      allInputs++;
      usernameRef.current.innerText = "";
    }

    if (newPassword.value === "") {
      newPasswordRef.current.innerText = "  - Enter a password!";
    } else {
      allInputs++;
      newPasswordRef.current.innerText = "";
    }

    if (confirmPassword.value === "") {
      confirmPasswordRef.current.innerText = "  - confirm your password!";
    } else {
      allInputs++;
      confirmPasswordRef.current.innerText = "";
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

  if (newSignUp) {
    return (
      <div className="App" style={styleError}>
        <Card>
          <Title />
          <hr />
          <NewAccount
            onSubmit={handleNewUser}
            nameRef={nameRef}
            emailRef={emailRef}
            usernameRef={usernameRef}
            newPasswordRef={newPasswordRef}
            confirmPasswordRef={confirmPasswordRef}
          />
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
