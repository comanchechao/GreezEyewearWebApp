import React from "react";
import { Suspense, lazy } from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import Admin from "./views/Admin";
// import Blogs from "./components/blogs";
// import FaceShape from "./views/faceShape";
// import Blog from "./views/blog";
// import FrameShape from "./views/frameShape";
// import NewBlog from "./views/newBlog";
// import ShoppingPage from "./views/shoppingPage";
// import ProductDetail from "./views/productDetail";
// import CreateBlog from "./views/CreateBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import EditBlog from "./views/blogEdit";
// import LensSelect from "./views/lensSelect";
// import Checkout from "./views/checkoutPage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import i18next from "./i18n";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const Admin = lazy(() => import("./views/Admin"));
const FaceShape = lazy(() => import("./views/FaceShape"));
const FrameShape = lazy(() => import("./views/FrameShape"));
const NewBlog = lazy(() => import("./views/NewBlog"));
const ShoppingPage = lazy(() => import("./views/ShoppingPage"));
const ProductDetail = lazy(() => import("./views/ProductDetail"));
const EditBlog = lazy(() => import("./views/blogEdit"));
const CreateBlog = lazy(() => import("./views/CreateBlog"));

const LensSelect = lazy(() => import("./views/LensSelect"));
const Checkout = lazy(() => import("./views/checkoutPage"));
const Blog = lazy(() => import("./views/Blog"));
const Blogs = lazy(() => import("./components/Blogs"));

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Steps,
  },
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
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/lensSelect/:id" element={<LensSelect />}></Route>
          <Route path="/checkoutPage" element={<Checkout />}></Route>

          <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
          <Route path="/ShoppingPage" element={<ShoppingPage />}></Route>
          <Route path="/faceShape" element={<FaceShape />}></Route>
          <Route path="/frameShape" element={<FrameShape />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/newBlog" element={<NewBlog />}></Route>
          <Route path="/blogs/:id" element={<Blog />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/editBlog/:id" element={<EditBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </ChakraProvider>
);
