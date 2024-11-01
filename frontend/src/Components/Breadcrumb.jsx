import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const BreadcrumbItems = ({ items }) => {
  return (
    <Breadcrumb>
      {
        items.length > 0 ? (
          items.map((item, index) => (
            <Breadcrumb.Item href={item.slug} key={index}>{item.title}</Breadcrumb.Item>
          ))
        ) : (
          <Breadcrumb.Item>No items</Breadcrumb.Item>
        )
      }
    </Breadcrumb>
  );
};
