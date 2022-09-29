import React from "react";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";
import AboutScreen from "./Screen/AboutScreen";
import ProjectScreen from "./Screen/ProjectScreen";
import ResumeScreen from "./Screen/ResumeScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Flex>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/projects" element={<ProjectScreen />} />
            <Route path="/resume" element={<ResumeScreen />} />
          </Routes>
        </Flex>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
