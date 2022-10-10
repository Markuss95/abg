import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
