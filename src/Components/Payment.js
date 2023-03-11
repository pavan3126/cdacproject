import React, { useState } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "./images/payment.gif";

export default function Payment() {
  const [cardNo, setCardNo] = useState("");
  const [zip, setZip] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  function validateForm() {
    return cardNo.length > 0 && zip.length > 0 && cvv.length > 0;
  }

  function handleSubmit(event) {
    
    if(cardNo.length==16 && zip.length > 0 && cvv.length==3)
    {
      alert("payment successful");

      navigate("/");
    }
    else{
      alert("please enter valid details");
      navigate("/payment");
    }
    event.preventDefault();
    
  }

  return (
    <div className="Billing">
      <header className="About-header">
        <img
          src={logo}
          className="About-logo m-auto"
          width="270"
          height="200"
          alt="logo"
        />
      </header>
      <br />
      <br />
      <Form onSubmit={handleSubmit}>
        {" "}
        <hr />
        <Row>
          <Form.Group as={Col} md="6" size="lg" controlId="cardNo">
            <Form.Label>
              <b> Credit Card No.</b>
            </Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" size="lg" controlId="zip">
            <Form.Label>
              <b> Billing Zip</b>
            </Form.Label>
            <Form.Control
              
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </Form.Group>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Label>
              <b> Month</b>
            </Form.Label>
            <Form.Select aria-label="cartype">
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>
              <b> Year</b>
            </Form.Label>
            <Form.Select aria-label="cartype">
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Form.Group as={Col} md="4" size="lg" controlId="cvv">
            <Form.Label>
              <b> CVV</b>
            </Form.Label>
            <Form.Control
              
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </Form.Group>
        </Row>
        <br />
        <hr />
        <br />
        <Row>
          <Col>
            <Button
              variant="outline-success"
              block
              size="lg"
              type="submit"
              // disabled={!validateForm()}
             
            >
              <b> Submit</b>
            </Button>
          </Col>
          <Col>
            <Button
              variant="outline-danger"
              block
              size="lg"
              type="submit"
              
            >
              <b> Cancel</b>
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
