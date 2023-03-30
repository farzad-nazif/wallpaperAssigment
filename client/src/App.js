import GetCustomerDetails from "./components/GetCustomerDetails";
import LandingPage from "./components/LandingPage";
import WallpaperSimulation from "./components/WallpaperSimulation";
import Checkout from "./components/Checkout";
import Results from "./components/Results";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/getcustomerdetails" element={<GetCustomerDetails />} />
      <Route path="/wallpapersimulation" element={<WallpaperSimulation />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/results" element={<Results />} />
     </Routes>
  );
}

export default App;
