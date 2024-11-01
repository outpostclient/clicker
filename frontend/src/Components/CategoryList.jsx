import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

export const CategoryList = ({ categories }) => {
  const { slug } = useParams();

  const memoizedCategories = useMemo(() => categories, [categories]);
  // console.log(categories);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {memoizedCategories.map((cat) => (
        <div className="col" key={cat.id}>
          <div className="card h-100 border-secondary">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0 text-capitalize">{cat.name}</h5>
              <i className={`fa fa-star text-danger`}/>
            </div>
            <div className="card-body">
              <p className="card-text">Discover the best...</p>
            </div>
            <div className="card-footer">
              <Link className="btn btn-primary btn-sm" to={`/${cat.slug}`}>
                Explore
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
