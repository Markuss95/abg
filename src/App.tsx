import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="" element={<LandingPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
