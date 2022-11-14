import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import { useState } from "react";
import Notification from "./components/Notification/Notification";
import NavBar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import "./App.scss";
import Pumpkin from "./pages/Pumpkin/Pumpkin";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Notification cart={cart} />
      <div className="container">
        <div className="left">
          <NavBar></NavBar>
        </div>
        <div className="right">
          <Menu cart={cart} setCart={setCart} />
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/pumpkin" element={<Pumpkin setCart={setCart} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
