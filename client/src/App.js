import About from "./Pages/About";
import Products from "./Pages/Products";
import GetCustomerDetails from "./Pages/GetCustomerDetails";
import LandingPage from "./Pages/LandingPage";
import WallpaperSimulation from "./Pages/WallpaperSimulation";
import Checkout from "./Pages/Checkout";
import Results from "./Pages/Results";
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
      <Route path="/getcustomerdetails" element={<GetCustomerDetails />} />
      <Route path="/wallpapersimulation" element={<WallpaperSimulation />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/results" element={<Results />} />
     </Routes>
  );
}

export default App;
