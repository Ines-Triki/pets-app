import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "../src/components/add.jsx";
import Pets from "../src/components/home.jsx";
import './App.css'
import Update from "../src/components/update.jsx";
function App() {
  return (
    <div id="background">
    <div className="app" >
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Pets/>} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
         
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
