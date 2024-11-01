import React from "react";
import logo from "./logo.svg"; // Assuming you are using this logo somewhere
import "./App.css";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataContext, DataProvider } from "./Contexts/DataContext";
import { CategoryDetail } from "./Pages/CategoryDetail";
import { BlogPage } from "./Pages/BlogPage";
import { AllCategoryList } from "./Pages/AllCategoryList";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { NotFound } from "./Components/NotFound";

function App() {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <div style={{minHeight:"85vh"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-list" element={<AllCategoryList />} />
            <Route path="/:slug/:blogslug" element={<BlogPage />} />
            <Route path="/:slug" element={<CategoryDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
