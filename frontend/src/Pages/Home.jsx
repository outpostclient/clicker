import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";
import { TabsComponent } from "../Components/TabsComponent";
import DOMPurify from "dompurify";
import { Accordion, Row, Col, Badge, Image, Card } from "react-bootstrap";

export const Home = () => {
  const { categorysWithBlogs } = useContext(DataContext);
  const { parentCategorysWithBlogs } = useContext(DataContext);
  console.log("categorysWithBlogs", categorysWithBlogs);

  const imageUrl = process.env.REACT_APP_IMAGE_URL;
  console.log("imageUrl", imageUrl);

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
      <div className="home container mt-4 mb-4">
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
        <Accordion>
          {categorysWithBlogs?.length > 0 &&
            categorysWithBlogs.map((category, index) => (
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
                    <Link to={`/${category.slug}`}><span className="mx-2 fw-bold">{category.name}</span></Link>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <Row className="align-items-center mb-3">
                    <Col xs={12} lg={6}>
                      <Image
                        src={category.image}
                        alt={category.slug}
                        rounded
                        className="shadow-lg w-100"
                      />
                    </Col>
                    <Col xs={12} lg={6}>
                      <p className="blog-heading fw-bold">{category.title}</p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(category.description),
                        }}
                      />
                      <Badge bg="primary" className="mb-3">
                        {formatDate(category.date_created)}
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
                    {category.blogs.map((blog, blogIndex) => (
                      <Col key={blogIndex} xs={12} lg={4} className="mb-3">
                        <div className="">
                          <Row className="align-items-center">
                            <Col xs={12} lg={6}>
                              <Image
                                className="rounded-2"
                                src={blog.image}
                                alt={blog.slug}
                                fluid
                              />
                            </Col>
                            <Col xs={12} lg={6}>
                              <Card.Body>
                                <div className="blog-heading-para ellipsis-two-lines">
                                  <Link to={`${category.slug}/${blog.slug}`}>
                                    {blog.title}
                                  </Link>
                                </div>
                                <Card.Text className="small">
                                  {blog.author}
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      </div>
    </>
  );
};
