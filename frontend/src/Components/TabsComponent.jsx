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
        <h1 className="text-center my-4 fw-bold text-light">
        Simplify Decisions with Unbiased Reviews <br />and Comprehensive, Transparent Guides!
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
                className="justify-content-center tabs-parent"
              >
                {items?.map((item,index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={item.slug} className="tab-link">
                      <div className="tab-icon"><i className={item.image_url}></i></div>
                      <div>{item.name}</div>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content className="mt-4">
                {items?.map((itemBlogs,index) => (
                  <Tab.Pane key={index} eventKey={itemBlogs.slug}>
                    <div className="d-flex flex-wrap align-items-center justify-content-center">
                      {itemBlogs.children?.map((child,index) => (
                        <div key={index} className="tabs-child category-item tab-link1">
                          <h4 className="mb-0 banner-tabs-sub-heading">
                            {child.name}
                          </h4>
                          <div className="d-flex">
                            <Link
                              to={`${child.slug}`}
                              className="banner-tabs-sub-para text-primary"
                            >
                              Explore →
                            </Link>
                            {/* <Link
                              to={`${child.slug}`}
                              className="banner-tabs-sub-para text-danger"
                            >
                              Compare →
                            </Link> */}
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
