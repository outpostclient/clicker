import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { BlogFeature } from "../Components/BlogFeature";
import { AffiliateLinks } from "../Components/AffiliateLinks";
import DOMPurify from "dompurify";
import { MustRead } from "../Components/MustRead";
import {BreadcrumbItems} from "../Components/Breadcrumb"
import { HeadMetaContent } from "../Components/HeadMetaContent";

export const BlogPage = () => {
  const { slug, blogslug } = useParams();
  const { fetchCategoryForCategoryFeatureNotNull } = useContext(DataContext);

  const { singleBlog, fetchSingleBlogData } = useContext(DataContext);
  const { blogListExcludeCurrent, fetchBlogListExcludeCurrent } =
    useContext(DataContext);

  // const initialLoad = useRef(true);
  // const initialFetchBlogList = useRef(true);

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

  const blogDate = (blogdate) => {
    // Ensure blogdate is a valid Date objec

    const day = String(blogdate.getDate()).padStart(2, '0');
    const month = String(blogdate.getMonth() + 1).padStart(2, '0');
    const year = blogdate.getFullYear();

    const formatDate = `${day}-${month}-${year}`;

    return formatDate;
};

  return (
    <div>
      {singleBlog && (
        <div className="container my-5">
          <div className="row">
            <BreadcrumbItems items={breadCrumbItems} />
          </div>
          <HeadMetaContent singleBlog={singleBlog}/>
          <div className="row">
            <div className="col-md-8 mb-4 mb-lg-0">
              <div className="main-content">
                <h1>{singleBlog.title}</h1>
                <p className="text-muted">
                  {singleBlog.author} | {singleBlog.date_created}
                </p>
                <img
                  src={singleBlog.image}
                  className="img-fluid rounded mb-4"
                  alt={singleBlog.title}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(singleBlog.content),
                  }}
                />
                <h3>{singleBlog.featureTitle}</h3>
                <ul>
                  {singleBlog.category_feature?.map((feature,index) => (
                    <li key={index}>
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
                    {blogListExcludeCurrent.map((blog,index) => (
                      <MustRead key={index}
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
