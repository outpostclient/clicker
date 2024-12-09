import React, { useEffect } from "react";
import DOMPurify from "dompurify";
import useFetchSitePageRecords from "../CustomHooks/useFetchSitePageRecords";

export const About = () => {
  const about_Slug = "about-us";
  const { record, error } = useFetchSitePageRecords(about_Slug);
  console.log(record);

  if (error) return <div>{error}</div>;

  if (!record) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="fw-bold">{record?.title}</h3>
        </div>
        <div className="col-12 col-lg-8 mx-auto">
          <img
            className="rounded-5 mt-3"
            src={record?.image}
            alt={record?.title}
          />
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
  );
};
