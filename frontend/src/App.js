import React from "react";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Flex>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Flex>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
