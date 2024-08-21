import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import AddProductScreen from "./screens/AddProductScreen";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/add-product" element={<AddProductScreen />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
