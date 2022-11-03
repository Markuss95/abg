import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="" element={<LandingPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
