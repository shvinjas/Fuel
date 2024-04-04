import Home from "./pages/Home/Home";
import Filter from "./pages/Filter/Filter"
import Map from "./pages/Map/Map"
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Filter" element={<Filter/>}/>
        <Route path="/Map" element={<Map/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
