import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blog";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blogs />}>
          <Route path="" element={<BlogList />} />
          <Route path=":blog" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
