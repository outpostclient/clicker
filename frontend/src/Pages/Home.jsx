import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { TabsComponent } from "../Components/TabsComponent";
import DOMPurify from "dompurify";
import { RangeWidth } from "../Components/RangeWidth";



export const Home = () => {
  const { categorysWithBlogs } = useContext(DataContext);
  const { parentCategorysWithBlogs } = useContext(DataContext);
  console.log("categorysWithBlogs", categorysWithBlogs);

  const formatDate = (isoDateStr) => {
    const date = new Date(isoDateStr);
    const options = { year: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };
  return (
    <>
      <div className="">
        <div className="mb-3 home-bg">
          <TabsComponent items={parentCategorysWithBlogs} />
        </div>
      </div>
      <div className="home container mt-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <p className="fw-bold mb-0">All Popular Category List</p>
          </div>
          <div>
            <Link className="fw-bold text-primary" to="all-list">
              All Category List
            </Link>
          </div>
        </div>
        {categorysWithBlogs?.length > 0 &&
          categorysWithBlogs.map((category, index) => (
            <div className="accordion mb-3" id={`categoryAccordian${category.id}`}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fw-bold accordian-color"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${category.id}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${category.id}`}
                  >
                    <span className="category-index">{index + 1}</span>
                    <span className="mx-2">{category.name}</span>
                  </button>
                </h2>
                <div
                  id={`flush-collapse${category.id}`}
                  className="accordion-collapse"
                  data-bs-parent={`#categoryAccordian${category.id}`}>
                  <div className="accordion-body">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-6 mb-3">
                        <div>
                          <img
                            className="shadow-lg rounded-2"
                            src={category.image_url}
                            alt={category.title}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 mb-3">
                        <div>
                          <p className="blog-heading">{category.title}</p>
                          <p
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(category.description),
                            }}
                          />
                          <p className="badge text-bg-primary">{formatDate(category.date_created)}</p>
                          <div>
                          <Link
                            to={`${category.slug}`}
                            className="btn btn-outline-danger fw-bold"
                          >
                            {`View ${category.name} Sites`}
                          </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {category.blogs.map((blog) => (
                        <div className="col-12 col-lg-4 mb-3">
                          <div className="row">
                            <div className="col-12 col-lg-6">
                              <div>
                                <img src={blog.image_url} alt="" />
                              </div>
                            </div>
                            <div className="col-12 col-lg-6">
                              <div>
                                <Link to={`${category.slug}/${blog.slug}`}>
                                  <p className="blog-heading-para mb-0 ellipsis-two-lines">
                                    {blog.title}
                                  </p>
                                </Link>
                                <p>{blog.author}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
