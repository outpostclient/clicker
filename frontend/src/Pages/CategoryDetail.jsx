import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { Blog } from "../Components/Blog";
import { Tags } from "../Components/Tags";
import { WidgetCategories } from "../Components/WidgetCategories";
import { HeadMetaContent } from "../Components/HeadMetaContent";

const CategoryDetail = () => {
  const { slug } = useParams();
  const { categories, blogs } = useContext(DataContext);
  console.log("categories", categories);

  const category = categories?.find((cat) => cat.slug === slug);
  console.log("category on category details page", category);

  const filterData = category
    ? blogs?.filter((blog) => blog.category === category.id)
    : [];

  const highlightLongWords = (title) => {
    const words = title.split(" ");
    return words.map((word, index) => (
      <React.Fragment key={index}>
        {word.length >= 5 ? (
          <span className="blog-title-heading text-primary">{word}</span>
        ) : (
          word
        )}
        {index < words.length - 1 && " "}
      </React.Fragment>
    ));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <ul
          className="breadcumb-menu d-flex gap-2 flex-wrap"
          style={{ listStyle: "none", paddingLeft: "0rem" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li>{category?.title}</li>
        </ul>
      </div>
      <HeadMetaContent singleBlog={category} />
      <div className="row gx-5">
        <div className="col-12 col-lg-9">
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
        <div className="col-12 col-lg-3">
          <WidgetCategories {...{ categories }} />
          <Tags {...{ categories }} />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
