import React, { useState } from "react";
import { Tab, Nav, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const TabsComponent = ({ items }) => {
  const [activeKey, setActiveKey] = useState("lifestyle");

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <Container>
      <div className="py-5">
        <h1 className="text-center my-4 fw-bold">
          Compare and shop the Top10 best <br />
          services & products for you
        </h1>
        <Tab.Container
          id="left-tabs-example"
          activeKey={activeKey}
          onSelect={handleSelect}
        >
          <Row>
            <Col sm={12}>
              <Nav
                variant="pills"
                className="justify-content-center tabs-parent "
              >
                {items?.map((item) => (
                  <Nav.Item>
                    <Nav.Link eventKey={item.slug} className="tab-link">
                      <div className="tab-icon">🧘‍♂️</div>
                      <div>{item.name}</div>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content className="mt-4">
                {items?.map((itemBlogs) => (
                  <Tab.Pane eventKey={itemBlogs.slug}>
                    <div className="d-flex flex-wrap">
                      {itemBlogs.children?.map((child) => (
                        <div className="tabs-child category-item tab-link1">
                          <h4 className="mb-0 banner-tabs-sub-heading">
                            {child.name}
                          </h4>
                          <div className="d-flex">
                            <Link
                              to={`${child.slug}`}
                              className="banner-tabs-sub-para"
                            >
                              Explore →
                            </Link>
                            <Link
                              to={`${child.slug}`}
                              className="banner-tabs-sub-para text-danger"
                            >
                              Compare →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};
