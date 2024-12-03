import React from "react";
import { Link } from "react-router-dom";

export const WidgetCategories = ({categories}) => {
  return (
    <div class="widget_categories">
      <h3 class="tag-title">Categories</h3>
      <ul>
        {categories?.slice(0,10).map((category,index) => (
          <li key={index}>
            <Link to={`/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
