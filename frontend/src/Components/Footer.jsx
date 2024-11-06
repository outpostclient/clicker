import React from "react";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src="" alt="logo" className="img-fluid" style={{width:"150px"}} />
            <p className="small mt-4">Copyright © 2009 - 2024 Gamifyzone Ltd. All Rights Reserved.</p>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12 small">
                <a href="#">Blog</a>
                <a href="#">Deals</a>
                <a href="#">About Us</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Sitemap</a>
                <a href="#">Partner With Us</a>
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
                <a href="#" className="social">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="col-12 mt-3">
                <p className="small">
                  © 2009-2024 Gamifyzone Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
