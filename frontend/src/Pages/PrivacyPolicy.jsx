import React from "react";
import DOMPurify from "dompurify";
import { Container, Row, Col, Card } from "react-bootstrap";
import useFetchSitePageRecords from "../CustomHooks/useFetchSitePageRecords";

export const PrivacyPolicy = () => {
  const policy_Slug = "privacyandpolicy";
  const { record, error } = useFetchSitePageRecords(policy_Slug);
  console.log(record);

  if (error) return <div>{error}</div>;

  if (!record) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }
  return (
    <Container className="my-5">
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
