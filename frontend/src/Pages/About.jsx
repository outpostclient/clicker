import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import useFetchSitePageRecords from "../CustomHooks/useFetchSitePageRecords";
import ShimmerLoader from "../Components/ShimmerLoader";
import { HeadMetaContent } from "../Components/HeadMetaContent";

const About = () => {
  const about_Slug = "about-us";
  const { record, error } = useFetchSitePageRecords(about_Slug);
  if (error) return <div>{error}</div>;

  if (!record) {
    return null; // Show a loading message while fetching data
  }
  return (
    <>
    <HeadMetaContent singleBlog={record} canonialUrl={record?.slug}/>
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="fw-bold">{record?.title}</h3>
        </div>
        <div className="col-12 col-lg-8 mx-auto">
          <div>
            {record.image ? (
              <img
                className="rounded-5 mt-3"
                width={856} height={374}
                src={record.image}
                alt={record.slug}
              />
            ) : (
              <img
                className="rounded-5 mt-3"
                width={856} height={374}
                src={record.image_url}
                alt={record.title}
              />
            ) }
          </div>
        </div>
        <div className="col-12">
          <p
            className="mt-5"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(record?.description),
            }}
          />
        </div>
      </div>
    </div>
    </>
    
  );
};

export default About;
