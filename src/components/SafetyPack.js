import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap/';
import protoImage from '../Gallery/protoImagery.png';
import safetyImage from '../Gallery/safetyImage.png';

export default function SafetyPack() {
  return (
    <section className="safe-section mt-5">
      <Container>
        <Row>
          <Col>
            <Image className="protoimg" src={protoImage} fluid />
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://protoenergy.com/careers/"
            >
              <Button className="form-btn-safe safety-button">Visit our parent site</Button>
            </a>
          </Col>
          <Col>
            <Image className="safeimg" src={safetyImage} fluid />
            <p className="safe-paragraph">
              Download our <br></br>{' '}
              <a href="#" download>
                Safety Information Pack
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
