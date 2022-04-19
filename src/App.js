import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login.js";
import Sidebar from "./Component/Sidebar.js";
// import MenuListComposition from "./Component/MenuListComposition.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
