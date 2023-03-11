import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "./images/thankyou.jpg";

function ThankYou() {
  return (
    <div className="ThankYou">
      <Container>
        <br />
       
        <Row>
            <header className="ThankYou-header">
              <img
                src={logo}
                className="About-logo m-auto"
                width="420"
                height="320"
                alt="logo"
              />
            </header>
            <br />
            <br />
            <h1>Wish you Happy Journey !!!</h1>
            <br />
            <br />
            
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default ThankYou;
