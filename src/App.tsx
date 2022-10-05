import "./App.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
    </Routes>
  );
};

const Wrapper = styled.div``;

export default App;
