import { Route, Routes } from "react-router";
import "./App.css";
import BasePage from "./layout/BasePage";
import LearnItemPage from "./layout/LearnItemPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/learner/" element={<BasePage />} />
        <Route path="/learner/:id" element={<LearnItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
