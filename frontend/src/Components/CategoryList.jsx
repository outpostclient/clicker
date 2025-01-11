import DOMPurify from "dompurify";
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";

export const CategoryList = ({ categories }) => {
  const { slug } = useParams();

  const memoizedCategories = useMemo(() => categories, [categories]);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {memoizedCategories.map((cat) => (
        <div className="col" key={cat.id}>
          <div className="card rounded-">
            <div>
              {cat.image ? (
                <img loading="lazy" className="rounded-3" src={cat.image} alt={cat.slug} width={304} height={171}/>
              ) : cat.image_url ? (
                <img
                loading="lazy"
                  className="rounded-3"
                  src={cat.image_url}
                  alt={cat.title}
                  width={304} height={171}
                />
              ) : (
                <img
                loading="lazy"
                  className="rounded-3"
                  src="https://via.placeholder.com/1920x1080.png/e0c1e6/000000?Text=1920x1080"
                  alt="Placeholder"
                  width={304} height={171}
                />
              )}
            </div>
            <div className="card-body">
              <h5 className="card-title text-capitalize fw-bold">{cat.name}</h5>
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
