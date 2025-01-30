import React, { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";

export const WidgetCategories = () => {
  const {parentCategorysWithBlogs} = useContext(DataContext);

  const filterCategoryWithOutParant = parentCategorysWithBlogs?.reduce((acc,category) => {
    if(category.children && category.children.length > 0)
    {
      acc.push(...category.children);
    }
    return acc;
  },[])
  return (
    <div class="widget_categories">
      <h3 class="tag-title">Categories</h3>
      <ul>
        {filterCategoryWithOutParant?.map((category, index) => (
          <li key={index}>
            <Link to={`/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
