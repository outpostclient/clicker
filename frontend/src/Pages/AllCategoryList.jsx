import React, { useContext, useMemo } from "react";
import { CategoryList } from "../Components/CategoryList";
import { DataContext } from "../Contexts/DataContext";
import ShimmerLoader from "../Components/ShimmerLoader";

const AllCategoryList = () => {
  const { parentCategorysWithBlogs, loading } =
    useContext(DataContext);

    const filterCategoryWithOutParant = parentCategorysWithBlogs?.reduce((acc,category) => {
      if(category.children && category.children.length > 0)
      {
        acc.push(...category.children);
      }
      return acc;
    },[])

    console.log(filterCategoryWithOutParant);

  if (!filterCategoryWithOutParant) {
    return null;
  }

  return (
    <>
      {filterCategoryWithOutParant && (
        <main className="container py-4">
          <h1 className="text-center mb-4 fw-bold">Explore Our Top Category</h1>
          {filterCategoryWithOutParant?.length > 0 ? (
            <CategoryList categories={filterCategoryWithOutParant} />
          ) : (
            <p>Category not Found</p>
          )}
        </main>
      )}
    </>
  );
};

export default AllCategoryList;
