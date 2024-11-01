import React, { useContext, useMemo } from "react";
import { CategoryList } from "../Components/CategoryList";
import { DataContext } from "../Contexts/DataContext";

export const AllCategoryList = () => {
  const { categories } = useContext(DataContext);

  // Use useMemo to memoize the categories value to avoid unnecessary re-renders
  const memoizedCategories = useMemo(() => categories, [categories]);

  console.log(memoizedCategories);
  return (
    <div>
      <>
        <main className="container py-4">
          <h1 className="text-center mb-4">Explore Our Top Category</h1>
          {memoizedCategories.length > 0 ? (
            <CategoryList categories={memoizedCategories} />
          ) : (
            <p>Category not Found</p>
          )}
        </main>
      </>
    </div>
  );
};
