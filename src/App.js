import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Details from "./components/Details";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
