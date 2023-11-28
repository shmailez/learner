import { Route, Routes } from "react-router";
import "./App.css";
import BasePage from "./layout/BasePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BasePage />} />
      </Routes>
    </div>
  );
}

export default App;
