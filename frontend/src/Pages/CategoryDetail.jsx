import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { Blog } from "../Components/Blog";
import { BreadcrumbItems } from "../Components/Breadcrumb";

export const CategoryDetail = () => {
  const { slug } = useParams();
  const { categories, blogs } = useContext(DataContext);

  const category = categories?.find((cat) => cat.slug === slug);

  const filterData = category
    ? blogs?.filter((blog) => blog.category === category.id)
    : [];

  const highlightLongWords = (title) => {
    const words = title.split(" ");
    return words.map((word, index) => (
      <React.Fragment key={index}>
        {word.length >= 5 ? (
          <span className="blog-title-heading">{word}</span>
        ) : (
          word
        )}
        {index < words.length - 1 && " "}
      </React.Fragment>
    ));
  };

  const breadCrumbItems = [
    { id: 1, title: "Home", slug: "/" },
    { id: 2, title: category?.title || "Category", slug: slug }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <BreadcrumbItems items={breadCrumbItems} />
      </div>
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="row">
            {filterData.length > 0 ? (
              filterData.map((blog, index) => (
                <div key={index} className="col-12 mb-3">
                  <Blog
                    index={index}
                    blog={blog}
                    highlightLongWords={highlightLongWords}
                  />
                </div>
              ))
            ) : (
              <p>No result found</p>
            )}
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
};
