import React from "react";
import { Link } from "react-router-dom";

export const MustRead = ({ item }) => {
  // console.log("Must Read Item", item);
  return (
    <div key={item.id} className="row">
      <div className="col-12">
        <div className="row align-items-center">
          <div className="col-5 mb-2">
            <img height={"80px"} src={item.image} alt={`${item.title}`} />
          </div>
          <div className="col-7 mb-2">
            <Link className="small ellipsis-two-lines" to={`/${item.categorySlug}/${item.slug}`}>
              {item.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
