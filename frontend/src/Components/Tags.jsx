import React from "react";
import { Link } from "react-router-dom";

export const Tags = ({ categories }) => {
  return (
    <div class="tags-container">
      <h3 class="tag-title">Popular Tags</h3>
      <div class="tags-small-container">
        {categories?.slice(0,10).map((category) => (
          <Link to={`/${category.slug}`}>{category.name}</Link>
        ))}
      </div>
    </div>
  );
};
