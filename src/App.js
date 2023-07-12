
import AddPage from "./components/AddPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage"
import Registration from './components/Registration';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/addPage" element={<AddPage />} />
        <Route path="/homePage/editPage/:id" element={<AddPage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="" element={<LoginPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
    </div>

  );
}

export default App;
