import './App.css';
import Home from "./pages/Home/Home";
import Mint from "./pages/Mint/Mint";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/mint" element={<Mint/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
