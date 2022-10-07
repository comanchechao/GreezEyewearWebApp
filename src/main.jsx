import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import Admin from "./views/Admin";
import Blogs from "./components/blogs";
import FaceShape from "./views/faceShape";
import Blog from "./views/blog";
import FrameShape from "./views/frameShape";
import NewBlog from "./views/newBlog";
import ShoppingPage from "./views/shoppingPage";
import ProductDetail from "./views/productDetail";
import CreateBlog from "./views/CreateBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#ffbd00",
      // ...
      900: "#ffbd00",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/productDetail" element={<ProductDetail />}></Route>
        <Route path="/ShoppingPage" element={<ShoppingPage />}></Route>
        <Route path="/faceShape" element={<FaceShape />}></Route>
        <Route path="/frameShape" element={<FrameShape />}></Route>
        <Route path="/create" element={<CreateBlog />}></Route>
        <Route path="/newBlog" element={<NewBlog />}></Route>
        <Route path="/blogs/:id" element={<Blog />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
