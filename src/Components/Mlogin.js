import { React, useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CustomerService from "../services/CustomerService";
import "./common.css";

export default function Mlogin() {
    const [validated, setValidated] = useState(false);
    const [value, onChange] = useState(new Date());
  const [membership, setMembership] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return membership.length > 0 && password.length > 0;
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="Mlogin">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="membership">
            <Form.Label>
              <b>Membership No.</b>
            </Form.Label>
            <Form.Control
              autoFocus
              type="input"
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group size="lg" controlId="password">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button
            block
            size="lg"
            type="submit"
            to={`/edit-customer/${membership}`}
            disabled={!validateForm()}
          >
            Go
          </Button>
        </Form>
      </Container>
    </div>
  );
}

