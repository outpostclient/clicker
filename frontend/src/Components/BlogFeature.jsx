import React from "react";
import DOMPurify from "dompurify";

export const BlogFeature = ({ item }) => {
  console.log(item);
  return (
    item?.length > 0 &&
    item.map((feature) => (
      <div key={feature.id} className="card mb-3">
        <div className="p-3 position-relative">
          <div className="row align-items-center">
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
              <div className="row">
                <div>
                  <img
                    style={{ width: "100%" }}
                    src={feature.image_url}
                    alt={feature.title}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              <div className="row">
                <div></div>
                <div>
                  <p className="mb-0 small fw-bold">{feature.title}</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(feature.description),
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
              <div className="row">
                <div>
                  <a
                    href={feature.action_url}
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
    ))
  );
};
