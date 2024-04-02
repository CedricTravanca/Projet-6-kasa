import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import "./Scss/App.scss";
import Logements from "./Pages/Logements";

function App() {
  return  (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
   </div>
  )
}

export default App;
