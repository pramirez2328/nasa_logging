import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";
import Form from "./components/Form";
import Specification from "./components/Specification";
import SignUp from "./components/SignUp";
import NewAccount from "./components/NewAccount";
function App() {
  const [newSignUp, setNewSignUp] = useState(false);

  if (newSignUp) {
    return (
      <div className="App">
        <Card>
          <NewAccount />
        </Card>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Card>
          <Title />
          <hr />
          <Form />
          <SignUp />
          <Specification />
        </Card>
      </div>
    );
  }
}

export default App;
