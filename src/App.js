import './App.css';
import logo from "./images/logo.jpg";
import AddPage from "./components/AddPage";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <div className="App">
      <div class="image">
        <img src={logo} width="100px" alt="Employee Payroll" />

      </div>
      <div class="name">
        <span>Address Book</span>
      </div>
      </div>
      <Routes>
        <Route path="/addPage" element={<AddPage />} />
        <Route path="/homePage/editPage/:id" element={<AddPage />} />
        <Route path="/homePage" element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;
