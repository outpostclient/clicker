import React from "react";

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <img src="https://images.top10.com/q_auto/v1/production/sites/uploads/photo/logo.20191212140001.svg" alt="Top10.com Logo" className="img-fluid" style={{width:"150px"}} />
            <p className="small mt-4">Copyright © 2009 - 2024 Natural Intelligence Ltd. All Rights Reserved.</p>
            <p className="small fw-bold">Mailing address:</p>
            <p className="small">4023 Kennett Pike #50055</p>
            <p className="small">Wilmington, DE 19807</p>
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
                  Designed to help users make confident decisions online, this
                  website contains information about a wide range of products
                  and services. Certain details, including but not limited to
                  prices and special offers, are provided to us directly from
                  our partners and are dynamic and subject to change at any time
                  without prior notice. Though based on meticulous research, the
                  information we share does not constitute legal or professional
                  advice or forecast, and should not be treated as such.
                </p>
                <p className="small">Reproduction in whole or in part is strictly prohibited.</p>
                <p className="small">As an Amazon Associate we earn from qualifying purchases.</p>
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
                  © 2009-2024 Natural Intelligence Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
