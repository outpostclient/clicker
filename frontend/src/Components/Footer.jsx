import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
export const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    // Only fetch navbar data once, do not depend on `slug`
    const fetchFooterData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/sitepage/footer/`
        );
        setFooterData(response.data);
      } catch (error) {
        console.error("Error fetching navbar data", error);
      }
    };

    fetchFooterData();
  }, []); // Empty dependency array to ensure this runs once

  if (!footerData) return <div>Loading Footer...</div>;

  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer mt-auto py-5 bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <img
              src={footerData?.image}
              alt="logo"
              className="img-fluid"
              style={{ width: "50px" }}
            />
            <p className="small mt-4">
              Copyright © {getYear()} {footerData?.title} Ltd. All Rights
              Reserved.
            </p>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12 small">
                <Link to="about">About Us</Link>
                <Link to="contact">Contact Us</Link>
                <Link to="/privacyandpolicy">Cookie Policy</Link>
                <Link to="/termsandcondition">Terms of Use</Link>
              </div>
              <div className="col-12 mt-3 text-start">
                <p
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(footerData?.description),
                  }}
                />
              </div>
              {/* <div className="col-12 mt-1">
                <Link to="#" className="social">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-instagram" />
                </Link>
              </div> */}
              <div className="col-12 mt-3">
                <p className="small">
                  © {getYear()} {footerData?.title} Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
