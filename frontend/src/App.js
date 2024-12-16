import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./Contexts/DataContext";
import "bootstrap/dist/js/bootstrap.min.js";
import { HelmetProvider } from "react-helmet-async";

const Home = React.lazy(() => import("./Pages/Home"));
const AllCategoryList = React.lazy(() => import("./Pages/AllCategoryList"));
const BlogPage = React.lazy(() => import("./Pages/BlogPage"));
const CategoryDetail = React.lazy(() => import("./Pages/CategoryDetail"));
const About = React.lazy(() => import("./Pages/About"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const PrivacyPolicy = React.lazy(() => import("./Pages/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() =>
  import("./Pages/TermsAndConditions")
);
const NotFound = React.lazy(() => import("./Components/NotFound"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const Footer = React.lazy(() => import("./Components/Footer"));

function App() {
  return (
    <HelmetProvider>
      <DataProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>

          <div style={{ minHeight: "85vh" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/all-list"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <AllCategoryList />
                  </Suspense>
                }
              />
              <Route
                path="/:slug/:blogslug"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <BlogPage />
                  </Suspense>
                }
              />
              <Route
                path="/:slug"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <CategoryDetail />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="/privacyandpolicy"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <PrivacyPolicy />
                  </Suspense>
                }
              />
              <Route
                path="/termsandcondition"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <TermsAndConditions />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </Router>
      </DataProvider>
    </HelmetProvider>
  );
}

export default App;
