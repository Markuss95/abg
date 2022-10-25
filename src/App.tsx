import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
