import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./images/logo.png";
import "./NoPage.css";
//import Gm from "./game/Gm";


function NoPage() {
  return (
    <div className="NoPage">
      <Container>
        <br />
        <Row>
          <Col>
            <header className="NoPage-header">
              <img src={logo} className="NoPage-logo m-auto" alt="logo" />
            </header>
          </Col>
          <Col>
            <h1> Something Went Wrong!!</h1>
            <br />
            <h1>
              <u>
                <a className="NoPage-link" href="/home">
                  Return To Home Page
                </a>
              </u>
            </h1>
            <br />
            {/* <Row>
              <Gm />
            </Row> */}
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}

export default NoPage;
