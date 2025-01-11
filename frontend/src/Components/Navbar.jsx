import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import HeaderNavbarShimmer from "./HeaderNavbarShimmer";

const Navbar = () => {
  const [navbarData, setNavbarData] = useState(null);
  
  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/sitepage/header/`);
        setNavbarData(response.data);
      } catch (error) {
        console.error("Error fetching navbar data", error);
      }
    };

    fetchNavbarData();
  }, []);

  if (!navbarData) return;
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold text-danger" to="/">
          <img style={{width:"50px"}} width={50} height={50} alt="Unfilter Choice" src={navbarData?.image} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ flexGrow: "0" }}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/all-list">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
