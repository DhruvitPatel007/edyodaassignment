import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header"
import Instructor from "./components/Instructor"
import Modules from "./components/Modules"



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/instructor" element={<Instructor/>}/>
        <Route path="/modules" element={<Modules/>}/>
      </Routes>
    </Router>
  );
}

export default App;
