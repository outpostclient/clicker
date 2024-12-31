import React from "react";
import { Link } from "react-router-dom";

export const MustRead = ({ item }) => {
  return (
    <div key={item.id} className="row">
      <div className="col-12">
        <div className="row align-items-center">
          <div className="col-5 mb-2">
            <div>
              {item.image ? (
                <img loading="lazy" height={"80px"} src={item.image} alt={item.slug} />
              ) : item.image_url ? (
                <img loading="lazy" height={"80px"} src={item.image_url} alt={item.title} />
              ) : (
                <img
                loading="lazy"
                  height={"80px"}
                  src="https://via.placeholder.com/1920x1080.png/e0c1e6/000000?Text=1920x1080"
                  alt="Placeholder"
                />
              )}
            </div>
          </div>
          <div className="col-7 mb-2">
            <Link
              className="small ellipsis-two-lines"
              to={`/${item.categorySlug}/${item.slug}`}
            >
              {item.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
