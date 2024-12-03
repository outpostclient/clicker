import React from "react";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./Contexts/DataContext";
import { CategoryDetail } from "./Pages/CategoryDetail";
import { BlogPage } from "./Pages/BlogPage";
import { AllCategoryList } from "./Pages/AllCategoryList";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { NotFound } from "./Components/NotFound";
import "bootstrap/dist/js/bootstrap.min.js";
import { HelmetProvider } from "react-helmet-async";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { TermsAndConditions } from "./Pages/TermsAndConditions";

function App() {
  return (
    <HelmetProvider>
      <DataProvider>
        <Router>
          <Navbar />
          <div style={{ minHeight: "85vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-list" element={<AllCategoryList />} />
              <Route path="/:slug/:blogslug" element={<BlogPage />} />
              <Route path="/:slug" element={<CategoryDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacyandpolicy" element={<PrivacyPolicy />} />
              <Route path="/termsandcondition" element={<TermsAndConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </DataProvider>
    </HelmetProvider>
  );
}

export default App;
