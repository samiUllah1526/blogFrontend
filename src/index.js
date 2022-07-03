import("dotenv").config();
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import Home from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";
import { Blogs } from "./pages/Blogs";
import { CreateBlog } from "./pages/CreateBlog";
import { SearchResult } from "./pages/SearchResult";
import { UpdateBlog } from "./pages/UpdateBlog";
import { Page404 } from "./pages/Page404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
          <Route path="/blogs/:id/edit" element={<UpdateBlog />} />
          <Route path="/blogs/create" element={<CreateBlog />} />
          <Route path="/search-result" element={<SearchResult />} />
          {/* UpdateBlog */}

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Context>
  </React.StrictMode>
);
