import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Admin from "./views/Admin";
import Blogs from "./components/blogs";
import FaceShape from "./components/faceShape";
import Blog from "./views/blog";
import FrameShape from "./components/frameShape";
import NewBlog from "./views/newBlog";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/faceShape" element={<FaceShape />}></Route>
      <Route path="/frameShape" element={<FrameShape />}></Route>
      <Route path="/newblog" element={<NewBlog />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>
);
