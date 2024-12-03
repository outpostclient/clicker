import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const TermsAndConditions = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title as="h1" className="text-center mb-4">
                Terms and Conditions
              </Card.Title>

              <p><strong>Effective Date:</strong> 01/12/2024</p>
              <p><strong>Last Updated:</strong> 01/12/2024</p>

              <p>
                Welcome to <strong>gamifyzone.com</strong>. By accessing or using
                our website, you agree to be bound by these Terms and Conditions.
                If you do not agree with these terms, you are prohibited from using
                this website.
              </p>

              <h3 className="mt-4">1. Use of the Website</h3>
              <p>
                The content provided on gamifyzone.com is for informational and
                entertainment purposes only. By using this website, you agree:
              </p>
              <ul>
                <li>To use the website only for lawful purposes.</li>
                <li>Not to disrupt or interfere with the security of the website.</li>
                <li>
                  Not to misuse, reverse engineer, or exploit any part of the
                  website.
                </li>
              </ul>

              <h3 className="mt-4">2. Intellectual Property Rights</h3>
              <p>
                All content on gamifyzone.com, including text, graphics, logos,
                images, and software, is the intellectual property of gamifyzone.com
                or its content providers. You may not reproduce, distribute, or
                create derivative works from our content without prior written
                consent.
              </p>

              <h3 className="mt-4">3. User Accounts</h3>
              <p>
                Some features of the website may require you to create an account.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. We reserve the right to terminate accounts for
                unauthorized or suspicious activity.
              </p>

              <h3 className="mt-4">4. Third-Party Links</h3>
              <p>
                gamifyzone.com may contain links to third-party websites or
                services. These links are provided for convenience, and we are not
                responsible for the content, policies, or practices of these
                third-party websites. Visiting such sites is at your own risk.
              </p>

              <h3 className="mt-4">5. Limitation of Liability</h3>
              <p>
                gamifyzone.com is not responsible for any direct, indirect,
                incidental, or consequential damages arising from your use of the
                website. All content is provided "as is" without warranties of any
                kind, either express or implied.
              </p>

              <h3 className="mt-4">6. User-Generated Content</h3>
              <p>
                Users may post comments, reviews, or other content on the website.
                By posting content, you grant gamifyzone.com a non-exclusive,
                royalty-free, and transferable license to use, reproduce, and
                display the content. Content deemed inappropriate, offensive, or
                infringing may be removed without notice.
              </p>

              <h3 className="mt-4">7. Modifications to the Terms</h3>
              <p>
                gamifyzone.com reserves the right to modify these Terms and
                Conditions at any time. Changes will be effective immediately upon
                posting. Your continued use of the website constitutes acceptance
                of the updated terms.
              </p>

              <h3 className="mt-4">8. Governing Law</h3>
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of [Your Country/State]. Any disputes
                arising from these terms will be subject to the exclusive
                jurisdiction of the courts in [Your Jurisdiction].
              </p>

              <h3 className="mt-4">9. Contact Information</h3>
              <p>
                If you have any questions or concerns about these Terms and
                Conditions, please contact us at:
              </p>
              <address>
                <strong>gamifyzone.com</strong> <br />
                Email:{" "}
                <a href="mailto:support@gamifyzone.com">support@gamifyzone.com</a>{" "}
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
