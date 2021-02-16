import logo from "./logo.svg";
import "./App.css";
import TestList from "./components/test-list";
import ImageUpload from "./components/ImageUpload/index";

function App() {
  return (
    <div>
      <h1>React + Firebase</h1>
      <TestList />
      <ImageUpload />
    </div>
  );
}

export default App;
