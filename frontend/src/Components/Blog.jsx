import React from "react";
import { Link } from "react-router-dom";

export const Blog = ({ index, blog, highlightLongWords }) => {
  return (
    blog && (
      <div className="pb-3 border-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-lg-2 mb-3 mb-lg-0">
            <div className="row">
              <div className="text-center">
                <span className="blog-number">{index + 1}.</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 mb-3 mb-lg-0">
            <div className="row">
              <div>
                <Link to={blog.slug}>
                  <p className="blog-heading mb-0 ellipsis-two-lines">
                    {highlightLongWords(blog.title)}
                  </p>
                </Link>
                <p className="mb-0 blog-para mt-1">{blog.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-3 mb-lg-0">
            <div className="row">
              <div>
                {blog.image ? (
                  <img loading="lazy" className="rounded-4" src={blog.image} alt={blog.slug} width={222} height={125} />
                ) : (
                  <img loading="lazy" src={blog.image_url} alt={blog.title} width={222} height={125}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
