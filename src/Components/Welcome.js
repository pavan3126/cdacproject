import React from "react";
import {Container, Button, Row } from "react-bootstrap";
import Vid from "../Components/Vid";
import "./common.css";


function Welcome() {
  return (
    <div className="CustomerCare">
      <Container>
        <h1>
          <b>Welcome To India Drive</b>
        </h1>

        <hr />
        <br />
        <Vid />
        <hr />
        <br />
        <Row>
          <Button variant="outline-success" size="md" href="/app" type="submit">
            <b> Continue Booking</b>
          </Button>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default Welcome;
