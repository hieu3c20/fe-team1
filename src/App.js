import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Body from "./pages/Body/index";
import Anotherpage from "./pages/Anotherpage/index";
import { useState } from "react";
import Notification from "./components/Notification/Notification";
import NavBar from "./components/Navbar/Navbar";
import Header from "./pages/Header";
import Menu from "./components/Menu/Menu";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Notification cart={cart} />
      <NavBar></NavBar>
      {/* <Header></Header> */}
      <Menu cart={cart} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/test" element={<Anotherpage />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </div>
  );
}

export default App;
