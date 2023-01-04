import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Counter from "./components/counter";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <header className="container-fluid">
        <nav className="container">
          <Link to="/" className="me-2">
            Home
          </Link>
          <Link to="/counter" className="me-2">
            Counter
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/counter" element={<Counter />}>
          Counter
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
