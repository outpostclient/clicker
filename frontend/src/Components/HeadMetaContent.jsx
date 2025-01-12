import React from "react";
import { Helmet } from "react-helmet-async";

export const HeadMetaContent = ({ singleBlog, preloadImage, canonialUrl }) => {
  return (
    <Helmet>
      {/* Basic SEO Meta Tags */}
      <title>{singleBlog?.title}</title>
      <meta name="description" content={singleBlog?.subtitle} />
      <meta
        name="keywords"
        content={singleBlog?.tags?.join(", ") || "Keywords"}
      />
      <meta
        name="author"
        content={singleBlog?.author ? "Unfilter Choice" : "Unfilter Choice"}
      />

      {canonialUrl ? (
        <link
          rel="canonical"
          href={`https://www.unfilterchoice.com/${canonialUrl}`}
        />
      ) : (
        <link rel="canonical" href="https://www.unfilterchoice.com/" />
      )}

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={singleBlog?.title} />
      <meta property="og:description" content={singleBlog?.subtitle} />
      <meta property="og:image" content={singleBlog?.image} />
      {canonialUrl ? (
        <meta
          property="og:url"
          content={`https://www.unfilterchoice.com/${canonialUrl}`}
        />
      ) : (
        <meta property="og:url" content={`https://www.unfilterchoice.com/`} />
      )}
      <meta property="og:site_name" content="Unfilter Choice" />
      <meta
        property="article:author"
        content={singleBlog?.author ? "Unfilter Choice" : "Unfilter Choice"}
      />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={singleBlog?.title} />
      <meta name="twitter:description" content={singleBlog?.subtitle} />
      <meta name="twitter:image" content={singleBlog?.image} />
      <meta name="twitter:site" content="@UnfilterChoice" />
      <meta name="twitter:creator" content="@UnfilterChoice" />

      {/* Preloading Image */}
      {preloadImage && <link rel="preload" href={preloadImage} as="image" />}

      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
    </Helmet>
  );
};
