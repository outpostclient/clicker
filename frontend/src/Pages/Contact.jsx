import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import DOMPurify from "dompurify";
import useFetchSitePageRecords from "../CustomHooks/useFetchSitePageRecords";
import ShimmerLoader from "../Components/ShimmerLoader";
import { HeadMetaContent } from "../Components/HeadMetaContent";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const contact_Slug = "contact-us";
  const { record } = useFetchSitePageRecords(contact_Slug);

  if (!record) {
    return <ShimmerLoader/>; // Show a loading message while fetching data
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/contact/`,
        formData
      );
      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <Container className="py-5">
      <HeadMetaContent singleBlog={record} canonialUrl={record?.slug}/>
      <Row className="mb-5 text-center">
        <Col>
          <h1>Contact Us</h1>
          <p className="text-muted">
            We would love to hear from you! Reach out to us with your queries or
            feedback.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
          {success && (
            <p className="text-success mt-3">Message sent successfully!</p>
          )}
          {error && <p className="text-danger mt-3">{error}</p>}
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <h3>Contact Information</h3>
            <p
              className=""
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(record?.description),
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
