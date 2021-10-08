import "./App.css";
import Card from "./components/Card";
import Title from "./components/Title";
import Form from "./components/Form";
import Specification from "./components/Specification";
function App() {
  return (
    <div className="App">
      <Card>
        <Title />
        <hr />
        <Form />
        <Specification />
      </Card>
    </div>
  );
}

export default App;
