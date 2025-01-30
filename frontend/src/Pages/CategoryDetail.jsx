import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { Blog } from "../Components/Blog";
import { Tags } from "../Components/Tags";
import { WidgetCategories } from "../Components/WidgetCategories";
import { HeadMetaContent } from "../Components/HeadMetaContent";
import ShimmerLoader from "../Components/ShimmerLoader";

const CategoryDetail = () => {
  const { slug } = useParams();
  const {
    blogListUsingCategorySlug,
    loading,
    fetchBlogsListUsingCategorySlug,
  } = useContext(DataContext);

  useEffect(() => {
    fetchBlogsListUsingCategorySlug(slug);
  }, [slug]);

  console.log("blogListUsingCategorySlug", blogListUsingCategorySlug);

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
  if (!blogListUsingCategorySlug) return null;

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
          <li>{blogListUsingCategorySlug?.title}</li>
        </ul>
      </div>
      <HeadMetaContent
        singleBlog={blogListUsingCategorySlug}
        canonialUrl={blogListUsingCategorySlug.slug}
      />
      <div className="row gx-5">
        <div className="col-12 col-lg-9">
          <div className="row">
            {blogListUsingCategorySlug?.blogs?.length > 0 ? (
              blogListUsingCategorySlug?.blogs?.map((blog, index) => (
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
          <WidgetCategories />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
