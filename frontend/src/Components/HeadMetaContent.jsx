import React from "react";
import { Helmet } from "react-helmet-async";

export const HeadMetaContent = ({singleBlog,preloadImage}) => {
  return (
    <>
      <Helmet>
        <title>{singleBlog?.title}</title>
        <meta name="description" content={singleBlog?.description} />
        <meta property="og:title" content={singleBlog?.title} />
        <meta property="og:description" content={singleBlog?.description} />
        <meta property="og:image" content={singleBlog?.image} />
        
        <link rel="preload" href={preloadImage} as="image"/>

      </Helmet>
    </>
  );
};
