import {Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import "./css/App.css";

function App() {
  return  (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
   </div>
  )
}

export default App;
