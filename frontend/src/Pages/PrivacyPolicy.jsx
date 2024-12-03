import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const PrivacyPolicy = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title as="h1" className="text-center mb-4">
                Privacy Policy
              </Card.Title>

              <p><strong>Effective Date:</strong> 01/12/2024</p>
              <p><strong>Last Updated:</strong> 01/12/2024</p>

              <p>
                At <strong>gamifyzone.com</strong>, your privacy is one of our
                top priorities. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our
                website{" "}
                <a href="https://www.gamifyzone.com" target="_blank" rel="noopener noreferrer">
                  https://www.gamifyzone.com
                </a>. Please read this policy carefully to understand our practices
                regarding your personal data.
              </p>

              <p>
                By using gamifyzone.com, you agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>

              <h3 className="mt-4">1. Information We Collect</h3>
              <h5>a. Personal Information</h5>
              <p>
                We collect personal information that you voluntarily provide
                when:
              </p>
              <ul>
                <li>You sign up for our newsletter.</li>
                <li>You create an account or leave comments on blog posts.</li>
                <li>You contact us via email or forms.</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Social media handles (if connected)</li>
                <li>IP address</li>
              </ul>

              <h5>b. Non-Personal Information</h5>
              <p>
                We automatically collect non-identifiable data when you access
                the website. This may include:
              </p>
              <ul>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Pages viewed</li>
                <li>Time spent on pages</li>
                <li>Referring website</li>
              </ul>

              <h3 className="mt-4">2. How We Use Your Information</h3>
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li>To provide and maintain the website.</li>
                <li>To improve user experience and enhance website functionality.</li>
                <li>To send newsletters, updates, and promotional content (with your consent).</li>
                <li>To analyze website traffic and user behavior.</li>
                <li>To comply with legal obligations.</li>
              </ul>

              <h3 className="mt-4">3. Sharing Your Information</h3>
              <p>
                We do not sell, rent, or trade your personal information.
                However, we may share your data in the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>With service providers:</strong> Third-party services we
                  use to operate the website (e.g., hosting providers, analytics
                  platforms, email marketing services).
                </li>
                <li>
                  <strong>For legal compliance:</strong> If required to comply
                  with legal obligations, court orders, or law enforcement
                  requests.
                </li>
                <li>
                  <strong>In case of business transfers:</strong> If gamifyzone.com
                  is sold, merged, or reorganized, your information may be
                  transferred to the new owner.
                </li>
              </ul>

              <h3 className="mt-4">4. Cookies and Tracking Technologies</h3>
              <p>
                gamifyzone.com uses cookies to enhance your browsing experience.
                Cookies are small files stored on your device that help us:
              </p>
              <ul>
                <li>Remember your preferences.</li>
                <li>Track website usage and performance.</li>
                <li>Provide personalized content.</li>
              </ul>
              <p>
                You can control cookie settings through your browser. Disabling
                cookies may affect website functionality.
              </p>

              <h3 className="mt-4">5. Your Rights</h3>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access and portability:</strong> Request a copy of your personal data.</li>
                <li><strong>Rectification:</strong> Request corrections to your personal information.</li>
                <li><strong>Deletion:</strong> Request the deletion of your data, subject to legal obligations.</li>
                <li><strong>Opt-out:</strong> Unsubscribe from emails or restrict data processing.</li>
              </ul>
              <p>
                To exercise your rights, contact us at{" "}
                <a href="mailto:privacy@gamifyzone.com">privacy@gamifyzone.com</a>.
              </p>

              <h3 className="mt-4">6. Contact Us</h3>
              <p>
                If you have any questions, concerns, or feedback about this
                Privacy Policy, please contact us at:
              </p>
              <address>
                <strong>gamifyzone.com</strong> <br />
                Email:{" "}
                <a href="mailto:privacy@gamifyzone.com">privacy@gamifyzone.com</a>{" "}
                <br />
                Website:{" "}
                <a href="https://www.gamifyzone.com" target="_blank" rel="noopener noreferrer">
                  https://www.gamifyzone.com
                </a>
              </address>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
