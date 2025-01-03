import React, { useContext, useMemo } from "react";
import { CategoryList } from "../Components/CategoryList";
import { DataContext } from "../Contexts/DataContext";
import ShimmerLoader from "../Components/ShimmerLoader";

const AllCategoryList = () => {
  const { categories, loading } = useContext(DataContext);

  // Use useMemo to memoize the categories value to avoid unnecessary re-renders
  const memoizedCategories = useMemo(() => {
    return categories.filter((category) => category.parent !== null);
  }, [categories]);
  if (loading) {
    return <ShimmerLoader />;
  }
  return (
    <div>
      <>
        <main className="container py-4">
          <h1 className="text-center mb-4 fw-bold">Explore Our Top Category</h1>
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

export default AllCategoryList;
