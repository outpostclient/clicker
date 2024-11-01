import React, { useContext, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { BlogFeature } from "../Components/BlogFeature";
import { AffiliateLinks } from "../Components/AffiliateLinks";
import DOMPurify from "dompurify";
import { MustRead } from "../Components/MustRead";
import {BreadcrumbItems} from "../Components/Breadcrumb"

export const BlogPage = () => {
  const { slug, blogslug } = useParams();
  const { fetchCategoryForCategoryFeatureNotNull } = useContext(DataContext);

  const { singleBlog, fetchSingleBlogData } = useContext(DataContext);
  const { blogListExcludeCurrent, fetchBlogListExcludeCurrent } =
    useContext(DataContext);

  const initialLoad = useRef(true);
  const initialFetchBlogList = useRef(true);

  useEffect(() => {
    if (singleBlog) {
      fetchSingleBlogData(blogslug);
    }
  }, [blogslug]);

  useEffect(() => {
    if (singleBlog?.id) {
      fetchBlogListExcludeCurrent(singleBlog.category, singleBlog.id);
      // initialFetchBlogList.current = false;
    }
  }, [singleBlog, fetchBlogListExcludeCurrent]);

  const breadCrumbItems = [
    { id: 1, title: "Home", slug: "/" },
    { id: 2, title: singleBlog?.category, slug: singleBlog?.slug },
    { id: 3, title: singleBlog?.title, slug: "#" },
  ];
  return (
    <div>
      {singleBlog && (
        <div className="container my-5">
          <div className="row">
            <BreadcrumbItems items={breadCrumbItems} />
          </div>
          <div className="row">
            <div className="col-md-8 mb-4 mb-lg-0">
              <div className="main-content">
                <h1>{singleBlog.title}</h1>
                <p className="text-muted">
                  by Suzannah Weiss | Last Updated: Jun 17, 2024
                </p>
                <img
                  src="https://images.top10.com/f_auto,q_auto/v1/production/charts/uploads/photo/bestdatingsites.20230515105530.jpg"
                  className="img-fluid rounded mb-4"
                  alt="Couple Image"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(singleBlog.content),
                  }}
                />
                <h3>{singleBlog.featureTitle}</h3>
                <ul>
                  {singleBlog.category_feature?.map((feature) => (
                    <li>
                      <a href={feature.action_url}>{feature.title}</a> -{" "}
                      <span
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(feature.description),
                        }}
                      />
                    </li>
                  ))}
                </ul>
                {singleBlog.category_feature && (
                  <BlogFeature item={singleBlog.category_feature} />
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar">
                {singleBlog?.affiliate_links && (
                  <AffiliateLinks item={singleBlog.affiliate_links} />
                )}
                {blogListExcludeCurrent?.length > 0 && (
                  <div className="bg-white p-4 rounded-3 shadow-lg">
                    <h4 className="fw-bold small mb-3">Must Reads</h4>
                    {blogListExcludeCurrent.map((blog) => (
                      <MustRead
                        item={{
                          ...blog,
                          categorySlug: slug,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
