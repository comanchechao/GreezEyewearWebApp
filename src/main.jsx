import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Admin from "./Admin";
import Blogs from "./components/blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>
);
