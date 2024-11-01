import React from "react";

export const SingleBlog = ({ item }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="p-3 position-relative">
          <div className="row align-items-center">
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
              <div className="row">
                <div>
                  <img
                    style={{ width: "100%" }}
                    src=""
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              <div className="row">
                <div></div>
                <div>
                  <p className="mb-0 small fw-bold">Lorem ipsum dolor</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis officia illo perferendis quos excepturi error nisi rem quam minus, non voluptates commodi. Nihil exercitationem ipsum quo sunt, voluptatem beatae aliquam?</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
              <div className="row">
                <div>
                  <a
                    href=""
                    className="btn btn-danger btn-block w-100"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
