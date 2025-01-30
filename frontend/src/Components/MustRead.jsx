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
                <img loading="lazy" width={640} height={427} src={item.image} alt={item.slug} />
              ) : (
                <img loading="lazy" width={640} height={427} src={item.image_url} alt={item.title} />
              ) }
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
