import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { BlogFeature } from "../Components/BlogFeature";
import { AffiliateLinks } from "../Components/AffiliateLinks";
import DOMPurify from "dompurify";
import { MustRead } from "../Components/MustRead";
import { HeadMetaContent } from "../Components/HeadMetaContent";
import { formatDate } from "../Utils/DateFormatter";
import ShimmerLoader from "../Components/ShimmerLoader";

const BlogPage = () => {
  const { slug, blogslug } = useParams();
  const {
    loading,
    singleBlog,
    fetchSingleBlogData,
    fetchBlogListExcludeCurrent,
    pageViewState,
    blogPageView,
    blogListExcludeCurrent
  } = useContext(DataContext);

  useEffect(() => {
    if (blogslug) fetchSingleBlogData(blogslug);
  }, [blogslug]);

  useEffect(() => {
    if (singleBlog?.id) {
      blogPageView(singleBlog.id);
      fetchBlogListExcludeCurrent(singleBlog.category, singleBlog.id);
    }
  }, [singleBlog]);

  const blogUrl = `${singleBlog?.category_slug}/${singleBlog?.slug}`;


  if (!singleBlog) return null;


  return (
    <div className="container my-5">
      <ul
        className="breadcumb-menu d-flex gap-2 flex-wrap"
        style={{ listStyle: "none", paddingLeft: "0rem" }}
      >
        <li><Link to="/">Home</Link></li>
        <li>/</li>
        <li><Link to={`/${singleBlog?.category_slug}`}>{singleBlog?.category_name}</Link></li>
        <li>/</li>
        <li>{singleBlog?.title}</li>
      </ul>

      <HeadMetaContent singleBlog={singleBlog} canonialUrl={blogUrl} />

      <div className="row">
        {/* Main Content */}
        <div className="col-md-8 mb-4 mb-lg-0">
          <div className="main-content">
            <span className="badge text-bg-primary">{singleBlog?.category_name}</span>
            <h1 className="fs-4 fw-bold mb-3 mt-3">{singleBlog.title}</h1>
            <img
              className="img-fluid rounded mb-4"
              src={
                singleBlog.image || 
                singleBlog.image_url || 
                "https://via.placeholder.com/1920x1080.png/e0c1e6/000000?Text=1920x1080"
              }
              alt={singleBlog.alt_text || "Placeholder"}
              width={1344} height={768}
            />
            <div className="d-flex align-items-center justify-content-between mb-3">
              <p className="text-muted mb-0">
                Admin | {formatDate(singleBlog.date_created)}
              </p>
              <span className="blog-info">
                <i className="fas fa-eye"></i>
                <span>{pageViewState}</span>
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(singleBlog.content),
              }}
            />
            {singleBlog.category_feature && (
              <>
                <h3>{singleBlog.featureTitle}</h3>
                <BlogFeature item={singleBlog.category_feature} />
              </>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          <div className="sidebar">
            {singleBlog?.affiliate_links && (
              <AffiliateLinks item={singleBlog.affiliate_links} />
            )}
            {blogListExcludeCurrent?.length > 0 && (
              <div className="bg-white p-4 rounded-3 shadow-lg">
                <h4 className="fw-bold small mb-3">Must Reads</h4>
                {blogListExcludeCurrent.map((blog, index) => (
                  <MustRead
                    key={index}
                    item={{ ...blog, categorySlug: slug }}
                  />
                ))}
              </div>
            )}
            {singleBlog?.tags?.length > 0 && (
              <div className="tags-container mt-5">
                <h3 className="tag-title">Popular Tags</h3>
                <div className="tags-small-container">
                  {singleBlog.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
