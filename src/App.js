import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";
import Form from "./components/Form";
import Specification from "./components/Specification";
import SignUp from "./components/SignUp";
import NewAccount from "./components/NewAccount";
import CancelNewAccount from "./components/CancelNewAccount";
function App() {
  const [newSignUp, setNewSignUp] = useState(false);
  const prevUsers = JSON.parse(localStorage.getItem("users"));
  const [newUsers, setNewUsers] = useState([...prevUsers] || []);

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
  };

  const handleSignUp = () => {
    setNewSignUp(true);
  };

  const handleNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      username: e.target.newUsername.value,
      password: e.target.confirmPassword.value,
    };

    setNewUsers((prev) => {
      return [...prev, newUser];
    });

    setNewSignUp(false);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(newUsers));
  }, [newUsers]);

  const handleCancelSubcription = () => {
    setNewSignUp(false);
  };

  if (newSignUp) {
    return (
      <div className="App">
        <Card>
          <Title />
          <hr />
          <NewAccount onSubmit={handleNewUser} />
          <CancelNewAccount onClick={handleCancelSubcription} />
        </Card>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Card>
          <Title />
          <hr />
          <Form onSubmit={handleLogIn} />
          <SignUp onClick={handleSignUp} />
          <Specification />
        </Card>
      </div>
    );
  }
}

export default App;
