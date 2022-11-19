import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import "./App.scss";
import Template from "./pages/Template";
import data from "./data";
const api = "https://berequirement.herokuapp.com/products";

function App() {
  const [ghosts, setGhosts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(api, {
        method: "GET",
        ContentType: "application/json",
      });
      const { data } = await res.json();
      setGhosts(data);
    })();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <NavBar></NavBar>
        </div>
        <div className="right">
          <Menu cart={cart} setCart={setCart} />
          <Routes>
            <Route
              path="/"
              element={
                <Template products={ghosts} cart={cart} setCart={setCart} />
              }
            />
            <Route
              path="/pumpkin"
              element={
                <Template
                  products={data.products}
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/bat"
              element={
                <Template products={data.bat} cart={cart} setCart={setCart} />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
