import React, { useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Image,
  Card,
  Modal,
} from 'react-bootstrap';
import sellProgasImg from '../images/sell.png';
import Bike from '../images/bike1.png';

const endpoints = {
  contact: 'http://localhost:9000/sendSms',
};

const axios = require('axios');

function SellProgasModal(props) {
  const [validated, setValidated] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    location: '',
    area: '',
    cylinder: '',
  });

  const handleAll = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    let { phone } = formState;
    let data = { phone };
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        handleError();
      } else {
        handleSuccess();
      }
    });
  };

  const handleSuccess = () => {
    setFormState({
      name: '',
      phone: '',
      location: '',
      area: '',
      loading: false,
      error: false,
    });
  };

  const handleError = msg => {
    setFormState({
      loading: false,
      error: true,
      msg,
    });
  };

  const onChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      {...props}
      size="xl"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="model-heading">Become a Pro</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container className="get-form">
          <Row className="section-heading">
            <Col>
              <h5>
                Leave your details and we will contact you about becoming one of
                our proud Retailers
              </h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form
                name="SellProGas Request Final"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thankyou/"
                noValidate
                validated={validated}
                onSubmit={handleAll}
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="SellProGas Request Final"
                />
                <div hidden>
                  <Form.Label>
                    Don't Fill this input: <input name="bot-field" />
                  </Form.Label>
                </div>
                <Form.Row className="label-text">
                  <Col>
                    <Form.Label className="label-name">Full Name</Form.Label>
                    <Form.Control
                      className="form-input"
                      type="text"
                      name="name"
                      onChange={onChange}
                      pattern="^[a-zA-Z ]*$"
                      placeholder="Full Name"
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please add a name.
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label className="label-name">Phone Number</Form.Label>
                    <Form.Control
                      className="form-input"
                      type="tel"
                      name="phone"
                      pattern="^\d{10}$"
                      onChange={onChange}
                      placeholder="Enter Phone 07xxxx"
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid phone number.
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Form.Row className="label-text">
                  <Col>
                    <Form.Label className="label-name">Location</Form.Label>
                    <Form.Control
                      className="form-input"
                      type="text"
                      name="location"
                      onChange={onChange}
                      pattern="^[a-zA-Z ]*$"
                      required
                      as="select"
                    >
                      <option value="">Select your City</option>
                      <option value="nairobi">Nairobi</option>
                      <option value="mombasa">Mombasa</option>
                      <option value="kisumu">Kisumu</option>
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please add a location
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label className="label-name">Area</Form.Label>
                    <Form.Control
                      className="form-input"
                      type="text"
                      name="area"
                      onChange={onChange}
                      pattern="^[a-zA-Z ]*$"
                      required
                      as="select"
                    >
                      <option value="">Select your Area</option>
                      <option value="thika">Thika Road</option>
                      <option value="kilimani">Kilimani</option>
                      <option value="runda">Runda</option>
                    </Form.Control>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please add your area
                    </Form.Control.Feedback>
                  </Col>
                </Form.Row>
                <Button className="form-btn" type="submit">
                  Request a Callback
                </Button>
              </Form>
            </Col>
            <Col sm={6} className="bike">
              <Image src={Bike} fluid />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default function SellProForm() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Row>
      <Col>
        <Card
          className="text-center h-100 card-color card-section"
          onClick={() => setModalShow(true)}
        >
          <Card.Body>
            <Image class="sell-img" src={sellProgasImg} fluid />
            <br />
            <Button className="pro-btn">Sell ProGas</Button>
          </Card.Body>
        </Card>
        <SellProgasModal show={modalShow} onHide={() => setModalShow(false)} />
      </Col>
    </Row>
  );
}
