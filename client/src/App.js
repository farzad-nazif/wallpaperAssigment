import About from "./Pages/About";
import Products from "./Pages/Products";
import LandingPage from "./Pages/LandingPage";
import Checkout from "./Pages/Checkout";
import PurchaseForm from "./Pages/PurchaseForm";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/purchase" element={<PurchaseForm />} />
      <Route path="/checkout" element={<Checkout />} />
     </Routes>
  );
}

export default App;
