import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {

  const getYear = () => {
    return new Date().getFullYear();
  }
  return (
    <footer className="footer mt-auto py-5 bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src="" alt="logo" className="img-fluid" style={{width:"150px"}} />
            <p className="small mt-4">Copyright © {getYear()} Gamifyzone Ltd. All Rights Reserved.</p>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12 small">
                <Link to="#">Blog</Link>
                <Link to="about">About Us</Link>
                <Link to="/privacyandpolicy">Cookie Policy</Link>
                <Link to="/termsandcondition">Terms of Use</Link>
                <Link to="/privacyandpolicy">Privacy Policy</Link>
              </div>
              <div className="col-12 mt-3 text-start">
                <p className="small">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora earum maiores, nihil voluptatibus nemo quos nesciunt sequi ut! Assumenda unde voluptatem animi natus? Minus ad quo amet quod et id!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis possimus eum temporibus iusto error? Nihil dolore sunt eos est optio nisi odit corrupti, architecto, adipisci quaerat sit commodi iste. Sapiente!
                </p>
                <p className="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                <p className="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
              </div>
              <div className="col-12 mt-1">
                <Link to="#" className="social">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#" className="social">
                  <i className="fab fa-instagram" />
                </Link>
              </div>
              <div className="col-12 mt-3">
                <p className="small">
                  © {getYear()} Gamifyzone Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
