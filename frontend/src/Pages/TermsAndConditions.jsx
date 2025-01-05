import React from "react";
import DOMPurify from "dompurify";
import { Container, Row, Col, Card } from "react-bootstrap";
import useFetchSitePageRecords from "../CustomHooks/useFetchSitePageRecords";
import ShimmerLoader from "../Components/ShimmerLoader";
import { HeadMetaContent } from "../Components/HeadMetaContent";

const TermsAndConditions = () => {
  const terms_Slug = "termsandcondition";
  const { record, error } = useFetchSitePageRecords(terms_Slug);
  
  if (error) return <div>{error}</div>;

  if (!record) {
    return <ShimmerLoader/>; // Show a loading message while fetching data
  }
  return (
    <Container className="my-5">
      <HeadMetaContent singleBlog={record} canonialUrl={record?.slug}/>
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title as="h1" className="text-center mb-4">
                {record?.title}
              </Card.Title>

              <p
                className="mt-5"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(record?.description),
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TermsAndConditions;
