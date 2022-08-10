import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.tsx";
import Header from "./components/Header.tsx";
import "./sass/main.css";

function App() {
  return (
    <>
      <Header />
      <div id="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
