import React, { useMemo } from "react";
import { Link } from "react-router-dom";

export const WidgetCategories = ({ categories }) => {
  const memorizedCategories = useMemo(() => {
    return categories.filter((category) => category.parent !== null);
  }, [categories]);
  return (
    <div class="widget_categories">
      <h3 class="tag-title">Categories</h3>
      <ul>
        {memorizedCategories?.slice(0, 10).map((category, index) => (
          <li key={index}>
            <Link to={`/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
