import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import "./css/App.css";

function App() {
  return  (
    <div>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
   </div>
  )
}

export default App;
