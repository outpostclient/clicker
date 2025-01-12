import React from "react";
import DOMPurify from "dompurify";
import { Accordion, Row, Col, Badge, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatDate } from "../Utils/DateFormatter";

export const HomeAccordianItem = ({category,index}) => {
  if(!category)
  {
    return null;
  }
  return (
    <Accordion.Item
      key={category.id}
      eventKey={category.id.toString()}
      className=""
    >
      <Accordion.Header>
        <span className="category-index bg-primary text-white px-2 py-1 me-2 rounded">
          {index + 1}
        </span>
        <div className="d-flex align-items-center justify-content-between">
          <Link to={`/${category.slug}`}>
            <span className="mx-2 fw-bold">{category.name}</span>
          </Link>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <Row className="align-items-center mb-3">
          <Col xs={12} lg={6}>
            <div>
              {category.image ? (
                <img
                  loading="lazy"
                  className="shadow-lg w-100 rounded"
                  src={category.image}
                  alt={category.slug}
                  width={529}
                  height={298}
                />
              ) : category.image_url ? (
                <img
                  loading="lazy"
                  className="shadow-lg w-100 rounded"
                  src={category.image_url}
                  alt={category.title}
                  width={529}
                  height={298}
                />
              ) : (
                <img
                  loading="lazy"
                  className="shadow-lg w-100 rounded"
                  src="https://via.placeholder.com/1920x1080.png/e0c1e6/000000?Text=1920x1080"
                  alt="Placeholder"
                  width={529}
                  height={298}
                />
              )}
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <p className="blog-heading fw-bold">{category.title}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(category.description),
              }}
            />
            <Badge bg="primary" className="mb-3">
              {formatDate(category.updated_date)}
            </Badge>
            <div>
              <Link
                to={category.slug}
                className="btn btn-outline-danger fw-bold"
              >
                {`View ${category.name}`}
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          {category?.blogs?.map((blog, blogIndex) => (
            <Col key={blogIndex} xs={12} lg={4} className="mb-3">
              <div className="">
                <Row className="align-items-center">
                  <Col xs={12} lg={6}>
                    {blog.image ? (
                      <Image
                        loading="lazy"
                        className="rounded-2"
                        src={blog.image}
                        alt={blog.slug}
                        fluid
                        width={160}
                        height={90}
                      />
                    ) : blog.image_url ? (
                      <img
                        loading="lazy"
                        className="shadow-lg w-100 rounded"
                        src={blog.image_url}
                        alt={blog.title}
                        width={160}
                        height={90}
                      />
                    ) : (
                      <img
                        loading="lazy"
                        className="shadow-lg w-100 rounded"
                        src="https://via.placeholder.com/1920x1080.png/e0c1e6/000000?Text=1920x1080"
                        alt="Placeholder"
                        width={160}
                        height={90}
                      />
                    )}
                  </Col>
                  <Col xs={12} lg={6}>
                    <Card.Body>
                      <div className="blog-heading-para ellipsis-two-lines">
                        <Link to={`${category.slug}/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </div>
                      <Card.Text className="small">{blog.author}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  );
};
