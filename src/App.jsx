import "./App.css";
import Layout from "./components/Layout";

import { useLandingContext } from "./components/providers/useLandingContext";
import {
  ProjectCardsDetails,
  ProjectsCardsCover,
} from "./components/ui/ProjectCardDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SendEmil from "./components/sendEmail/SendEmil";
import Navbar from "./components/ui/Navbar";
import Project from "./components/Project/Project";

function App() {
  return (
    <main className="bg-light">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* send-email */}
          <Route path="/" element={<Layout />} />
          <Route path="/Contact" element={<SendEmil />} />
          <Route path="/Project" element={<Project />} />
          <Route path="*" element={<p> page no found</p>} />
        </Routes>
      </BrowserRouter>

      {/*  */}
    </main>
  );
}

export default App;
